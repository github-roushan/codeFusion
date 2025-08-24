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


### 6) KeySpaces
Key spaces in Redis is similar to database namespace schemas
This allows us to have the same key name across multiple key spaces