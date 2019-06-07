---
layout: page
title: Features
permalink: /dataconveyer/features/
---

# Data&nbsp;Conveyer Features

### General

* Built-in support for various data formats including
  * Delimited values (e.g. CSV)
  * Fixed width fields (flat file),
  * Key-value pairs (keywords)
  * XML
  * JSON
  * EDI/X12 (e.g. HIPAA transactions).
* Support for strongly typed data elements.
* Data buffering throughout the process to minimize memory usage.
* Cancelable while in-progress.
* Progress reporting.

### Intake

* Connectivity to any data source, real-time or offline, in either synchronous or asynchronous mode.
* Support for multiple sources.
* Variety of settings to fine tune data parsing process.
* Ability to combine related records into so-called clusters.

### Transformation

* Parallel processing (multiple engines).
* Support for various transformation modes, including per record and per cluster.
* Flexible API allowing different ways to access and manipulate data to suit circumstances and individual preferences.

### Output

* Connectivity to any target, real-time or offline, in either synchronous or asynchronous mode.
* Support for multiple targets including custom routing rules.
* Variety of settings to fine tune data formatting process.

### Planned for Fulture Releases

* Build-in support for additional data formats, such as HL7 data.
* Pipelined (cascaded) transformations.
* Additional transformer types.
  * Aggregator
  * Sorter
