---
layout: page
title: Overview
permalink: /dataconveyer/overview/
---

# Data&nbsp;Conveyer Overview

Data&nbsp;Conveyer is a toolkit and a lightweight transformation engine to facilitate real-time data migrations. It harnesses the power of modern, multi-core processors by making extensive use of parallel processing and concurrency. The toolkit enables rapid implementation of a variety of transformations and integration patterns.

Data&nbsp;Conveyer’s architecture conforms to the Extract-Transformation-Load (ETL) paradigm.

![ETL paradigm]({{ "/img/data-conveyer/etl.jpg" | relative_url }})

 Data&nbsp;Conveyer takes advantage of modern, functional features introduced in recent years into the Microsoft .NET framework, most notably the [TPL&nbsp;Dataflow](https://docs.microsoft.com/en-us/dotnet/standard/parallel-programming/dataflow-task-parallel-library){:target='_blank'}. It harnesses the power of modern, multi-core processors by making extensive use of parallel processing and concurrency. Data&nbsp;Conveyer features a unique, developer‑friendly API, which facilitates rapid creation of sophisticated data migration solutions using a familiar object‑oriented paradigm.

Data&nbsp;Conveyer governs all aspects of data migrations. In addition to the usual mechanisms for input, transformation and output, it handles low-level details, such as data buffering, parallelization, process cancellation, error propagation, and more. Wherever custom logic is needed to address non‑standard parsing, data mapping, routing, formatting, etc., Data&nbsp;Conveyer carefully incorporates supplied code into a complete, fully integrated solution. Such approach enables virtually defect‑free data migration solutions completed in a fraction of the time needed in case of applying traditional techniques. Data&nbsp;Conveyer applies equally to batch processing as well as real‑time solutions.

### Main Characteristics of Data&nbsp;Conveyer

* A self-contained executable (DLL library) that does not require any dedicated infrastructure for deployment. It can be deployed on any environment running .NET Framework 4.5 or .NET Standard 2.0. This includes Windows, Linux, Mac OS and other systems.
* Non-blocking, asynchronous execution mode. Operation in progress is cancellable.
* Inherently parallelizable, scalable and production ready.
* Highly configurable, comprehensive, yet intuitive API that accelerates prototyping, development and implementation of various data migration scenarios.
* Native support for a diverse set of data formats, including delimited values, fixed width fields, key-value pairs (keywords), XML, JSON, and X12 (EDI).
* Expandable architecture to support additional data formats and transformation patterns, either natively or using plug-in modules.
