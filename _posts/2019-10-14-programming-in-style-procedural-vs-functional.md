---
layout: post
title: Programming in Style - Procedural vs Functional
author: Wojtek Dziegielewski
date: 2019-10-14 12:00:00 +0000
summary: A walkthrough demonstrating contrasts between procedural and functional programming styles in C#.
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

**TL;DR:**  A walkthrough demonstrating contrasts between procedural and functional programming styles in C#.

In my [previous post]({{ "/2019/10/11/from-oo-to-fp-teaching-old-dog-new-tricks.html" | relative_url }}), I have outlined my journey in learning the principles of functional programming. For seasoned developers that had their education and careers devoted to procedural and/or object-oriented (OO) programming, the shift is not always easy. It usually takes long hours of practice and head-scratching before the so-called "functional thinking" becomes natural. This in turn allows the benefits of functional programming to become apparent. During the transition process, it is natural to question such benefits: "Why would I bother with all this functional stuff? After all, I can do all I need using my good old, tried and true techniques".

The purpose of this article is to provide an introduction to some functional features available in C#/.NET. It guides you through a sample scenario and two different solutions implemented in a .NET Core application written in C#. Both solutions provide identical results; one uses procedural style and the other uses functional style.

It is important to note that I do not intend to present any style as superior to the other. Both are depicted as equivalent in terms of functionality and performance. You will notice however some emphasis on versatility of the functional style. This is so that you can better see some of its advantages. Ultimately, I am hoping that after reading this post, you'll get a step closer to embracing this special mindset, often  called "functional thinking".

## The Scenario

*<ins>Note</ins>: The scenario presented below is a contrived example. While the data reported is intended to look realistic (age in range of 18-80 and the score in the range of 350-800, which resembles the FICO Credit Score), the results are hypothetical and purely coincidental.*

Imagine a group of people (adults ages 18 through 80) that we need to evaluate. We are collecting their demographics (age in our case) as well as their scores (such as FICO Credit Scores). Our goal is to summarize scoring information for some groups of people.

Let's pretend we have a utility method that gives us information on a person's age and score. We can imagine some entity (like a credit bureau) providing this information for us.

<!-- ObtainInfo (utility method) -->
{% capture captured-details %}

```csharp
/// <summary>
/// Obtains person's age and a hypothetical score value (using contrived calculations).
/// </summary>
/// <param name="name">Name of a person.</param>
/// <returns>Tuple containing age and score.</returns>
static (int Age, int Score) ObtainInfo(string name)
{
   //Age is a value in a range of 18-80
   var age = name.Sum(l => l) % 63 + 18;  // l = letter in the name
   //Score is calculated as a value in a range of 350-800
   int i = 0;
   var score = name.Sum(l => l * (4 - i++ % 4)) % 551 + 300;
   return (age, score);
}
```

{% endcapture %}
{% include toggleable-block.html block-id="01" block-title="ObtainInfo (utility method)" block-body=captured-details %}

Think of the above method as a black-box utility. It returns simulated data to be used by our solutions, but the actual formulas in there are irrelevant to our discussion.

Notice that the type of the method's return value is `ValueTuple` containing 2 elements: age and score. Tuples are convenient when passing multiple values as a single unit.

## Initial Steps

We are now ready to create the project. We will need C# 7, so it is best to use Visual Studio 2019 or 2017. In my tests, I created a Console App for .NET Core (2.1), however it is perfectly OK to target a .NET Framework instead. Once the project is created, let's add the above ObtainInfo function to the Program class and the following baseline code into the Main method:

<!-- Main method -->
{% capture captured-details %}

```csharp
 var names = args.ToList();
 if (!names.Any())
 {  //If no names provided via command arguments, let's use these 40 names
    names = new List<string>( new[] { "Adam", "Alex", "Alice", "Anne", "Andy", "Anthony", "Ashley", "Betty", "Bob", "Brian",
                                      "Chuck", "Cora", "Daniel", "David", "Eddie", "Emily", "Emma", "Evan", "George", "Greg",
                                      "Harry", "Jason", "Jennifer", "Jim", "Joe", "John", "Josh", "Linda", "Lisa", "Luke",
                                      "Maggie", "Mark", "Mary", "Paula", "Ruth", "Ryan", "Steve", "Sue", "Tom", "Zach" } );
 }
 var stopWatch = new Stopwatch();
 stopWatch.Start();
 //TODO: ...
 stopWatch.Stop();
 Console.WriteLine($"Processing completed in {stopWatch.Elapsed.TotalSeconds.ToString("##0.000")}s");
```

{% endcapture %}
{% include toggleable-block.html block-id="02" block-title="Main method" block-body=captured-details %}

Before we continue, a quick note on the conventions used here. Each code snippet below is marked as either (procedural) or (functional). Wherever procedural and functional snippets are next to each other, they represent equivalent functionality using different programming styles. It may make sense to walk through these steps twice and thus create 2 separate projects: first time using procedural style and the second time using functional style. I particularly recommend this to OO developers trying to grasp the functional programming concepts.

OK, we're now ready to add some code to allow viewing of our data. Add this code snippet in place of the `//TODO: ...` comment in the Main method:

<!-- List of people (procedural) -->
{% capture captured-details %}

 ```csharp
foreach (var name in names)
{
   var info = ObtainInfo(name);
   Console.WriteLine($"{name} is {info.Age} years old and has a score of {info.Score}");
}
```

{% endcapture %}
{% include toggleable-block.html block-id="03" block-title="List of people (procedural)" block-body=captured-details %}

<!-- List of people (functional) -->
{% capture captured-details %}

```csharp
names.ForEach(n => { var info = ObtainInfo(n); Console.WriteLine($"{n} is {info.Age} years old and has a score of {info.Score}"); });
```

{% endcapture %}
{% include toggleable-block.html block-id="04" block-title="List of people (functional)" block-body=captured-details %}

Build and run the application. For my tests I used Ubuntu 18.04 running on WSL (Windows Subsystem for Linux) on Windows 10. So, after building the project, I navigated to the build target location (.../bin/debug/netcoreapp2.1 ) and used the command below. If you chose .NET Framework app instead of .NET Core, the command will differ slightly. Of course, you can also hit F5 to build and directly run/debug application from within Visual Studio.

```powershell
dotnet simulatedscores.dll
```

You should see output similar to:

```none
Adam is 74 years old and has a score of 612
Alex is 34 years old and has a score of 655
Alice is 55 years old and has a score of 495
Anne is 26 years old and has a score of 660
Andy is 36 years old and has a score of 660
Anthony is 62 years old and has a score of 589
...
Zach is 30 years old and has a score of 702
Processing completed in 0.048s
```

The program above used a default list of 40 names. Alternatively, a list of names can be supplied via command line arguments; for example:

```powershell
dotnet simulatedscores.dll Irene Christie Larry
```

, which results in this output:

```none
Irene is 76 years old and has a score of 548
Christie is 26 years old and has a score of 679
Larry is 36 years old and has a score of 619
Processing completed in 0.007s
```

Feel free to experiment with different sets of names. Just be wary of a possible occurrence of `InvalidOperationException` (Sequence contains no elements). Note that error handling is not a part of this walkthrough. Illustrations in the remainder of this walkthrough assume use of the default list of 40 names.

So far so good. We have 40 folks with their scores to evaluate. What if we need the average score and not the details? It can be done this way:

<!-- Average score (procedural) -->
{% capture captured-details %}

```csharp
int count = 0;
int totalScore = 0;
foreach (var name in names)
{
   count++;
   totalScore += ObtainInfo(name).Score;
}
Console.WriteLine($"Average score for all {count} people is {(double)totalScore/count:###.#}");
```

{% endcapture %}
{% include toggleable-block.html block-id="05" block-title="Average score (procedural)" block-body=captured-details %}

<!-- Average score (functional) -->
{% capture captured-details %}

```csharp
Console.WriteLine($"Average score for all {names.Count()} people is {names.Average(n => ObtainInfo(n).Score):###.#}");
```

{% endcapture %}
{% include toggleable-block.html block-id="06" block-title="Average score (functional)" block-body=captured-details %}

Now the output looks like this:

```none
Average score for all 40 people is 632.5
Processing completed in 0.007s
```

Let's say we're not after all individuals. Instead, we're interested only in millennials, which we assume (as of 2019) to be those between the ages of 23 and 37.
<!-- Average score for millennials (procedural) -->
{% capture captured-details %}

```csharp
int count = 0;
int totalScore = 0;
foreach (var name in names)
{
   var info = ObtainInfo(name);
   //Millennials are those between the ages of 23 and 37 (as of 2019)
   if (23 <= info.Age && info.Age <= 37)
   {
      count++;
      totalScore += info.Score;
   }
}
Console.WriteLine($"Average score for the {count} millennials is {(double)totalScore / count:###.#}");
```

{% endcapture %}
{% include toggleable-block.html block-id="07" block-title="Average score for millennials (procedural)" block-body=captured-details %}

<!-- Average score for millennials (functional) -->
{% capture captured-details %}

```csharp
//Millennials are those between the ages of 23 and 37 (as of 2019)
var infoForMillennials = names.Select(n => ObtainInfo(n)).Where(i => 23 <= i.Age && i.Age <= 37);
Console.WriteLine($"Average score for the {infoForMillennials.Count()} millennials is{infoForMillennials.Average(i => i.Score):###.#}");
```

{% endcapture %}
{% include toggleable-block.html block-id="08" block-title="Average score for millennials (functional)" block-body=captured-details %}

This brings the output similar to:

```none
Average score for the 15 millennials is 666.3
Processing completed in 0.007s
```

## Optimized LINQ Query

In this last calculation, you may have noticed that our functional code takes longer to execute than its procedural equivalent. In my experiments, the functional code completed in about 0.016s and not the 0.007s reported above. Why is it?

Surely, LINQ adds some overhead, but it does not necessarily have to be the culprit. Upon a closer look at the code, you will notice that the `infoForMillennials` query is evaluated twice: first to calculate `Count` and then to calculate `Average`. This in turn forces two iterations over the list of names (unlike the procedural code, which only has a single loop of course). We want both programming styles to match each other closely. How can we make the functional code calculate the two values within a single iteration?

Here is one way:

<!-- Optimized average score (functional) -->
{% capture captured-details %}

```csharp
//Millennials are those between the ages of 23 and 37 (as of 2019)
int count = 0;  //"closed over" (closure) to allow average and count calculated in a single iteration
var averageScore = names.Select(n => ObtainInfo(n)).Where(i => 23 <= i.Age && i.Age <= 37).Average(i => { count++; eturn i.Score; });
Console.WriteLine($"Average score for the {count} millennials is {averageScore:###.#}");
```

{% endcapture %}
{% include toggleable-block.html block-id="09" block-title="Optimized average score (functional)" block-body=captured-details %}

The above code snippet uses a feature named [closure](https://en.wikipedia.org/wiki/Closure_(computer_programming)){:target="_blank"}. When calculating `averageScore`, we're instructing the LINQ engine to do a tiny bit of extra work: we're asking that the `count` value be incremented every time the score value is accumulated (note that the function (lambda) inside the `Average` method is invoked by LINQ exactly once per each millennial). Basically, a closure makes the `count` variable (declared in our `Main` method) accessible to the function that is called by the LINQ engine. Details of this mechanism may be a good topic for another post, for now it's important to know that in C# closures are automatically handled by the compiler. The feature is so transparent that many C# developers successfully use closures without even realizing it. In fact, I already used closure in the `ObtainInfo` method above - notice that `i` variable there is 'closed over' just like the `count` variable here. As a final comment on closures, you may be interested to know that other languages, for example Java, handle closures differently.

I have a confession to make. The optimization did not reduce the processing time; it is still around 0.016s. We have eliminated the 2nd iteration over the list, but also introduced a closure, which added some overhead. Apparently, the net effect is a wash between the two. The optimization attempt may look premature and futile now. However, there are benefits as well. Our functional code now behaves very similarly to its procedural counterpart; in particular, the utility method (`ObtainInfo`) is called only once per element on the list.

To recap, our functional code is slower than procedural code by 0.009s. We can think of it as the price to pay for the convenience of using LINQ. In the sections that follow, I will demonstrate that this overhead is negligible. I will only be using the optimized version of the functional code. If you feel adventurous, I encourage you to experiment by reverting the functional code to the pre-optimized version and see what happens.

## A Dose of (simulated) Reality

We've seen in all the above examples that our app completed processing (almost) immediately. In particular, the `ObtainInfo` method returned results in an instant. It's not hard to imagine the score calculation taking a while to compute. Let's introduce a corresponding delay into our formula and replace `var score = name.Sum(l => l * (4 - i++ % 4)) % 551 + 300;` with:

```csharp
var score = name.Sum(l => { Thread.Sleep(10); return l * (4 - i++ % 4); }) % 551 + 300;
```

We have just increased the score calculation time by 10ms per each letter in a person's name. As a result, the total processing time becomes significant:

```none
Average score for the 15 Millennials is 666.3
Processing completed in 1.999s
```

Now, a design flaw becomes more or less apparent. We're calculating scores for the entire population of 40 individuals, but they're needed only for millennials, i.e just 15 of the 40. We need to avoid unnecessary score calculations for those that are not millennials!

You might say at this point that the problem is within the design and as such is unrelated to the programming style used. And you would be be absolutely correct. Note though that it is not uncommon to discover design flaws after the code has already been constructed. If this happens, the remediation process typically involves some sort of code refactoring. Let's see how our respective solutions (procedural and functional) can be refactored to address the design flaw we have uncovered.

## Remediation In Procedural Style

Our utility method (`ObtainInfo`) calculates two values for a person: age and a score. We now know that only the age is needed for all 40 individuals. The score calculation needs to be executed only for the 15 millennials. We need to bypass this expensive operation for the 25 non-millennials.

The first thing that comes to mind is to embed the required logic into the `ObtainInfo` method: in case the calculated age implies the person is not a millennial, then we skip the expensive score calculation and return 0 in its place. Such approach would certainly work, but we need to reject it. For one, it is too limiting - while this example specifically asks for millennials, we're looking for flexible criteria to decide if the score is needed or not. Besides, it should be the `Main` method (and not the utility method) to decide whether to calculate the score or not (after all, the utility method may be owned by a 3rd party that we don't want to share this logic with).

So, we really have no choice, but to split our `ObtainInfo` method into 2 separate methods, one to calculate the person's age and the other to calculate the person's score:

<!-- Refactored average score (procedural) -->
{% capture captured-details %}

```csharp
/// <summary>
/// Obtains person's age (using contrived calculations).
/// </summary>
/// <param name="name">Name of a person.</param>
/// <returns>Person's age.</returns>
static int ObtainAge(string name)
{
   //Age is a value in a range of 18-80
   var age = name.Sum(l => l) % 63 + 18;  // l = letter in the name
   return age;
}
/// <summary>
/// Obtains person's hypothetical score value (using contrived calculations).
/// </summary>
/// <param name="name">Name of a person.</param>
/// <returns>Person's score.</returns>
static int ObtainScore(string name)
{
   //Score is calculated as a value in a range of 350-800
   int i = 0;
   var score = name.Sum(l => { Thread.Sleep(10); return l * (4 - i++ % 4); }) % 551 + 300;
   return score;
}
```

{% endcapture %}
{% include toggleable-block.html block-id="10" block-title="Refactored average score (procedural)" block-body=captured-details %}

Now, we can refactor the Main method, so that the score is only calculated for millennials:

<!-- Refactored Main method (procedural) -->
{% capture captured-details %}

```csharp
int count = 0;
int totalScore = 0;
foreach (var name in names)
{
   var age = ObtainAge(name);
   //Millennials are those between the ages of 23 and 37 (as of 2019)
   if (23 <= age && age <= 37)
   {
      count++;
      totalScore += ObtainScore(name);
   }
}
Console.WriteLine($"Average score for the {count} millennials is {(double)totalScore / count:###.#}");
```

{% endcapture %}
{% include toggleable-block.html block-id="11" block-title="Refactored Main method (procedural)" block-body=captured-details %}

Our refactored solution yields the following output:

```csharp
Average score for the 15 millennials is 666.3
Processing completed in 0.734s
```

It is exactly what's expected: same result in about 3rd of the time.

## Remediation In Functional Style

The refactoring in the procedural style was quite involving and required splitting functionality of the utility method into two different methods. Clearly, we can follow the same approach in the solution that uses functional style. But is there an easier way?

I wouldn't be surprised if at this point you instinctively feel there should be an easier way. However, it may not be obvious what it is. Based on my experience, such thoughts are quite common when transitioning from procedural to functional thinking. Indeed, the functional style offers a way to refactor our solution in a simpler way.

So, how else we can avoid unnecessary score calculations for non-millennials? The `ObtainInfo` method calculates both age and score, so it seems impossible to do one without the other. But, we can actually separate the two calculations in time! The secret lies in thinking of functions as "*first class citizens*", i.e. elements that can be passed around (e.g as arguments or return values). What if our `ObtainInfo` method does not return the calculated score value, but instead the **formula to calculate the score**? Once we do that, then it is up to the consumer (the `Main` method) to decide if (and when) the expensive operation gets executed. Smart, isn't it?

So, we need to change the return type of the `ObtainInfo` method from `(int, int)` to `(int, Func<int>)`. The first element of the tuple (`int`) is the person's age (the same as before) and the second element (`Func<int>`) is a delegate (formula) that will calculate the score once invoked.

The new signature of `ObtainInfo` is:

```csharp
static (int Age, Func<int> ScoreFormula) ObtainInfo(string name)
```

We also need to replace direct score calculation, i.e. `var score = name.Sum(l => { Thread.Sleep(10); return l * (4 - i++ % 4); }) % 551 + 300;` with a **formula** to calculate the score:

<!-- Refactored average score (functional) -->
{% capture captured-details %}

```csharp
Func<int> scoreFormula = () => name.Sum(l => { Thread.Sleep(10); return l * (4 - i++ % 4); }) % 551 + 300;

return (age, scoreFormula);
```

{% endcapture %}
{% include toggleable-block.html block-id="12" block-title="Refactored average score (functional)" block-body=captured-details %}

Finally, in our Main function we need to invoke the `ScoreFormula` function instead of placing the already calcuated score value:

<!-- Refactored Main method (functional) -->
{% capture captured-details %}

```csharp
Console.WriteLine($"Average score for the {infoForMillennials.Count()} Millennials is {infoForMillennials.Average(i => i.ScoreFormula()):###.#}");
```

{% endcapture %}
{% include toggleable-block.html block-id="13" block-title="Refactored Main method (functional)" block-body=captured-details %}

That's it! Our program now yields the same output, but much faster. The processing time is about the same as for the refactored procedures code:

```none
Average score for the 15 Millennials is 666.3
Processing completed in 0.742s
```

In case you're wondering, we have basically reinvented the "lazy" pattern here. Instead of `Func<int>`, we could've used `Lazy<int>` with essentially identical outcome. I felt that using a function (*a formula to calculate the score*) was more intuitive than a "lazy" object (*a score that is calculated on demand*). However, you may feel otherwise. If so, it may be the perfect opportunity to experiment with the `Lazy` type.

## Surprise in the End

It might be interesting to see how our original, non-optimized functional code performs after refactoring. This was the code that iterated over the list of names twice. Let's bring back our original calculations for the millennials:

<!-- Non-optimized refactored average score (functional) -->
{% capture captured-details %}

```csharp
//Millennials are those between the ages of 23 and 37 (as of 2019)
var infoForMillennials = names.Select(n => ObtainInfo(n)).Where(i => 23 <= i.Age && i.Age <= 37);
Console.WriteLine($"Average score for the {infoForMillennials.Count()} millennials is {infoForMillennials.Average(i > i.ScoreFormula()):###.#}");
```

{% endcapture %}
{% include toggleable-block.html block-id="14" block-title="Non-optimized refactored average score (functional)" block-body=captured-details %}

We now see output like this:

```none
Average score for the 15 millennials is 666.3
Processing completed in 0.743s
```

Hmm... the processing time is the same as for the optimized code. Can you see what's going on?

Could it be that our non-optimized functional code is no longer iterating over the list of names twice? No, of course not. The list is still iterated over twice. But now, our utility function produces its result in an instant... remember that it no longer performs the expensive score calculation. So, the iteration that calculates the count of millennials is very fast.  So fast that we can't even see the difference.

So, after all this we can say that the functional code optimization (closure) was in fact premature!

## One Final Trick

We already know that the functional code can be written in many ways to accomplish the same thing. Let me present one additional variation. The score calculation formula can be expressed as a local function, a new feature in C# 7:

```csharp
int scoreFormula() => name.Sum(l => { Thread.Sleep(10); return l * (4 - i++ % 4); }) % 551 + 300;
```

The results including processing time are the same as before. Technically, there are differences between [local functions and lambda expressions](https://docs.microsoft.com/en-us/dotnet/csharp/local-functions-vs-lambdas){:target="_blank"}, which we used before. However, in this context, it is perfectly fine to treat them as equivalent options. So, the choice between them can simply be a matter of personal preference.

## Summary

We've done quite a bit of coding in this walkthrough:

* First, we created a utility method (`ObtainInfo`) to supply data that is potentially expensive to calculate.
* Then, we created two equivalent routines to repetitively consume the utility method; one routine was written in procedural style and the other in functional style.
* We optimized the functional routine by adding a closure.
* Finally, we refactored both routines in order to avoid unnecessary execution of expensive calculations. Refactoring patterns in the two routines were very different.
* In addition, we explored how functional style allows code variations in expressing the same formula.

## Conclusions

Modern C# allows programs to be written in 2 different styles: procedural (traditional "legacy" style) and functional (new declarative style). There is no right or wrong style to use, although particular scenarios may be better suited for one style than the other. Both styles are generally equivalent in terms of performance; overhead related to using functional style, e.g. LINQ, is miniscule and/or insignificant. Procedural style, being imperative, offers higher degree of control over code execution. Functional style offers many variations to express identical functionality. Optimization techniques exist for more explicit control in functional style, for example to improve performance. However, such techniques are rarely necessary.

There is nothing wrong with combining the two styles in a single solution. In fact, majority of modern solutions are written this way. These days, C# is often called a hybrid language, which means that it combines support for OO/procedural programming with many functional features added on. These features include LINQ, lambda expressions, lazy evaluation, tasks, nullable value types, non-nullable reference types (C# 8) and many others.

Whether to use functional style or procedural style is largely a matter of personal preference. My experience suggests that once you get a grasp of "functional thinking", you will likely favor the functional style. Code written in functional style is terser (shorter), less error prone, requires less testing and is easier to maintain. Some just say that it is more fun to program in this (functional) way. If your experience is different, please let me know by commenting below.

## Source Code

All source code presented in this article is available on GitHub in [this repository](https://github.com/mavidian/SimulatedScores){:target="_blank"}. You will notice two branches there named procedural and functional. They contain two equivalent solutions written in the respective programming styles. The master branch contains the baseline code, which may be a good starting point if you intend to follow the walkthrough by making manual code updates.
