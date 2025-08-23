## My Learnings

Quick notes on building Redis from source and running a local instance.

### 1) Build Redis
- Download the Redis source and follow the official build instructions.
- If you made code changes, run a parallel build:

```bash
make -j"$(nproc)" all
```

### 2) Start the server

```bash
./src/redis-server --port 6380
```

### 3) Connect with the CLI

```bash
redis-cli -p 6380
```

Notes:
- Replace 6380 with any open port you prefer.
- Run these commands from the Redis source directory.

### 4) Try basic CLI commands

- `PING`: returns `PONG`.
- `PING "your message"`: echoes back the message.
- `SHUTDOWN`: stops the server.

Tip: The Redis CLI provides auto-suggestions for commands as you type.

### 5) Inspect server information with INFO

- Use `INFO` in `redis-cli` for comprehensive server details.
- Limit output with a section: `INFO <section>` (e.g., `server`, `memory`, `clients`). Without a section, it returns all sections.

```bash
INFO
INFO server
INFO memory
```