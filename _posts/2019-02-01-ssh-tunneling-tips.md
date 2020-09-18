---
layout: post
title:  "SSH Tunneling Tips"
date:   2019-02-01 16:15:01 -0500
categories: linux
---

With SSH, you can perform all sorts of magic to make your computers talk with each other. Here's some tips to keep it straight. 

## Quick SOCKS proxy 

```
ssh -N -D 1234 user@domain.com
```

This will make a ```-N``` non-interactive session that will ```-D``` dynamically handle port forwarding if you set it up. 

A common way to handle this is to go into your browser's proxy settings and turn it on with: 

SOCKS Host: localhost  
Port: 1234 *(whatever you set it to)*

If you can, enable "Proxy DNS when using SOCKS". 

You can now browse through your remote server's connection, having access to all of its local network devices!

## Port Forwarding

You can tell the connection to forward a port's traffic to or from the remote server to somewhere else.

For instance:

```
ssh -L 5901:localhost:5900 user@domain.com
```

This will forward your `-L` local port 5901 to `localhost:5900` on the remote server. 

```
ssh -L 5901:myotherserver.local:5900 user@domain.com
```

This will forward you `-L` local port 5901 to `myotherserver.local:5900` accessible from the remote server. So the remote server is thus acting as a go-between for you and some other device on the remote network.

You can actually do the reverse of `-L` local port forwarding with `-R` remote port forwarding.

```
ssh -R 1234:localhost:1234 user@domain.com
```

This will send traffic from on your port 1234 to the server's `localhost:1234`.
