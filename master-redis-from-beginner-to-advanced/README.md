# Master Redis from Beginner to Advanced (Udemy)

Course: `https://www.udemy.com/course/masterredis/`

## Scope
- Redis fundamentals: strings, lists, sets, hashes, sorted sets, TTL/expiration
- Transactions, Lua scripting, pub/sub, persistence (RDB/AOF), replication, clustering
- Hands-on practice with `redis-cli` and small, isolated examples

## Setup

### Option A — Docker (recommended)
```bash
docker run -d \
  --name redis-local \
  -p 6379:6379 \
  -v redis-data:/data \
  redis:7-alpine

# Ping the server
docker exec -it redis-local redis-cli ping
```

### Option B — Native (Ubuntu/Debian)
```bash
sudo apt update && sudo apt install -y redis-server
sudo systemctl enable --now redis-server
redis-cli ping
```

## Progress
- Getting Started — InProgress (23 Aug 2025)

## Quick commands
```bash
# Basic sanity check
redis-cli set hello world
redis-cli get hello
```


