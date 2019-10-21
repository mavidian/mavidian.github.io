---
layout: page
title: Use Cases
permalink: /dataconveyer/use-cases/
---

# Use Cases where Data&nbsp;Conveyer may apply

Listed below are sample scenarios defining use cases that involve Data&nbsp;Conveyer. They illustrate how Data&nbsp;Conveyer can add value in terms of manual effort reduction, acceleration of delivery timeframe, or less tangible benefits, such as quality improvement and risk mitigation.

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

<!-- Scenario One: Rapid Implementation of New Business -->
{% capture captured-details %}
An insurance company signs a new deal with a 3rd party vendor. The deal necessitates data exchange between the enterprises, such as import/export of membership data, claim data, and the like.

Data&nbsp;Conveyer allows rapid implementation of a production-ready solution to translate data between vendor specific and internal formats. Specifically, such implementation becomes a matter of days or weeks, as opposed to months when using traditional techniques. Furthermore, a proof of concept prototype of inbound or outbound data exchange can be provided in a matter of hours, which may play an important role in project planning.
{% endcapture %}
{% include toggleable-block.html block-id="01" block-title="Scenario One: Rapid Implementation of New Business" block-body=captured-details %}

<!-- Scenario Two: Integration Into Existing Infrastructure -->
{% capture captured-details %}
In order to import external data, a database system relies on batch processing of keyword data files. However, inbound transactions are received in real-time by a company-wide enterprise service bus.

In this scenario, Data&nbsp;Conveyer can be employed as a listener to cumulate real-time transactions received from the bus, translate data to the required format and post the resulting files to the respective batch jobs.
{% endcapture %}
{% include toggleable-block.html block-id="02" block-title="Scenario Two: Integration Into Existing Infrastructure" block-body=captured-details %}

<!-- Scenario Three: Automation of Benefits Configuration -->
{% capture captured-details %}
A team of product consultants works on configuring new products to be offered during the next benefit year. The process is tedious and consist of repetitive cycles. Consultants define configuration data using ad-hoc Excel files. The files get uploaded into the database in order to conduct user acceptance tests. At the conclusion of the tests, the cycle needs to be repeated, until the test results are satisfactory.

In this scenario, Data&nbsp;Conveyer can be leveraged to generate SQL statements from Excel data, which offers two-fold improvement: reduction of manual effort and error elimination. As an added benefit, the operation can generally be conducted directly from the consultants’ desktops.
{% endcapture %}
{% include toggleable-block.html block-id="03" block-title="Scenario Three: Automation of Benefits Configuration" block-body=captured-details %}

<!-- Scenario Four: User Friendly Data Retrieval -->
{% capture captured-details %}
An application receives complex data from a remote source, such as a web service. Before applying the application logic, the data needs to be parsed, scrubbed and/or evaluated. In addition, the application’s graphical user interface needs to remain responsive during this process.

In this scenario, Data&nbsp;Conveyer can do both: consume the service as well as extract required elements from received data… all in a non-blocking, asynchronous mode.
{% endcapture %}
{% include toggleable-block.html block-id="04" block-title="Scenario Four: User Friendly Data Retrieval" block-body=captured-details %}

<!-- Scenario Five: Easy Separation of EDI Transactions -->
{% capture captured-details %}
EDI translators often identify inbound transactions based solely on a transaction type. As an example, EDI 834 transactions may represent daily enrollment updates as well as monthly summary records. Consequently, it may be difficult to separate transactions intended for distinct designations.

Data&nbsp;Conveyer can be used to evaluate transactions produced by the EDI translator, apply custom routing rules and create separate outputs to forward transactions to distinct targets for further processing.
{% endcapture %}
{% include toggleable-block.html block-id="05" block-title="Scenario Five: Easy Separation of EDI Transactions" block-body=captured-details %}

<!-- Scenario Six: Data Analysis Augmentation -->
{% capture captured-details %}
During a system conversion, data profiling is performed to assess data quality and compatibility with the target system. Very large quantities of data get loaded into a SQL database for subsequent analyses. It is quickly discovered that majority of the records contain no data of interest. In addition, several data fields are universally empty. It is not difficult to bypass such irrelevant data using SQL queries; however, the sheer volume of data heavily affects performance and makes the analysis process very time consuming.

Data&nbsp;Conveyer can easily eliminate loading unneeded data in the first place. Records containing no relevant data can be filtered out and empty fields can be removed, both before data gets loaded into the database.
{% endcapture %}
{% include toggleable-block.html block-id="06" block-title="Scenario Six: Data Analysis Augmentation" block-body=captured-details %}

<!-- Scenario Seven: Enhanced EDI Translation -->
{% capture captured-details %}
EDI transactions received from a newly signed trading partner cause occasional errors when processed by the EDI Translator. Upon analysis, it was determined that some transactions, while HIPAA compliant, are interpreted as duplicates instead of being recognized as distinct transactions. Any reconfiguration of the EDI Translator is problematic, due to the effort involved and also the high risk of impact on already established business.

Data&nbsp;Conveyer can be employed in this scenario as a preprocessor to evaluate and update EDI transactions according to custom rules, so that they are disambiguated and interpreted by the EDI Translator as intended.
{% endcapture %}
{% include toggleable-block.html block-id="07" block-title="Scenario Seven: Enhanced EDI Translation" block-body=captured-details %}
