---
layout: post
title:  "Semantic Versioning"
date:   2017-01-31 11:15:01 -0600
categories: dev
---

Everyone should have a standard they follow when determining the strategy behind
the versioning of their apps. Otherwise, what's the point of versioning at all?
Keep a link to the standard easily accessible so you can remind yourself of the
"rules" every time you release an update.

I enjoy the standard described at [semver.org](http://semver.org). Simple to follow
and adopted heavilly in the industry. In short: 

Given a version number MAJOR.MINOR.PATCH, increment the:

1. MAJOR version when you make *incompatible* API changes,
2. MINOR version when you *add* functionality in a *backwards-compatible manner*, and
3. PATCH version when you make backwards-compatible *bug fixes*.
