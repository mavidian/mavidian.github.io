---
layout: post
title: .NET Core and .NET Standard are not the same
author: Wojtek Dziegielewski
date: 2020-12-12 12:00:00 +0000
summary: I fell into the same trap twice - not every .NET Core feature is available in .NET Standard.
---

I am a lifelong software developer. I love finding solutions to problems assumed to be "unsolvable" before. I enjoy being creative, discovering new ways of addressing difficult challenges. I tolerate redoing projects with known resolution paths as long someone is willing to pay for my time.

However, there are also aspects of my work that I find frustrating. And I am not referring to the proverbial *"fixing somebody else's mistakes"*. This example is all on me, *"the perfect human being"*. Let's call it *"falling into the same trap you fell into before"*. It happened to me recently when I recognized the symptoms of a problem I had already experienced. I also remembered that I had resolved it, but I didn't remember the underlying root cause or what the resolution was.

## The Problem

In my work, I rely heavily on the fantastic [LINQ library](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/){:target="_blank"}. It includes a [Zip](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.zip){:target="_blank"} function, which is well established in functional programming communities, but little known to many C# developers. The function allows easy evaluation of two lists for commonalities.

For example, if I want to identify a common leading portion of two lists: `myList` and `theOtherList`, I can simply do:

```csharp
myList.Zip(theOtherList).TakeWhile(t => t.First.Equals(t.Second))
```

So, if `myList` contains `{ 1, 2, 4, 5, 6 }` and `theOtherList` contains `{1, 2, 3, 4, 5, 6, 7, 8 )`, the result will be `{ 1, 2 }`.

One day I created a sleek utlity method leveraging the Zip function in a bit more complex way than the above example. The utility method worked beautifully in my test application.

I then decided to move my utility method to a class library project (so it can be reused elsewehere). All of a sudden, a compile error came up:

> CS1501	No overload for method 'Zip' takes 1 arguments

**How come it worked before, but now it won't even compile?**

## The Solution

The secret is that my test application was targeting .NET Core 3.1. .NET Core supports a Zip method overload with a single argument, in which case it does ***the most sensible thing to do: create a list of tuples consisting of the respective elements from both lists***. But, my class library was targeting .NET Standard 2.0. .NET Standard is not a specific target, but a standard; let's think of it as the *"least common denominator"* between .NET Core and .NET Framework. In this particual case, the Zip method overload I called did not exist in .NET Framework, hence the error.

I needed to change my class library to be compliant with both .NET Core and .NET Framework. Specifically, I had to explicitly prescribe ***the most sensible thing to do: create a list of tuples consisting of the respective elements from both lists***. Something like:

```csharp
myList.Zip(theOtherList, (f, s) => (First: f, Second: s)).TakeWhile(t => t.First.Equals(t.Second))
```

## Conclusion

When I look at it in retrospect, it all seems obvious. I should've known that .NET Core extends the Zip method from .NET Standard by an overload that does ***the most sensible thing to do***. And even if I didn't know it, I should've suspected the project target framework as a possible culprit.

However, receiveing the message *"No overload for method 'Zip' takes 1 arguments"* didn't point me in the right direction. I remembered that I have seen it before, but I had no clear idea on the troubleshooting steps to take. Before I eventually figured out what was going on, I frustratingly went through the project dependencies, examined the failing method, its class, namespace, assembly, among other needless steps.

I fell into the trap twice already. Hopefully, there won't be a third time.
