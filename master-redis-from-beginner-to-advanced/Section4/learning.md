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
