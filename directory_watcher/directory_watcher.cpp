#include <iostream>
#include <thread>
#include <atomic>
#include <vector>
#include <string>
#include <unordered_map>
#include <sys/inotify.h>
#include <unistd.h>
#include <limits.h>
#include <auparse.h>
#include <cstring>
#include <mutex>

constexpr size_t EVENT_SIZE = sizeof(struct inotify_event);
constexpr size_t BUF_LEN = 1024 * (EVENT_SIZE + 16);

std::mutex printMutex;

// Convert inotify mask to readable action
std::string actionType(uint32_t mask) {
    if (mask & IN_CREATE) return "CREATED";
    if (mask & IN_MODIFY) return "MODIFIED";
    if (mask & IN_DELETE) return "DELETED";
    if (mask & IN_ATTRIB) return "ATTRIBUTE_CHANGED";
    if (mask & IN_MOVED_FROM) return "MOVED_FROM";
    if (mask & IN_MOVED_TO) return "MOVED_TO";
    return "UNKNOWN";
}

// Get PID and executable using libauparse (best-effort)
bool getProcessInfo(pid_t &pid, std::string &exe) {
    auparse_state_t *au = auparse_init(AUSOURCE_LOGS, 0);
    if (!au) return false;

    while (auparse_next_event(au) > 0) {
        const char* pidStr = auparse_find_field(au, "pid");
        const char* exeStr = auparse_find_field(au, "exe");

        if (pidStr) pid = std::stoi(pidStr);
        if (exeStr) exe = exeStr;
    }

    auparse_destroy(au);
    return true;
}

void watchDirectory(const std::string &path, std::atomic<bool> &running) {
    int fd = inotify_init1(IN_NONBLOCK);
    if (fd < 0) {
        perror("inotify_init1");
        return;
    }

    int wd = inotify_add_watch(fd, path.c_str(),
                               IN_CREATE | IN_MODIFY | IN_DELETE |
                               IN_ATTRIB | IN_MOVED_FROM | IN_MOVED_TO);
    if (wd < 0) {
        perror("inotify_add_watch");
        close(fd);
        return;
    }

    char buffer[BUF_LEN];

    while (running.load()) {
        int length = read(fd, buffer, BUF_LEN);
        if (length < 0) {
            usleep(100000); // avoid busy wait
            continue;
        }

        int i = 0;
        while (i < length) {
            struct inotify_event *event = (struct inotify_event *)&buffer[i];
            pid_t pid = 0;
            std::string exe = "unknown";

            getProcessInfo(pid, exe);

            {
                std::lock_guard<std::mutex> lock(printMutex);
                std::cout << "[" << actionType(event->mask) << "] "
                          << event->name
                          << " | PID: " << pid
                          << " | Executable: " << exe
                          << std::endl;
            }

            i += EVENT_SIZE + event->len;
        }
    }

    inotify_rm_watch(fd, wd);
    close(fd);
}

int main(int argc, char *argv[]) {
    if (argc < 2) {
        std::cerr << "Usage: " << argv[0] << " <directory_to_watch>\n";
        return 1;
    }

    std::string path = argv[1];
    std::atomic<bool> running(true);

    std::thread watcher(watchDirectory, path, std::ref(running));

    std::cout << "Watching directory: " << path << ". Press Enter to stop.\n";
    std::cin.get();
    running = false;

    watcher.join();
    return 0;
}
