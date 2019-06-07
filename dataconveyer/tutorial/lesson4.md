---
layout: page
title: Lesson 4
permalink: /dataconveyer/tutorial/lesson4.html
---

# Data&nbsp;Conveyer Tutorial<br/>Lesson 4: Asynchronous Execution

This lesson assumes that you have completed [Lesson 3]({{ "/dataconveyer/tutorial/lesson3.html" | relative_url }}) of this [Tutorial]({{ "/dataconveyer/tutorial/" | relative_url }}). It is expected to take about 5 minutes.

In this lesson, we will explore asynchronous nature of Data&nbsp;Conveyer. We will need to refactor our code a bit.

**Step 4.1** In the block of code that executes the Data&nbsp;Conveyer process, replace the "synchronous" call to the ExecuteAsync method (i.e. `result = orchtr.ExecuteAsync().Result;`) by these statements:

```csharp
var execTask = orchtr.ExecuteAsync(); //asynchronous execution

//Our execution task is running, let's cancel it after 1 second
Thread.Sleep(1000);
orchtr.CancelExecution();

result = execTask.Result;
```

**Step 4.2**  Add a new case to the *switch* block that evaluates completion status (immediately before the *default* clause):

```csharp
case CompletionStatus.Canceled:
 Console.WriteLine($"Execution was canceled after processing {result.RowsWritten.ToString()} records");
 break;
```

**Step 4.3**  Select *Debug → Start Debugging (F5)* to build and execute the project.

After about 1 second of processing, you will notice the following output:

*![Execution Canceled]({{ "/img/tutorial/Fig4-1.png" | relative_url }}){: .screenshot-lg }*

In this last run, Data&nbsp;Conveyer process was launched asynchronously. But then, after 1000 ms (1 second), we decided to cancel it. Hence, only about 57 records managed to get processed. Verify that the actual number of records in the *output.txt* file matches the number of records processed.

Now let’s add more flexibility and allow cancellation upon a keystroke instead of a lapse of time.

**Step 4.4**  In the block of code that executes the Data&nbsp;Conveyer process, replace the lines containing `Thread.Sleep(1000)` and `orchtr.CancelExecution()` with these lines:

```csharp
//Our execution task is running, let's start another task that will cancel it when a key is pressed
Task.Run(async () => { while (!Console.KeyAvailable) await Task.Delay(50); Console.ReadKey(true); orchtr.CancelExecution(); });
```

The above statement requires a `using System.Threading.Tasks;` directive.  Add it to the top of the *Program.cs* module.

>There is a bit of trickery here. After calling the Task.Run method above, we have 2 tasks running concurrently: one that executes the Data&nbsp;Conveyer process and the other that constantly checks if a key was pressed (and if so, then it cancels the Data&nbsp;Conveyer process). Note that this simplistic code is only for demonstration purposes and not recommended for any production level applications.

**Step 4.5**  Select *Debug → Start Debugging (F5)* to build and execute the project.

Now you are in control of when the process gets canceled, if at all.  Hit any key while the process is still running and it will cancel processing at that time. For example:

*![Execution Canceled]({{ "/img/tutorial/Fig4-2.png" | relative_url }}){: .screenshot-lg }*

**Step 4.6**  Select *Debug → Start Debugging (F5)* to execute the project again. This time do not hit any key and the process will complete normally:

*![Execution Completed]({{ "/img/tutorial/Fig4-2.png" | relative_url }}){: .screenshot-lg }*

**Step 4.7**  Repeat the process execution a few times canceling it after processing various number of records and verify that each time the *output.txt* file contains the number of records specified in the console window.

<br/>End of Lesson 4.

Proceed to [Lesson 5: Limits and Errors (~5 mins)]({{ "/dataconveyer/tutorial/lesson5.html" | relative_url }}).
