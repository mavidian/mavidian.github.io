---
layout: page
title: Design Goals
permalink: /dataconveyer/design-goals/
---

# Goals behind Data&nbsp;Conveyer Design

{% comment %}
  Each design goal is rendered by toggleable-block.html, which takes 3 parameters:
  block-id - must be unique (to disambiguate data-target values of side by side toggleable buttons)
  block-title - block header (toggles contents upon click)
  block-body - block contents
  Template:
<!-- __title__ -->
{% capture captured-details %}
__body__
{% endcapture %}
{% include toggleable-block.html block-id="__id__" block-title="__title__" block-body=captured-details %}
{% endcomment %}

<!-- Universal Functionality -->
{% capture captured-details %}
The idea behind Data&nbsp;Conveyer stemmed from involvement in numerous data-centric projects and realization that they generally follow the same pattern differing only in some “variable elements”. These elements, once identified, became configurable settings to be integrated during orchestration of a uniform data migration process. To support such flexibility, Data&nbsp;Conveyer features a powerful API (Application Programming Interface) that consists of over a 100 of configuration settings and dozens of user-definable functions.
{% endcapture %}
{% include toggleable-block.html block-id="01" block-title="Universal Functionality" block-body=captured-details %}

<!-- Ease of Use -->
{% capture captured-details %}
To ease complexities of its API, Data&nbsp;Conveyer employs a comprehensive logic to assume default values and actions whenever configuration settings, functions or parameters are not supplied. In fact, the entire Data&nbsp;Conveyer process can be orchestrated and executed in a single-line statement. While more code is required in non-trivial cases, the settings and types exposed by Data&nbsp;Conveyer are designed to be intuitive and naturally fall into place.
{% endcapture %}
{% include toggleable-block.html block-id="02" block-title="Ease of Use" block-body=captured-details %}

<!-- Power -->
{% capture captured-details %}
Since introduction of functional programming features into .NET (such as LINQ, Task Parallel Library, Dataflow, and many others), it became possible to succinctly write powerful code implementing functionality that was previously only attainable via complex, multi-tier software. This power comes at a price of a relatively steep learning curve. Data&nbsp;Conveyer aims at leveraging all power of modern .NET features while interacting with its clients using a familiar object-oriented paradigm.
{% endcapture %}
{% include toggleable-block.html block-id="03" block-title="Power" block-body=captured-details %}

<!-- Efficiency -->
{% capture captured-details %}
Related to the previous item is the overall efficiency of Data&nbsp;Conveyer based solutions. In contrast to traditional approaches, there is no need for dedicated infrastructure, such as database or application servers. Instead, solutions run in memory relying heavily on parallelism, concurrency and asynchronous processing. To minimize memory footprint, data is subjected to rigorous buffering as it passes through Data&nbsp;Conveyer.
{% endcapture %}
{% include toggleable-block.html block-id="04" block-title="Efficiency" block-body=captured-details %}

<!-- Expandability -->
{% capture captured-details %}
In its early stages, Data&nbsp;Conveyer has undergone major refactoring episodes, which in fact included a complete rewrite at one point. The main motivation behind these efforts was desire to facilitate future product expansions. The current architecture of Data&nbsp;Conveyer makes it straightforward to introduce support for new data formats, new types of transformation as well as other features, for example logging.
{% endcapture %}
{% include toggleable-block.html block-id="05" block-title="Expandability" block-body=captured-details %}

<!-- Ease of Deployment -->
{% capture captured-details %}
Data&nbsp;Conveyer is a standalone executable. As such, it gets deployed by a simple file copy, regardless if for development or production purposes. There are no dependencies to load (aside from .NET), no Registry updates, no installers or uninstallers to run. Data&nbsp;Conveyer can also be deployed as an industry standard NuGet package.
{% endcapture %}
{% include toggleable-block.html block-id="06" block-title="Ease of Deployment" block-body=captured-details %}

<!-- Platform Independence -->
{% capture captured-details %}
Data&nbsp;Conveyer can be deployed on any platform that supports .NET Standard 2.0. This means that it is not Windows specific, but can apply to Linux, Mac OS and other systems as well. What's more, with a new [Blazor](https://dotnet.microsoft.com/apps/aspnet/web-apps/client){:target="_blank"} technology, a Data&nbsp;Conveyer based solution can be compiled into a [WebAssembly](https://webassembly.org/){:target="_blank"} and as such reside inside a web browser. Please refer to [Sample Applications]({{ site.baseurl }}/dataconveyer/sample-applications/) for an example of such solution.
{% endcapture %}
{% include toggleable-block.html block-id="07" block-title="Platform Independence" block-body=captured-details %}

<!-- Quality Assurance -->
{% capture captured-details %}
From the outset, Data&nbsp;Conveyer has been subjected to stringent quality assurance measures. The product's architecture very nicely fits the Test-Driven Development (TDD) paradigm, where sample input data is supplied to the test and the output data is asserted on. Every build of Data&nbsp;Conveyer involves a series of over 400 test cases containing a total of more than 6,000 assertions.
{% endcapture %}
{% include toggleable-block.html block-id="08" block-title="Quality Assurance" block-body=captured-details %}
