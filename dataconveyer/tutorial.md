---
layout: page
title: Tutorial
permalink: /dataconveyer/tutorial/
---

# Data&nbsp;Conveyer Tutorial

In this short tutorial, we will work on a simple application to transform text data. The tutorial consists of 5 lessons, which can all be finished in as little as 30 minutes. Every new lesson picks up where the prior lesson left off.

The tutorial is intended for developers, but only basic understanding of .NET programming is required. Tutorial illustrations depict Visual Studio 2017, however basically the same steps apply other versions between Visual Studio 2012 and Visual Studio 2019. All code samples are written in C#. Other .NET languages, such as VB.NET, can be used as well.

You may prefer to obtain the code samples from this [GitHub repository](https://github.com/mavidian/DataConveyer_tutorial_files){:target="_blank"}, which additionally contains sample input data.

##### [Lesson 1: Convert CSV to Keywords (~10 mins)]({{ "/dataconveyer/tutorial/lesson1.html" | relative_url }})

##### [Lesson 2: Custom Transformation (~5 mins)]({{ "/dataconveyer/tutorial/lesson2.html" | relative_url }})

##### [Lesson 3: Progress Reporting (~5 mins)]({{ "/dataconveyer/tutorial/lesson3.html" | relative_url }})

##### [Lesson 4: Asynchronous Execution (~5 mins)]({{ "/dataconveyer/tutorial/lesson4.html" | relative_url }})

##### [Lesson 5: Limits and Errors (~5 mins)]({{ "/dataconveyer/tutorial/lesson5.html" | relative_url }})

<p/>
In these 5 lessons, we have barely scratched the surface of functionality offered by Data&nbsp;Conveyer. Here are some additionala features that Data&nbsp;Conveyer supports:

* Various kinds of inputs and outputs, not just files, but any kind of streams of text data.
* Multiple sources and targets with custom merging and routing.
* Flexible rules for record parsing, filtering, transforming, and formatting.
* Record clustering into families of related records, so that the entire family/cluster can be transformed as a unit.
* Variety of transformation patterns.
* Parallel Processing to take advantage of multi-processor architectures.
* Buffering (“backpressure” handling) to control memory use.
* … and more.