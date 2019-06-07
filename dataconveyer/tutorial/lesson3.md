---
layout: page
title: Lesson 3
permalink: /dataconveyer/tutorial/lesson3.html
---

# Data&nbsp;Conveyer Tutorial<br/>Lesson 3: Progress Reporting

This lesson assumes that you have completed [Lesson 2]({{ "/dataconveyer/tutorial/lesson2.html" | relative_url }}) of this [Tutorial]({{ "/dataconveyer/tutorial/" | relative_url }}). It is expected to take about 5 minutes.

Data&nbsp;Conveyer can provide progress reporting, which will be the topic of this lesson.

First, let’s slow down our *TransformRecordToSayHello* function as if some complex, time consuming processing is taking place.

**Step 3.1** Add the following line immediately before the *return* statement in the *TransformRecordToSayHello* function:

```csharp
Thread.Sleep(15);
```

**Step 3.2** The above statement refers to *System.Threading* names. Add a corresponding using directive to the top of the *Program.cs* module.

```csharp
using System.Threading;
```

**Step 3.3** Select *Debug → Start Debugging (F5)* to build and execute the project.

Since now the process takes some time to complete, you will see this screen ...

*![Process is Starting]({{ "/img/tutorial/Fig3-1.png" | relative_url }}){: .screenshot-lg }*

... for about 3 seconds before the confirmation of successful completion eventually comes up:

*![Successful Completion]({{ "/img/tutorial/Fig3-2.png" | relative_url }}){: .screenshot-lg }*

Not the best user experience. Let's provide more immediate feedback.

**Step 3.4** Add the following 3 lines to the *OrchestratorConfig* object initializer near the top of the *Main* method:

```csharp
ReportProgress = true,
ProgressInterval = 1,
ProgressChangedHandler = (s, e) => { if (e.Phase == Phase.Output) Console.Write($"\rProcessed {e.RecCnt.ToString()} records so far..."); },
```

>Notice that the *ProgressChangedHandler* setting is assigned a so-called lambda expression, which is a special notation for an anonymous function. Lambda expressions can be assigned to settings that are of a delegate type (function) instead of assigning named functions. In this case s and e are function parameters, e being of type *ProgressEventArgs*, which supplies arguments to our handler, such as *Phase* and *RecCnt*.
>
Data&nbsp;Conveyer features several settings that are of a delegate type. For example, the *TransformRecordToSayHello* function introduced in [Lesson 2]({{ "/dataconveyer/tutorial/lesson2.html" | relative_url }}) is a named function assigned to the *RecordboundTransformer* setting. Instead of using this named function, a lambda expression could’ve been assigned instead: `RecordboundTransformer = r => { ... }`, where r is of *IRecord* type.


**Step 3.5** Add the following line after the block of code that executes the Data&nbsp;Conveyer process (the one with the *ExecuteAsync* method call), i.e.immediately before completion status gets evaluated:

```csharp
Console.WriteLine(" done!");
```

**Step 3.6** Select *Debug → Start Debugging (F5)* to build and execute the project.

Now the progress is being reported in real-time, like this:

*![Processing Progress]({{ "/img/tutorial/Fig3-3.png" | relative_url }}){: .screenshot-lg }*

Upon completion, the screen will look like this:

*![Processing Complete]({{ "/img/tutorial/Fig3-4.png" | relative_url }}){: .screenshot-lg }*

**Step 3.7** Change the *ProgressInterval* property value from 1 to 10 (`ProgressInterval = 10,`) and observe how the screen is being refreshed upon execution. Experiment with different values of the *ProgressInterval* property.

>You may notice that depending on the interval value, the last *“Processed … records so far…”* message is not the same as the total records processed. This is expected and can be addressed by handling another event raised by Data&nbsp;Conveyer, namely the *PhaseFinished* event.

**Step 3.8** Change the *ProgressInterval* property value back to 1 (`ProgressInterval = 1,`).

<br/>End of Lesson 3.

Proceed to [Lesson 4: Asynchronous Execution (~5 mins)]({{ "/dataconveyer/tutorial/lesson4.html" | relative_url }}).
