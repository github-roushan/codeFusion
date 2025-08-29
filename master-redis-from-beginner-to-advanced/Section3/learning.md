## My Learnings

Introduction to Redis core concepts, basic operations, and key expiration mechanisms.

### 1) Core concepts
- Redis is an in-memory key-value data store in the key-value database family.
- Store data as key-value pairs.
- Values can be strings, lists, sets, hashes, and more.
- Retrieve values by their keys.

### 2) Basic commands (redis-cli)

#### Set and get values
```bash
SET mykey "hello"
GET mykey
```

#### Check key existence
```bash
EXISTS mykey otherkey  # Returns count of existing keys
```

#### Delete keys
```bash
DEL mykey
DEL key1 key2 key3
```

#### Remove expiration on key
```bash
PERSIST myKey  # Returns 1 if expiration was removed, 0 if key doesn't exist or had no TTL
```

### 3) Expiration and TTL

#### Set expiration when writing
- `SET key value EX <seconds>` or `SET key value PX <milliseconds>`

#### Inspect remaining time
- `TTL key` (seconds) and `PTTL key` (milliseconds)
  - `-1`: key exists, no expiration
  - `-2`: key does not exist

#### Update expiration on existing key
- `EXPIRE key <seconds>` or `PEXPIRE key <milliseconds>`
- Works even if the key previously had no TTL

```bash
# Set a value with an expiration
SET session "abc123" EX 120      # 120 seconds
SET token "xyz" PX 30000         # 30,000 ms

# Update TTL on existing keys
EXPIRE session 60                # seconds
PEXPIRE token 15000              # milliseconds

# Inspect TTL
TTL session
PTTL token
```

### 4) Best practices

Notes:
- Commands are case-insensitive (`set`, `get`, `del`, `exists` also work)
- Use descriptive keys (e.g., `user:42:name`) to keep data organized
- `EXISTS` returns the number of provided keys that currently exist

### 5) How Redis handles key expiration

Keys can be created in two ways:
- Normal keys are created without any expiration (they live forever) and can be saved to local hardware
- Keys that are going to expire have expiration info stored in Unix timestamp

Keys are expired in 2 ways:

#### Passive expiration
- A key is passively expired simply when some client tries to access it, and the key is found to be timed out

#### Active expiration
Redis does the following 10 times per second:
1. Test 20 random keys from the set of keys with an associated expire.
2. Delete all the keys found expired.
3. If more than 25% of the keys were expired, start again from step 1.


### 6) Keyspaces
Keyspaces in Redis are similar to database namespaces. They allow the same key name to exist in different logical databases.

- Indexing starts at 0 (the default database is 0).
- Switch databases with `SELECT <index>`.
- List keys in the current keyspace using a pattern with `KEYS <pattern>`.
- Remove all keys from the current keyspace with `FLUSHDB`.
- Keys are isolated per keyspace; you cannot link keys across keyspaces.

```bash
# Switch to keyspace 1
SELECT 1

# List all keys in the current keyspace
KEYS *

# Delete all keys in the current keyspace
FLUSHDB
```

### 7) Key naming conventions
- Keep key names simple and descriptive.
- Avoid overly short keys unless necessary.
- Use a schema that reflects your data model, e.g., `object:id[:field]`.

Examples:

```text
user:100
user:100:group
user:100:friend
```

```bash
SET user:100 "Roushan"
```

Notes:
- Maximum allowed string value size is 512 MB.
- Redis keys are binary-safe; any binary sequence is valid.
- An empty string is also a valid key.

### 8) Key pattern matching
- Use `KEYS <pattern>` to search for keys by pattern in the current keyspace.

```bash
# All keys
KEYS *

# All user keys
KEYS user:*
```

Notes:
- Pattern matching uses glob-style syntax (not full regex).
  - `h?llo`: `?` matches exactly one character.
  - `h*llo`: `*` matches zero or more characters.
  - `h[ae]llo`: matches `hallo` or `hello`.
  - `h[^e]llo`: `^` inside brackets negates the set; matches any character except `e`.
  - `h[a-b]llo`: matches any one character in the range `a-b`.
- Redis on an entry-level laptop can scan a 1 million key database in about 40 milliseconds.


### 9) Iterating keys efficiently (SCAN)
- Avoid using `KEYS` in production on large datasets; it is O(N) and blocks the server while scanning.
- Prefer cursor-based iteration with `SCAN`, which is incremental and non-blocking.

```bash
# Basic iteration
SCAN 0

# Match only specific patterns
SCAN 0 MATCH user:* 

# Hint the amount of work per call (not a hard limit)
SCAN 0 MATCH user:* COUNT 100
```

Notes:
- `SCAN` returns a cursor and a batch of keys; keep calling it with the returned cursor until it returns `0`.
- Results may include duplicates; de-duplicate on the client side if needed.
- Use `SSCAN`, `HSCAN`, and `ZSCAN` for sets, hashes, and sorted sets respectively.

### 10) Server shutdown and persistence
You can control whether Redis saves data before shutting down.

```bash
# Force a save (RDB) before shutdown
SHUTDOWN SAVE

# Do not save before shutdown
SHUTDOWN NOSAVE

# Without arguments, Redis will attempt a best-effort save depending on persistence configuration
SHUTDOWN
```

Notes:
- Default behavior without arguments attempts to persist the dataset if persistence is configured; use `NOSAVE` to skip saving explicitly.
- Behavior can depend on settings like `save` (RDB) and `appendonly` (AOF).


### 11) Renaming keys

#### Basic command
```bash
RENAME sourceKey destinationKey
```

- Returns an error if `sourceKey` does not exist.

#### Prevent overwriting
```bash
RENAMENX sourceKey destinationKey
```

- Succeeds only if `destinationKey` does not exist.

Notes:
- `RENAME` overwrites `destinationKey` if it exists.
- Overwriting deletes the previous value stored at `destinationKey`; if that value is very large, it may introduce latency.
- Renaming is atomic and within the same database; it does not copy the value.

- `RENAMENX` returns 1 if the rename succeeds, 0 if `destinationKey` already exists.


### 12) Deleting keys asynchronously

- `DEL` deletes synchronously and can block when deleting large values or many keys.
- `UNLINK` removes keys asynchronously; actual memory reclamation happens in the background.

```bash
# Delete keys asynchronously
UNLINK key1 key2
```

Notes:
- Returns the number of keys unlinked (similar to `DEL`).
- Use for large values or bulk deletions to avoid blocking the event loop.

### 13) Finding a key's data type

```bash
# Inspect the type of a key
TYPE mykey
```

Notes:
- Possible results include: `string`, `list`, `set`, `zset`, `hash`, `stream`, or `none` (if the key does not exist).

