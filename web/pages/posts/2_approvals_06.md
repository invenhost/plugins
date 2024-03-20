---
title: Approvals 0.6 released
date: 2024-03-20
description: Approvals now allows to request specific users to approve and other improvements
author: Matthias Mair
tag: plugin
---

I am happy to announce the release of Approvals 0.6. This release brings a new feature that allows to request specific users to approve/reject a pull request.

This is useful if you want to make sure that a specific person reviews your changes fast (notifications are send once the request is processed).

Another new feature is the ability to configure access/change permissions for all groups from the plugin settings. This was a reguarly requested feature and I am happy to finally have it in place sooner than originally planned.

I also worked on finsihing the docs for 1.0. [Available here](https://doc.invenhost.com/inventree_approval/main/home/)

The release is available on [git.invenhost.com](https://git.invenhost.com/invenhost-c1/-/packages/pypi/inventree-approval/0.6) or should be automatically updated if you have startup plugins checks enabled.

![The current flow of approvals](/images/plgapr_06_intro.gif)
