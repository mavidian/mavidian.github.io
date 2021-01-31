---
layout: page
title: Sample Applications
permalink: /dataconveyer/sample-applications/
---

# Sample Demo Applications based on Data&nbsp;Conveyer

The applications listed below demonstrate various areas of Data&nbsp;Conveyer's functionality in a relatively simple manner.
These applications have been designed for demonstration purposes and are not intended for use in production environments.

{% comment %}
  Each sample application is rendered by toggleable-block.html, which takes 3 parameters:
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

<!-- DataConveyer_ConvertCsvToFlat -->
{% capture captured-details %}
A sample console application to convert a CSV file to a flat (fixed-width field) file.

&nbsp;&nbsp;&nbsp;&nbsp;[DataConveyer_ConvertCsvToFlat &nbsp;**Source Code**](https://github.com/mavidian/DataConveyer_ConvertCsvToFlat){:target="_blank"}
{% endcapture %}
{% include toggleable-block.html block-id="01" block-title="DataConveyer_ConvertCsvToFlat" block-body=captured-details %}

<!-- DataConveyer_FilterLargeCsvData -->
{% capture captured-details %}
A sample console application to filter a very large CSV file, so that only records of interest are retained.

&nbsp;&nbsp;&nbsp;&nbsp;[DataConveyer_FilterLargeCsvData &nbsp;**Source Code**](https://github.com/mavidian/DataConveyer_FilterLargeCsvData){:target="_blank"}
{% endcapture %}
{% include toggleable-block.html block-id="02" block-title="DataConveyer_FilterLargeCsvData" block-body=captured-details %}

<!-- DataConveyer_LoadSparseData -->
{% capture captured-details %}
A console application to demonstrate how Data&nbsp;Conveyer can be used to generate SQL scripts to load data into a database.

&nbsp;&nbsp;&nbsp;&nbsp;[DataConveyer_LoadSparseData &nbsp;**Source Code**](https://github.com/mavidian/DataConveyer_LoadSparseData){:target="_blank"}
{% endcapture %}
{% include toggleable-block.html block-id="03" block-title="DataConveyer_LoadSparseData" block-body=captured-details %}

<!-- DataConveyer_Route837ByAmt -->
{% capture captured-details %}
A console application to demonstrate routing capabilities of Data&nbsp;Conveyer.

&nbsp;&nbsp;&nbsp;&nbsp;[DataConveyer_Route837ByAmt  &nbsp;**Source Code**](https://github.com/mavidian/DataConveyer_Route837ByAmt){:target="_blank"}
{% endcapture %}
{% include toggleable-block.html block-id="04" block-title="DataConveyer_Route837ByAmt" block-body=captured-details %}

<!-- DataConveyer_SummarizeBmiData -->
{% capture captured-details %}
A console application to demonstrate how Data&nbsp;Conveyer can be used to summarize data.

&nbsp;&nbsp;&nbsp;&nbsp;[DataConveyer_SummarizeBmiData  &nbsp;**Source Code**](https://github.com/mavidian/DataConveyer_SummarizeBmiData){:target="_blank"}
{% endcapture %}
{% include toggleable-block.html block-id="05" block-title="DataConveyer_SummarizeBmiData" block-body=captured-details %}

<!-- DataConveyer_AggregateTokens -->
{% capture captured-details %}
A console application that uses Data&nbsp;Conveyer to accumulate data across multiple input files.

&nbsp;&nbsp;&nbsp;&nbsp;[DataConveyer_AggregateTokens  &nbsp;**Source Code**](https://github.com/mavidian/DataConveyer_AggregateTokens){:target="_blank"}
{% endcapture %}
{% include toggleable-block.html block-id="06" block-title="DataConveyer_AggregateTokens" block-body=captured-details %}

<!-- DataConveyer_SavedConfig -->
{% capture captured-details %}
A solution that demonstrates saving and restoring Data&nbsp;Conveyer configurations.

&nbsp;&nbsp;&nbsp;&nbsp;[DataConveyer_SavedConfig  &nbsp;**Source Code**](https://github.com/mavidian/DataConveyer_SavedConfig){:target="_blank"}
{% endcapture %}
{% include toggleable-block.html block-id="07" block-title="DataConveyer_SavedConfig" block-body=captured-details %}

<!-- DataConveyer_CsvToFlat_wasm -->
{% capture captured-details %}
A [WebAssembly](https://webassembly.org/){:target="_blank"} that demonstrates versatility of Data&nbsp;Conveyer. It uses Data&nbsp;Conveyer confined within a web browser to convert a CSV file to a flat (fixed-width field) file.

&nbsp;&nbsp;&nbsp;&nbsp;[DataConveyer_CsvToFlat_wasm  &nbsp;**Live Demo**](https://mavidian.github.io/DataConveyer_CsvToFlat_wasm/){:target="_blank"}

&nbsp;&nbsp;&nbsp;&nbsp;[DataConveyer_CsvToFlat_wasm  &nbsp;**Source Code**](https://github.com/mavidian/DataConveyer_CsvToFlat_wasm){:target="_blank"}
{% endcapture %}
{% include toggleable-block.html block-id="08" block-title="DataConveyer_CsvToFlat_wasm" block-body=captured-details %}

<!-- DataConveyer_Dockerized270Parser -->
{% capture captured-details %}
A Web API solution that demonstrates how Data&nbsp;Conveyer transformation can be enclosed in a Docker container.

&nbsp;&nbsp;&nbsp;&nbsp;[DataConveyer_Dockerized270Parser  &nbsp;**Source Code**](https://github.com/mavidian/DataConveyer_Dockerized270Parser){:target="_blank"}
{% endcapture %}
{% include toggleable-block.html block-id="09" block-title="DataConveyer_Dockerized270Parser" block-body=captured-details %}

<!-- DataConveyer_HierarchicalJsonToCsv -->
{% capture captured-details %}
A console application to convert JSON data with multiple nesting levels to and from 2-dimentional CSV data.
It illustrates the mechanism employed by Data&nbsp;Conveyer to flaten hierarchical JSON data.

&nbsp;&nbsp;&nbsp;&nbsp;[DataConveyer_HierarchicalJsonToCsv  &nbsp;**Source Code**](https://github.com/mavidian/DataConveyer_HierarchicalJsonToCsv){:target="_blank"}
{% endcapture %}
{% include toggleable-block.html block-id="10" block-title="DataConveyer_HierarchicalJsonToCsv" block-body=captured-details %}

<!-- DataConveyer_JsonHierarchy -->
{% capture captured-details %}
A console application that demonstrates some ways Data&nbsp;Conveyer can transform hierarchical JSON data. This sample shows how the same data can be expressed in JSON using different nesting hierarchies.

&nbsp;&nbsp;&nbsp;&nbsp;[DataConveyer_JsonHierarchy  &nbsp;**Source Code**](https://github.com/mavidian/DataConveyer_JsonHierarchy){:target="_blank"}
{% endcapture %}
{% include toggleable-block.html block-id="11" block-title="DataConveyer_JsonHierarchy" block-body=captured-details %}
