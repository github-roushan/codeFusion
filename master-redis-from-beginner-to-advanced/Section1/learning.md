
Redis Data Structures:
Following are the datastructures
1. String
2. Lists
3. Sets
4. HashSets
5. SortedSets
6. HyperLogLog

Redis More Advanced Features
1. Publish/Subscribe Model
2. Piping (Mass Insertion of data)
3. Database Designs (How to design data models in redis)
4. Redis Protocol (How Exactly redis works)
5. Redis Database Administration (How to connect redis clients to redis database)
6. Replication/clustering (High Availability Network Setup)
7. You can set data expiration

## Next we will be learning about
1. scripting with lua to do complex computation on the redis database
2. Modules that come with redis
    Redis Search (Allows one to look full text search or apply sql style queries on the redis database)
    Redis Insight (Look at redis datastructures visually through a database)
    Redis Json Module (Provide advanced functionalities of Json Document Databases)
    RedisGraph (A graph database with a cypher based querying language using sparse adjacency matrices)

Intro to Redis
    Redis is an Open Source In Memory Data Structure Store
    Used as a database, cache and message broker
    Redis Holds its entire database in memory
    Disk is used for persistent data storage
    It is a NoSQL database and follow a key-value store concepts

    It supports robust data strcutures like
        Strings, hashes, Lists, sets, Sorted Sets, bitmap, hyperloglogs etc
    
    Redis can be connected to varius clients 
        like python, c++, rust etc using redis client libraries
