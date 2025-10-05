### Directory Watcher (Linux Audit)

Watches a directory and prints file events (e.g., modified, moved) along with the PID and executable that caused them. This tool uses the Linux Audit subsystem via `libauparse`.

---

### Prerequisites

- **Linux** with the audit subsystem enabled (most modern distros)
- **auditd** and tools: `auditctl`, `ausearch`
- **C++17 compiler** and build tools
- **libauparse/libaudit development headers**

Debian/Ubuntu:

```bash
sudo apt update
sudo apt install -y build-essential auditd libauparse-dev libaudit-dev
sudo systemctl enable --now auditd
```

Fedora/RHEL/CentOS (Stream):

```bash
sudo dnf install -y gcc-c++ audit audit-libs-devel
sudo systemctl enable --now auditd
```

Arch Linux:

```bash
sudo pacman -S --needed base-devel audit
sudo systemctl enable --now auditd
```

---

### Add an Audit Watch Rule

Tell auditd which directory to monitor. Replace `/path/to/watch` with your target directory.

```bash
WATCH_DIR=/path/to/watch
sudo auditctl -a always,exit -F dir="$WATCH_DIR" -F perm=wa -k file_monitor_key
```

- **perm=wa**: watch writes and attribute changes. Use `perm=warx` to include reads/execs.
- You can verify recent events with:

```bash
sudo ausearch -k file_monitor_key -ts recent
```

To remove the rule later:

```bash
sudo auditctl -d always,exit -F dir="$WATCH_DIR" -F perm=wa -k file_monitor_key
```

To persist across reboots, create a rule file, e.g. `/etc/audit/rules.d/dir_watch.rules`:

```bash
echo "-a always,exit -F dir=/path/to/watch -F perm=wa -k file_monitor_key" | sudo tee /etc/audit/rules.d/dir_watch.rules
sudo augenrules --load
```

---

### Build

From the project root (this directory):

```bash
g++ -std=c++17 directory_watcher.cpp -o directory_watcher -lauparse -lpthread
```

This produces the binary `./directory_watcher`.

---

### Run

Reading audit events generally requires root or `CAP_AUDIT_READ`.

Option A (simplest):

```bash
sudo ./directory_watcher /path/to/watch
```

Option B (non-root):

```bash
sudo setcap cap_audit_read+ep ./directory_watcher
./directory_watcher /path/to/watch
```

Expected output example:

```text
Watching directory: /home/you/del. Press Enter to stop.
[ATTRIBUTE_CHANGED] sample.py | PID: 39097 | Executable: "/usr/bin/touch"
[MODIFIED] file.txt | PID: 34465 | Executable: "/usr/bin/vim"
[MOVED_FROM] a.py | PID: 39858 | Executable: "/usr/bin/mv"
[MOVED_TO] b.py | PID: 39858 | Executable: "/usr/bin/mv"
```

Press Enter to stop the watcher.

---

### Troubleshooting

- **No events appear**: Ensure the audit rule is loaded (`auditctl -l`) and the directory path matches exactly. Make a change inside the directory (e.g., `touch file`).
- **Permission denied**: Run with `sudo` or set the `cap_audit_read` capability as shown above.
- **auditd not running**: `sudo systemctl status auditd` and start/enable it.


