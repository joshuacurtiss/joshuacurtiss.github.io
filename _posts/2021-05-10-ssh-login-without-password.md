---
layout: post
title:  "SSH Login Without Password Using ssh-keygen"
date:   2021-05-10 9:15:01 -0500
categories: linux
---

Using `ssh-keygen` and `ssh-copy-id`, you can login to a remote server without entering a password. It effectively creates a trusted relationship between your local user and the remote server. 

First, create the keys on your local machine:

```
ssh-keygen
```

Just press "Enter" through the options to use default values and empty password.

This should generate a file at `~/.ssh/id_rsa.pub`. 

Second, copy the public key to your remote host using `ssh-copy-id`:

```
ssh-copy-id -i ~/.ssh/id_rsa.pub myremoteserver
```

That's it! Now you can login without a password.

If `ssh-copy-id` did not work or is not available, you can copy the public key manually: 

```
ssh myremoteserver mkdir -p .ssh
cat ~/.ssh/id_rsa.pub | ssh myremoteserver 'cat >> .ssh/authorized_keys'
```
