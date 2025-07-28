---
title: Introducing InvenHost tools
date: 2024-10-01
description: InvenHost tools provides information regarding InvenTree releases and experimental security checks.
author: Matthias Mair
tags: [tools, invenhost-tools]
---

> [!NOTE]
>
> This post is backdated because I forgot to publish it when I wrote the tool initially.

Introducing InvenHost tools, a website that provides information regarding InvenTree releases, including the latest version, important links like release notes, changelog, source zip, and git meat information.

![Overview screenshot](/images/4_invenhosttools_overview.png)

This is a completely independent project, not affiliated with InvenTree, as always. But I hope it will be useful for the community.

The intended use case is to provide a simple way to get an age for a specific InvenTree instance, to see if it is up-to-date, and to provide a link to the latest release notes.

![Sample release detail screenshot](/images/4_invenhosttools_release_info.png)

For each release there is a detail page that is mimicking a nutrition label, showing the version, release date, git details and supported features. The page also provides a link to the source code zip file, and a link to the changelog.

## Security checks

The website also provides a security check for instances that checks if the website is passing a few basic security assumptions. This includes:
- The instance is not running in debug mode
- Required settings are configured
- The instance is not running with a development server
- There is some for of auth enabled
- HTTPS is enabled
- The version is not too old

![Sample security check screenshot](/images/4_invenhosttools_security.png)

The results of the security check are displayed on the website, and can be used to quickly assess the security posture of an InvenTree instance, the results are housed under a random URL, ensuring that the results are not publicly accessible without the link. For example
```
https://tools.invenhost.com/check/956765c0859cb6e9fa03dcc11856c95c3c9c8fc27a4449cb02d0f6368f6a5d6d/
```

Check it out at [InvenHost tools](https://tools.invenhost.com/check/).

## Technical details

The website is built in Typescript using hono, prisma, tailwindcss, and deploys to Cloudflare workers using D1 for a database.

This tool stack is completely new to me, I wanted to test it out after hearing about these lambda like deployment methods.

It was easy enough to implement - hono is a very nice framework. D1 was also easy to use, as I have been using SQLite since I was around 8 years old.  
I first built the SQL manually but missed the ORM tooling I am used by Django, so I also added prisma to the stack. That part has not really clicked with me yet, but I am sure it will be useful in the future.
