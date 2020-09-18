---
layout: post
title:  "How to Clear Stubborn Transaction Logs in Microsoft SQL Server"
date:   2017-02-17 12:20:01 -0600
categories: dev sql
---

Clearing transaction logs in SQL databases can be a pain when the database sometimes gets
huge and it can't ever clear the logs even after backup. How to clear those stubborn 
transaction logs? 

In older versions of SQL server (such as MSSQL 2008 or older), I recommended the method
of backing up the database with `TRUNCATE_ONLY` and then running `SHRINKFILE()`, so
something like this:

```
USE DatabaseName
DBCC SHRINKFILE( TransactionLogName, 200 )
BACKUP LOG DatabaseName WITH TRUNCATE_ONLY
DBCC SHRINKFILE( TransactionLogName, 200 )
```

The `TRUNCATE_ONLY` has became a deprecated solution, however, and actually doesn't work 
in 2012 and beyond. However, if you still run a `BACKUP LOG` command, it will typically 
work well. Here's an example script that helps automate the saving of the file with a
date/time stamp so  you can save the `.trn` files.

```
DECLARE @trnpath NVARCHAR(255) = 
    N'c:\path\to\backup\file_' + 
    CONVERT(CHAR(8), GETDATE(), 112) + '_' + 
    REPLACE(CONVERT(CHAR(8), GETDATE(), 108),':','') + '.trn';
BACKUP LOG DatabaseName TO DISK=@trnpath WITH INIT, COMPRESSION;
USE DatabaseName
DBCC SHRINKFILE( TransactionLogName, 200 );
```

Run this 2 or 3 times and normally the log will finally shrink.

Why the need to run it multiple times? Because there are segments of the file that are
in use or marked as not ready to be removed. You can observe this activity with the 
`LOGINFO()` command:

```
DBCC LOGINFO('DatabaseName')
```

Any records with a `status` of `2` are portions of the log that are active or otherwise
incapable of being truncated as of yet. I've heard of databases sometimes being really
stubborn and not letting go of these, but often I've seen this method will work on 
MSSQL 2012 and beyond.