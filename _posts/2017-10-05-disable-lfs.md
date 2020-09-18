---
layout: post
title:  "Disabling LFS for Git Checkouts"
date:   2017-10-05 17:21:01 -0600
categories: scm
---

I was working with a server that was checking out Git repositories, and it was taking errors on the LFS downloads. 
In this instance, it was a [Jenkins](https://jenkins.io) server and it was just having problems with LFS.

Ahead of fixing the actual issue with the LFS hosting, the answer is to disable the LFS download since my process 
doesn't actually need the LFS documents (your mileage may vary). 

One option is to set an `.lfsconfig` config file in the impacted repositories and set the `lfs.fetchexclude` setting
so that the LFS documents are not automatically downloaded. 

I'm looking for a more broad solution that will automatically apply to all repositories and will not impact normal 
checkouts, thus avoiding having to educate everyone on how to download the LFS documents when they checkout a repository.

The answer is well articulated on this [Git LFS tips and tricks](https://shuhrat.github.io/programming/git-lfs-tips-and-tricks.html)
page. In short, you can add a setting to the global Git config so that Git will never download the LFS documents, but just
on the computer with that config. I could then apply this setting to all the nodes in my Jenkins cluster. 

Issue this command: 

```
git config --global filter.lfs.process "git-lfs filter-process --skip"
```

Make sure Git saved the global setting where you really want it. You should see settings similar to this in the `gitconfig` file:

```
[filter "lfs"]
  clean = git-lfs clean -- %f
  smudge = git-lfs smudge -- %f
  required = true
  process = git-lfs filter-process --skip
```

What do I mean by "make sure Git saved the setting where you really want it"? Well, it may save the setting in your user's 
home directory in `.gitconfig`, or alternatively in Git's "Program Files" directory on Windows, for instance, something like
`C:\Program Files\Git\mingw32\etc\gitconfig`. For Windows, this latter setting will apply for all users. 

So how do you know? Run this command: 

```
git config --list --show-origin
```

It will output your Git settings and show which config provided which setting. Alter the files as necessary to make sure the
setting is truly global for the computer (all users), given that you are looking for that result.
