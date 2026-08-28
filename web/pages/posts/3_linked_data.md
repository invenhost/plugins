---
title: Linked Data in InvenTree
date: 2024-09-11
description: Steps taken to enable linked data in InvenTree
author: Matthias Mair
tag: upstream
---

# Linked Data in InvenTree

<strong>This is a vision and not yet implemented. I am working hard on it though.</strong>


Version 0.17.0 of InvenTree introduces support for rich Linked Data (LD). This is in preparation for beeing able to utilize linked data formats and APIs for import and export of data in static and dynamic form.
Example usage for this is the oportunity to map OKH files directly to InvenTree parts or a federation plugin that enables partial data exchange between compatible instances in a ressource-efficient fashion.

## Schema changes

For this a few new data concepts are introduced:
- Selection Lists and Selection List Entries that enhance the parameter system
- Reference Sources and Reference Instances that enable linking to external data sources from any object

Parameters are enhanced:
- to use Selection Lists
- be storage targets for Reference Instances
- have unique stable uuid4 identifiers helpful for import/export / linking
- to be lockable by plugins

### Selection Lists (and Entries)

Selecion Lists can be used as sources for choices of parameters. They are definded with a bit of metatdata, an optional plugin source and can be locked so that they are fully managed by the defining plugin.
Lists can have a (nearly) unlimited number of entries that are used as choices for parameters. Entries can be deactivated to keep them from being used in new objects.

### Reference Sources (and Instances)

Reference Sources are used to define links to external definitions/sources/systems. They can be defined manually or by a plugin. They can be locked to enforce that they are managed by the defining plugin. A source can be used to display links in the frontend or for maintaining links for (plugin) internal use.

## Goals
### Mid term goals

Enable plugins that automatically link to Github, Gitlab or other issue trackers and display some information about the linked issue in the frontend.
Provide common choices for standards like DIN, ISO, ANSI, etc. , colorsystem like RAL, locations, USB vendor IDs and much more in selection lists.

### Long term goals

Link (and snyc) files from VCS systems, link to external manufacturing or supply chain systems.
Enable a federation plugin that allows to link objects between compatible instances.
