---
layout: page
Title: Engagements
permalink: /services/engagements.html
---

# Sample Engagements

The following list contains a sample of prior assignments.

{% comment %}
  Each engagment is rendered by toggleable-block.html, which takes 3 parameters:
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

<!-- Extension Frameworks -->
{% capture captured-details %}
A set of frameworks that implemented common functionality of Facets™ extensions, both XCOM and embedded. The frameworks curtailed extension development time by a minimum of 30%.

* Defined the API exposed by the frameworks. Authored documentation and training materials.
* Led development efforts and oversaw delivery of the solution components.
{% endcapture %}
{% include toggleable-block.html block-id="01" block-title="Extension Frameworks" block-body=captured-details %}

<!-- Specialized Facets Extensions -->
{% capture captured-details %}
Authored numerous Facets extensions, which often involved major technical challenges and necessitated exploiting undocumented APIs normally designated for internal, inter-process communications. Examples:

* An adapter to augment the claim adjudication process by intercepting claims and forwarding them to a cloud-based clinical editor. The editor's responses are applied onto claims in real time.
* A generic, configurable browser window embedded into Facets  to render data obtained from external web components.
* A real time adjudication extension to obtain alternative claim pricing from NetworX Pricer®.
* A seamless integrator of an HP Exstream based correspondence system into Facets.
{% endcapture %}
{% include toggleable-block.html block-id="02" block-title="Specialized Facets Extensions" block-body=captured-details %}

<!-- Medicare Plan Interfaces -->
{% capture captured-details %}
* Managed a development team working on a set of interfaces (both inbound and outbound) for a Medicare plan.

* Provided guidance to developers.   Acted as a mentor and a facilitator in removing obstacles, both procedural and technical.
* Developed and executed a project plan. Stabilized project delivery through defect management process. 
{% endcapture %}
{% include toggleable-block.html block-id="03" block-title="Medicare Plan Interfaces" block-body=captured-details %}

<!-- Real Time Clinical Editor Adapter -->
{% capture captured-details %}
A specialized, real-time adapter that communicated with a custom TCP listener to send and receive claims for clinical editing during adjudication.
{% endcapture %}
{% include toggleable-block.html block-id="04" block-title="Real Time Clinical Editor Adapter" block-body=captured-details %}

<!-- Security Enhancement -->
{% capture captured-details %}

* Led a technical assessment team in identifying a set of Facets components impacted by a new security requirement.
* Created a complete remediation plan, which included detail technical designs.
* Developed a strategy to revise a set of Facets stored procedures, so that they are forward upgradeable and meet hosting standards.
* Led a multinational development team throughout the remediation process.
* Coordinated implementation of deliverables and the revised upgrade process.
{% endcapture %}
{% include toggleable-block.html block-id="05" block-title="Security Enhancement" block-body=captured-details %}

<!-- Custom Accumulator Import -->
{% capture captured-details %}
A customized accumulator import process which involved injection of custom data in a way that that it was consumable by the standard Facets import process.
{% endcapture %}
{% include toggleable-block.html block-id="06" block-title="Custom Accumulator Import" block-body=captured-details %}

<!-- Log Parser -->
{% capture captured-details %}
A complex parser to examine Facets batch log files, extract required sections, such as errors and upload parsed elements to a user-defined data store. The tool was highly customizable and heavily relied on regular expressions.
{% endcapture %}
{% include toggleable-block.html block-id="07" block-title="Log Parser" block-body=captured-details %}

<!-- Facets SME -->
{% capture captured-details %}
Advisor to a team developing a CRM application that relied on several data sources including Facets.

* Researched several issues revolving around Facets services, such auditing or restricting access to customer service records.
* Created proof of concept prototypes, for example to seamlessly access relevant Facets records using Facets Interactive Driver.
{% endcapture %}
{% include toggleable-block.html block-id="08" block-title="Facets SME" block-body=captured-details %}

<!-- Technical Advisor -->
{% capture captured-details %}
A long term advisor to a 3rd party development team working on an enterprise wide web services solution in connection with a major Facets implementation.

* Participated in and contributed to design sessions and performed design reviews of the custom solution.
* Advised the development team on the best practices on integration with the hosting center and Facets, for example with respect to Facets services security.
{% endcapture %}
{% include toggleable-block.html block-id="09" block-title="Technical Advisor" block-body=captured-details %}

<!-- Technical Trainer -->
{% capture captured-details %}

* Delivered technical training in areas related to Facets technologies formerly known as FXI, such as Facets extensions an Facets services.
* Developed training materials.
{% endcapture %}
{% include toggleable-block.html block-id="10" block-title="Technical Trainer" block-body=captured-details %}

<!-- Sales Force Automation System -->
{% capture captured-details %}

* Led a 6 person team developing an enterprise–wide sales force automation system.
* The application featured highly configurable, object–oriented design, multi–tier architecture and tight integration with a SAP based ERP system.
* Areas of focus included internationalization, code profiling, performance tuning, dynamic form generation and COM–related memory leak issues.
{% endcapture %}
{% include toggleable-block.html block-id="11" block-title="Sales Force Automation System" block-body=captured-details %}
