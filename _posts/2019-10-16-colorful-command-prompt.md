---
layout: post
title: Colorful Command Prompt
author: Wojtek Dziegielewski
date: 2019-10-16 12:00:00 +0000
summary: In Windows 10, command prompt window can be in color.
---
{% comment %}
  Code snippets in this post are rendered by toggleable-block.html, which takes 3 parameters:
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

**TL;DR:** How to add color to text displayed in the command prompt window.

## Good Old DOS Prompt

Every once in a while, I find it convenient to use the good old command prompt window, aka the DOS prompt. For example, if a console application takes many arguments, it may be easiest to create a simple batch (.bat) file with the entire command line followed by the [pause](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/pause){:target="_blank"} command. You then simply double click on the batch file to invoke the application on as-needed basis.

Typically console applications provide monochrome output, which makes the display look archaic. Before Windows 10, there was no easy way to display such text in colors (aside from changing foreground and background colors). In Windows 10, the command prompt window got overhauled and now supports [control character sequence](https://docs.microsoft.com/en-us/windows/console/console-virtual-terminal-sequences){:target="_blank"} that can be used to adjust the looks of the window.

## Sample Scenario

Let's assume we have a job (batch file) that calls two console applications, one after another. For simplicity, we will simulate the output from these applications by two other batch files.

<!-- JobWithTwoTasks.bat-->
{% capture captured-details %}

```bat
@echo off
cls

echo This sample job invokes two tasks, for example .NET console apps.
REM The tasks are simulated by FirstTask.bat and SecondTask.bat batch files

call FirstTask.bat
call SecondTask.bat

echo Both tasks have completed.
pause
```

{% endcapture %}
{% include toggleable-block.html block-id="01" block-title="JobWithTwoTasks.bat" block-body=captured-details %}

<!-- FirstTask.bat -->
{% capture captured-details %}

```text
REM This is a simulated output from an executable program, e.g. a .NET console application
echo The first task is starting.
echo There were 500 records processed with no errors.
echo The first task has completed processing in 0.001s.
```

{% endcapture %}
{% include toggleable-block.html block-id="02" block-title="FirstTask.bat" block-body=captured-details %}

<!-- SecondTask.bat -->
{% capture captured-details %}

```text
REM This is a simulated output from an executable program, e.g. a .NET console application
echo The second task is starting.
echo Error occurred in record# 344: Invalid record type.
echo There were 500 records processed with 1 error.
echo The second task has completed processing in 0.003s.
```

{% endcapture %}
{% include toggleable-block.html block-id="03" block-title="SecondTask.bat" block-body=captured-details %}

When we double-click on out `JobWithTwoTasks.bat` file, our job will get executed and we will see this rather boring looking output:

![Colorful Command Prompt baseline]({{ "/img/blog/ColorfulCmdPrompt_baseline.png" | relative_url }})

## Task Separators

When looking at this last output, it's difficult to see what happened, in particular which part of the output was produced by which task. It seems as if the best we can do is to add some empty lines to separate sections of the output:

```text
echo.
call FirstTask.bat
echo.
call SecondTask.bat
echo.
```

Upon making this change to `JobWithTwoTasks.bat`, our output looks like this:

![Colorful Command Prompt tasks separated]({{ "/img/blog/ColorfulCmdPrompt_separators.png" | relative_url }})

## Adding Color

When on Windows 10, we can do better. Basically, any part of the display can have it's own color. So, if we add some special characters to the output:

```text
REM Set text color to green
echo [0;92m
call FirstTask.bat
REM Set text color to yellow
echo [0;93m
call SecondTask.bat
REM Reset text color
echo [0m
```

, then the output from the first will show in green and the output from the second task will show in yellow:

![Colorful Command Prompt colorful]({{ "/img/blog/ColorfulCmdPrompt_colorful.png" | relative_url }})

Some explanation is in order here. The mysterious  character is the escape character with an ASCII code of 27 (decimal). Depending on the editor you're using to edit the `JobWithTwoTasks.bat` file, it may be more or less challenging to enter this special character. Perhaps, the easiest approach is to use the clipboard, i.e. copy and paste. For example, it can copied directly from this page.

We're also seeing some strange sequences following the escape character. How do we know that using `[0;92m` will set our text color to green? There are a few resources that you may need to google for. I found [this file provided by Michele Locati](https://gist.github.com/mlocati/fdabcaeb8071d5c75a2d51712db24011/revisions#diff-d906085db1bccb47649f0dd807e11e83){:target="_blank"} very helpful. It makes the selection of a proper character sequence a breeze.

The basic idea is that each sequence starts with the escape character followed by an open bracket. It then contains up to 16 parameters separated by semicolons. The sequence ends with an `m` character. So, for example, our `[0;92m` contains 2 parameters: 0 means *"reset the console to its original state"* and 92 means *"set text color to green"*. The first parameter (0) is relevant in cases where text attributes other than color (e.g. underline) have been set previously. Feel free to experiment with different control character sequences.

## No Extra Lines

Now that the tasks are displayed in different colors, we may no longer want the blank lines between them. To eliminate these extra lines, we need the `echo` command to suppress the line-feed character at end. There is a fairly known trick to do that:

```text
REM Set text color to green
echo | set /p=[0;92m
call FirstTask.bat
REM Set text color to yellow
echo | set /p=[0;93m
call SecondTask.bat
REM Reset text color
echo | set /p=[0m
```

A quick explanation on this trick in which the output from `echo` command is "piped" into the `set` command. The control character sequences are sent as a prompt by the `set` command, which expects an entry to be made to the console. This prompt is immediately satisfied by the line-feed character provided by the `echo` command and importantly the line-feed is not echoed to the screen. If you're curious what variable is being set by the `set` command above, the answer is none. While it is OK to leave off the variable name (the part between `/p` and the equal sign), no variable is set in this case. But, we're veering off topic here.

Now our output looks like the original one, but in color:

![Colorful Command Prompt colorful no separators]({{ "/img/blog/ColorfulCmdPrompt_colorful-no-separators.png" | relative_url }})

## Refinements

We now have the output we want, but our code can still be refined. All revisions presented below will result in the same output as on the last image above.

First, using `echo` and piping to supply data requested by `set` command is awkward and inefficient. Piping can be avoided by instead having `set` read from `nul`, i.e. a special device that yields EOF (end of file) immediately. So, our code might look like this instead (and still produce identical output):

```text
REM Set text color to green
<nul set /p=[0;92m
call FirstTask.bat
REM Set text color to yellow
<nul set /p=[0;93m
call SecondTask.bat
REM Reset text color
<nul set /p=[0m
```

You may not like the fact that a non-printable character (``, i.e. escape) is proliferated throughout the script. We can make our code easier to read by assigning the escape characters to a variable and using this variable afterwards. The code below again provides the same output as before.

```text
REM ESC character (Ascii code 27)
set esc=

REM Set text color to green
<nul set /p=%esc%[0;92m
call FirstTask.bat
REM Set text color to yellow
<nul set /p=%esc%[0;93m
call SecondTask.bat
REM Reset text color
<nul set /p=%esc%[0m
```

What if you don't like the escape character to be present in your script at all? It can be done too! Something like this:

```text
call SetTextColor green
call FirstTask.bat

call SetTextColor yellow
call SecondTask.bat

call SetTextColor
```

We have now delegated handling of the control character sequences to another batch file: `SetTextColor.bat`. Here is what it looks like:

<!-- SetTextColor.bat -->
{% capture captured-details %}

```text
@echo off
REM A script to set the color of text printed to the console.
REM Intended to be called from other .bat files like so:
REM    call SetTextColor <color>
REM , where <color> is one of: red, green, yellow, blue, magenta, cyan, white

REM ESC character (Ascii code 27)
set esc=

If "%1" == "red" (
  <nul set /p=%esc%[0;91m
  goto done
)
If "%1" == "green" (
  <nul set /p=%esc%[0;92m
  goto done
)
If "%1" == "yellow" (
  <nul set /p=%esc%[0;93m
  goto done
)
If "%1" == "blue" (
  <nul set /p=%esc%[0;38;2;64;128;255m
  goto done
)
)
If "%1" == "magenta" (
  <nul set /p=%esc%[0;95m
  goto done
)
)
If "%1" == "cyan" (
  <nul set /p=%esc%[0;96m
  goto done
)
)
If "%1" == "white" (
  <nul set /p=%esc%[0;97m
  goto done
)
REM TODO: add other colors and/or display attributes as needed

REM If color is unrecognized or omitted, then reset color (back to the console original).
<nul set /p=%esc%[0m

:done
```

{% endcapture %}
{% include toggleable-block.html block-id="04" block-title="SetTextColor.bat" block-body=captured-details %}

The script can be expanded to support additional colors and text attributes, such as underline. Feel free to experiment with different control character sequences.

## Conclusion

Windows 10 allows control over color and other display attributes in the command prompt window. This makes it possible for DOS batch scripts to output text looking just like output from modern tools, such as PowerShell or Linux scripts.

## Source Code

The scripts presented in this article is available on GitHub in [this repository](https://github.com/mavidian/ColorfulCmdPrompt){:target="_blank"}.
