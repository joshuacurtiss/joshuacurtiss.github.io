---
layout: post
title:  "Deleting Time Machine Backups Manually"
date:   2017-10-26 15:21:01 -0600
categories: mac
---

I was working on setting up a new Mac and wanted to use the same Time Machine drive that already had another Mac backing up to it. But I didn't have enough room for a full backup of the new Mac, so I figured I would delete some of the older backups (it went back 3 years!) since I really didn't need such old backups.

The key is in the `tmutil` command.

Your backups are saved on the drive with a date/time stamp directory. So if your Time Machine drive was named "Time Machine", a backup for May 12, 2014 at 8:42:07am may look like:

```
/Volumes/Time Machine/Backups.backupdb/yourmacname/2014-05-12-084207
```

Since it is 2017 and I have backups as old as 2014, I wanted to delete all the 2014 backups in one fell swoop:

```
sudo tmutil delete /Volumes/Time Machine/Backups.backupdb/yourmacname/2014-*
```

It will delete each backup for the year 2014 and report on the savings as it goes. Sweet!

Don't hold your breath though, each backup deletion takes a long time. You may want to save the operation to run overnight or when you have hours to spare.

*Edit in 2019 regarding permissions:* Starting with Mojave, you may get errors or restricted permission. To fix, you need to go into the "Security & Privacy" pane in System Preferences and add your terminal application into the "Full Disk Access" category under the "Privacy" tab.  Your terminal session will then have the necessary permission.
