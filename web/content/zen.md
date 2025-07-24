---
title: Vision for InvenTree - My personal Zen
date: 2023-06-04
description: The possibilities I see in an InvenTree OSS ecosystem in the long term. My personal Zen for work on InvenTree proper.
author: Matthias Mair
tag: project, zen
---
Tirol, Jan 2023
The possibilities I see in an InvenTree OSS ecosystem in the long term. My personal Zen for work on InvenTree proper.

## Current State

InvenTree is, as it stands, mainly oriented towards stock and order management. While the part is presented as the first option, in the day-to-day stock and orders are the objects that really define the app's value. Spreadsheets can hold the Bill of Materials (BOM) for a small portfolio of products fine - issues arise with managing the required stock.

## The Vision

Extending the use cases for InvenTree could lead to an over-complex interface and drive away existing users while scaring off new ones. Therefore the plugin system enables a slim core product that can be extended to fit the user's needs.  
The main product serves an API that covers authentication, authorisation, user and file management, webhooks, scheduled and event-driven tasks, data warehousing and reporting. Plugins enable customisation of every part (within reason).  
Sane defaults are provided through built-in plugins, that demonstrate intended API usage. Commonly used functions are exposed under logical and stable names that are tested and documented.

## Conclusions for the project code base

Similar data models should be merged and code duplication reduced. For example, there is no need for multiple API trees for orders. One core object should hold most logic for the category while differing methods can inherit from the main object. A simple Enum can select between the modifications.  
A lean core enables a more agile product that can serve any user story from hobbyists, small business owners, and university labs to makerspaces and complex, regulated business operations with multiple locations.

---

At this point, I want to focus on the ecosystem around the main project. A sustainable system will require more than a few developers - especially due to the hobbyist nature of all involved.


## My Zen for InvenTree
1. Code duplication is to be reduced whereever possible
2. The server is API first and should aim to become API only
3. No way to consume the API is preferred. Endpoints are not tailored for one specific client but follow common (REST) best-practices
4. Authentication is kept simple - complex use cases can be handled by purpose-designed plugins
5. Authorisation is always done by the core server and fully tested
6. Models are fully documented
7. Every version of InvenTree can be updated to the current stable release
8. Updates can be rolled back without destroying data that was previously there
9. Errors are logged and surfaced to superusers
10. Architecture decisions are discussed and documented in open forums and supported by data where possible
