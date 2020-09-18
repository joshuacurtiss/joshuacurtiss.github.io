---
layout: post
title:  "Linking SQL Servers"
date:   2017-06-30 10:00:01 -0600
categories: dev sql
---

Linking SQL servers helps you to write queries that join tables from other databases even if the database is on another server. Very handy.  For instance, if you're writing a query from `serverA` and you want to join a table from `myOtherDB` on `serverB`:

```sql
SELECT *
FROM   myTable a join [serverB].myOtherDB.dbo.myOtherTable b on a.id=b.id
WHERE  etc etc etc
```

This makes sense, but it doesn't happen automatically. You have to let your server know that its ok to link to the other server. 

To accomplish this, use [sp_addlinkedserver](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-addlinkedserver-transact-sql):

```sql
sp_addlinkedserver @server='serverB'
```

You may then have to define what credentials to use with [sp_addlinkedsrvlogin](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-addlinkedsrvlogin-transact-sql). You can either tell it to pass your existing credentials or you can define an entirely alternate set of credentials for the other server. Very handy if that scenario exists.

```sql
-- Pass existing credentials:
sp_addlinkedsrvlogin @rmtsrvname='serverB', @useself='TRUE'
-- Or explicitly define new credentials:
sp_addlinkedsrvlogin @rmtsrvname='serverB', @useself='FALSE', @rmtuser='myusername', @rmtpassword='mypassword'
```
