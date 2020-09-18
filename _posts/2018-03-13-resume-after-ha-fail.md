---
layout: post
title:  "Resuming After a High Availability Group Synchronization Failure"
date:   2018-03-13 09:51:01 -0500
categories: sql
---

Due to some server issues, some of the databases on a secondary replica of my High Availability group were in an unhealthy state. The group was giving me a warning: "Data synchronization state of the availability database is not healthy." 

Obviously you will want to address the underlying cause of the break in synchronization first, but after that, my databases were still showing this warning! 

Issuing this command on the replica with the errors caused it to bring the databases back into synchronization:

```
ALTER DATABASE [my-database-name] SET HADR RESUME
```

Fixed!
