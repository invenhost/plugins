---
title: InvenTree Common Data
date: 2024-07-13
description: Through the Common Data Plugin you automatically get common selection data provided for your parameter templates
author: Matthias Mair
tags: [plugin,inventree-common-data]
---

After nearly a year in private use and a cut down public beta on PyPI, the InvenTree Common Data plugin is now fully published and available for everyone to use.

Through the Common Data Plugin you automatically get common selection data provided for your parameter templates. For the start, this is:
- the classical RAL dataset, sourced from Wikipedia
- the UN LOCODE country list, sourced from the UN

Usage is very simple: after install and enabling the plugin, enabling auto-sync and reloading plugins you do not have to do anything. The plugin will automatically publish the provided lists as selection lists. If you update the plugin, it will automatically update any changes to lists. There is no internet connection required so private PyPI caches (if you have a company-mandated proxy for example) can be used.

Links:
- [InvenHost Talk topic](https://talk.invenhost.com/t/plugin-discussion-inventree-common-data/43)
- [PyPI page](https://pypi.org/project/inventree-common-data/)
