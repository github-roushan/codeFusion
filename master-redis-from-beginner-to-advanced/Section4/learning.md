## My Learnings

Redis Data Types

### 1) Introduction
- Unlike RDBMS, there are no tables in Redis.
- Learn what data types are natively supported by Redis.
- There is no way to manipulate data in Redis with SQL.
- We issue commands directly on the target data.

### 2) Supported Data Types
- String
- List
- Hashes
- Sets
- Sorted Sets and others


### 3) Redis Strings
- Strings are the most basic data type.
- Strings are binary safe, meaning we can store any data type.
- Strings can be used as generic data storage.
- If data does not fit into any other data store, we can add this to the string data type.
- We can Serialize ANY TYPE OF DATA to a string.
- String can behave as random access vector too.
- Large Amount of data can be encoded into small spaces in string.
- Max Size of the string is 512MB


### 4) Redis Use Cases
- redis.io website uses Redis Database itself to serve all the static pages
- Serving Static Content like static website pages
- Frequently used data can be cached into string with the help of expiry and set commands
- Daily user visits, website stats and more
- Can Store app configurations, master catalogs

### 5) Counters in Redis

- `incr key`: increases key by 1 if value is an integer in string
- `decr key`: decreases key by 1
- When using `incr`, `decr`, `incrby`, `decrby`, `incrbyfloat`, if the key doesn't exist, it is added with a default value of zero before the increase or decrease operation.

```bash
incrby key total  # increases key value by total if key's value is an integer in string
```

```bash
decrby key total
```

### 6) Floating Point Increments/Decrements

```bash
set score 10.24
incrbyfloat score 1
incrbyfloat score 12.2
incrbyfloat score -14.56
```


### 7) Append

- This adds a value to the end of the string.
- If the key doesn't exist, it creates an empty string and then adds the value.
- It returns the length of the key.

```bash
strlen key
```


### 8) Multiple Key Operations

- `mset key1 value1 key2 value2 key3 value3`: use mset to set multiple key values at once
- `mget key1 key2 key3`: gets you all the values or nil if the key doesn't exist
- `msetnx key1 value1 key2 value2 key3 value3`: sets values only where keys do not exist (nx - not exist)

```bash
msetnx key1 value1 key2 value2
```
- If any of the keys key1 key2 exist then msetnx fails


### 9) GETSET

- `getset key newValue`: Returns the old value and sets the key to `newValue`.
- If the key didn't already exist, it would return `nil` and set the key to `newValue`.

This can be used in this scenario:
  - Daily tokens for a user is set to 100.
  - Every time a user uses a token, decrease by 1.
  - At the end of the day, reset it back to 100 but also return remaining tokens that can be counted as left.

```bash
set tokens 100
decr token # on every use
getset token 100
```


### 10) GETRANGE

- `getrange key startInd endInd`: Allows slicing and presenting substrings on string type keys.

```bash
getrange key startInd endInd
```

- You can also use negative indexing.
- For example, to get the last 3 characters:
```bash
getrange key -3 -1
```


### 11) SETRANGE

- `setrange key offset value`: Allows you to change a value in a key from an offset.
- It would overwrite any character that comes in its way, and if the string ends, it would continue.

```bash
set name "Hello World"
setrange name 6 "Roushan"  # results in "Hello Roushan"
```

```bash
set name "Hello World"
setrange name 6 "  "     # results in "Hello  oushan"
```

- If the key does not exist, `SETRANGE` creates padding with null bytes up to the offset before setting the value.

```bash
setrange key 6 " Wonderfull"
get key
# result: "\x00\x00\x00\x00\x00\x00 Wonderfull"
```

### 12) SETEX

- `setex key seconds value`: Sets a key-value pair and an expiration time in seconds.

```bash
setex mykey 60 "Hello"
```

### 13) SETNX

- `setnx key value`: Sets the key only if it does not already exist (nx - not exist).

```bash
setnx newkey "World"
```


### 14) How Redis Stores Strings

- Redis automatically decides the encoding based on the string value.
- **int**: Used for strings representing 64-bit signed integers.
- **embstr**: Used for key value pairs whose length is less than or equal to 64 bytes; this is more efficient in memory usage and performance.
- **raw**: Used for key value pairs whose length is greater than 64 bytes.

### 15) Storing JSON

- If you have static JSON, it can be saved using the `SET` command.

```bash
set json '{"key": "value", "key2": "value2"}'
```

### 16) SCAN Command

In a production server, instead of using `KEYS` (which is expensive), we can use `SCAN`.

```bash
SCAN cursor [MATCH pattern] [COUNT count] [TYPE type]
```

This command returns:
- The next cursor.
- Approximately `count` records (not guaranteed).

Example:
```bash
scan 0 match key:* count 5
```
Result:
```
1) "48"
2) 1) "key:43"
   2) "key:6"
   3) "key:42"
   4) "key:28"
   5) "key:35"
```
To continue scanning, use the returned cursor:
```bash
scan 48 match key:* count 5
```
You can stop when the next cursor returned is `0`.

- If `COUNT` is not specified, Redis uses a default count of 10 as a hint.
