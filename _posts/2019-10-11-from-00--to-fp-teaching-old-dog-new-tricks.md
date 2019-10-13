---
layout: post
title: From OOP to FP - Teaching Old Dog New Tricks
author: Wojtek Dziegielewski
date: 2019-10-11 12:00:00 +0000
summary: My journey of transitioning from a seasoned object-oriented developer to embracing functional programming principles.
---

**TL;DR:** My journey of transitioning from a seasoned object-oriented developer to embracing functional programming principles. I found no silver bullet; the process took time and effort. "Your mileage may vary".

## Programming Paradigms

The Computer Industry is not even a century old. Nonetheless, it already experienced several [Paradigm Shifts]({{ "/2019/07/07/paradigm-shifts.html" | relative_url }}), which can be liken to theory of evolution:

![Programming Evolution]({{ "/img/blog/ProgrammingEvolution.png" | relative_url }})

*Adapted from an [image obtained from Pixabay](https://pixabay.com/illustrations/evolution-human-evolution-2780651/){:target="_blank"}*

The above image can be interpreted in two ways. First, chronologically. Indeed, for the mainstream professionals among us, the shift from procedural to object oriented (OO) programming occurred in the 90's and functional programming (FP) is being introduced for the past decade or so (*I am disregarding academia, where functional paradigms have long history*). But we can also look at this diagram in terms of a "power continuum", which characterizes how powerful a given technology is. It is well known that a "few-liner" solution written in a functional language will require many more lines of code using OO or procedural programming techniques, not to mention assembly code.

## Baby Steps

More often than not, I grasp new concepts rather quickly, even the abstract ones. Back in the 90's, I made a transition from a procedural programmer to an object-oriented developer in a rather uneventful way. Granted, some ideas, such as "favor composition over inheritance" took a while to sink in, but for the most part learning the new concepts came naturally.

Then, about 10 years later, I started reading about FP. My first reaction: **What's the big deal?** Isn't it in going back to the old school of programing? After all, we've had functions in FORTRAN and other languages so popular in the 70s and 80s, didn't we? Not only I was naive in this thinking, but also very wrong. But it took me a while to realize that.

My first exposure to practical aspects of FP was [LINQ](https://en.wikipedia.org/wiki/Language_Integrated_Query){:target="_blank"}. Again, I didn't receive it favorably at first: **Why would I want to apply SQL-like syntax to in-memory collections?** I simply didn't find it beneficial. Actually, I find the LINQ query syntax counterintuitive even today; I prefer to use the method syntax instead. For example, I never favor `var highNumbers = from number in numbers where number > 100 select number;` over the `var highNumbers = numbers.Where(n => n > 100);`. I find the latter syntax more straightforward and intuitive.

As an aside, I think Microsoft made the adoption of LINQ more difficult by introducing the SQL-like terminology. Yes, it looks attractive when combined with the query syntax, but LINQ is no SQL and such syntax similarities are deceptive. For example, does `Select` accurately describe the "projection"-like characteristics of the method? I find `Map` to be more intuitive. Think of the well-known "map-reduce pattern". Using LINQ terminology and calling it "select-aggregate pattern" sounds strange, doesn't it?

For a few years, my frustration on **"what is that fuss over FP all about?"** grew. I kept trying and failing to find the answer.

## Then, it clicked

I always enjoyed exploring new technologies, so I continued reading about FP. I watched several presentations by industry experts. I also performed numerous hands-on experiments. But it all felt abstract and unreal.

One evening about 5 years ago, I watched this video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/aZCzG2I8Hds" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*[Programming with Purity](https://www.youtube.com/watch?v=aZCzG2I8Hds){:target="_blank"} talk by Joe Albahari*

Something clicked and I spent the entire hour and a half watching in amazement. This was one of those times when **the lightbulb suddenly goes off in your head**, perhaps the most intense experience of this sort I can remember.

Why this one and not dozens of other excellent presentations by world leading experts? Hard to say... it could simply be my state of mind at that moment. Maybe I had just reached a "tipping point" after exploring FP for some time. But undoubtedly, the content and delivery of [Programming with Purity](https://www.youtube.com/watch?v=aZCzG2I8Hds){:target="_blank"} had a lot to do with it: technology choice (C#/.NET), difficulty level, interesting examples, etc. Last, but not least, Joe's keen sense of humor combined with Australian accent kept my interest and undivided attention.

I referred to this video several times since, either to reinforce my understanding of functional concepts or just for pure enjoyment and motivation. If I could change anything about it, I would ask for the code discussed to be visible on the screen at all times. But overall, it's an excellent material that helped me in a profound way.

## Further Learning

There are tons of materials on FP available on the web. Once you grasp the general concepts, chances are you'll be looking for opportunities to learn more. Some say that FP is fun. I might say it is addictive. Definitely, it gives you lots of satisfaction to be able to apply "functional thinking" and find a simple solution to a complex challenge.

So, where should you go to satisfy your desire to learn more on FP? The best answer: "Google is your friend". New materials come every day, and every once in a while, you find a gem that will get you a step further in embracing that "functional thinking". It may take a while for the new terminology to sink in, so keep Googling those pure functions, immutability, referential transparency, higher order functions, algebraic data types, to name just a few.

Over time, it will become easier to quickly identify articles, videos and other materials that benefit you most. In learning new concepts, the most effective materials are those that catch your interest quickly. Here are two sample talks, that I found intuitive, even though they both discuss advanced topics.

[Functional Programming for the Object Oriented](https://vimeo.com/171317258){:target="_blank"} by Øystein Kolsrud. A very interesting talk intended to uncover the power of Haskell to C# developers. In case you didn't know, Haskell is a pure functional language, you can't get "any more functional" than Haskell. Thanks to Øystein's unique background (a former Haskell professional now working in C#), all the mind twisting complexities of Haskell become digestible or even palatable. Very impressive!

[Async Injection](https://www.youtube.com/watch?v=o9qL4HcDpIQ){:target="_blank"} by Mark Seemann
A remarkable set of C# code refactorings from a "traditional OO style" to a "functional style". A bit overwhelming at times, but in the end, you realize the benefits from applying that "functional thinking". What I found most amazing though is how this talk evolved over time. Mark presented it several times and each time I noticed refinements to make it easier to understand. In particular, his eye opening generalizations and references to abstract topics, such as the [SOLID](https://en.wikipedia.org/wiki/SOLID){:target="_blank"} principles, or analogies to lesser known concepts like the [XY Problem](https://en.wikipedia.org/wiki/XY_problem){:target="_blank"}.

There are many more great presentations out there. Also, there are others that I didn't find helpful. Everyone is different and the only way to find out what works for you is to start exploring.

## Anecdotes

Challenges faced by newcomers into the FP universe are a source of several anecdotes. Most have to do with the FP terminology, in particular one term: [Monad](https://en.wikipedia.org/wiki/Monad_(functional_programming)){:target="_blank"}. A monad is not terribly complex. But it is very abstract, which makes the concept hard to comprehend at first. The term has gotten bad reputation, so bad that many sources refer to it as "M-word" or avoid it altogether. Did you know that Microsoft named its scripting language "Monad" before it became what we call it today, i.e. [PowerShell](https://en.wikipedia.org/wiki/PowerShell){:target="_blank"}?

You may have heard of the "monadic curse" before. It states that once a person grasps the concept of the monad, he immediately loses the ability to explain it to others. I first ran into it in the [Monads and Gonads](https://www.youtube.com/watch?v=b0EF0VTs9Dc){:target="_blank"} presentation by Douglas Crockford and then in many other sources. Furthermore, every such person needs to write a tutorial to share the newly acquired knowledge with the world. A simple search yields hundreds or thousands monad tutorials using numerous, often humorous analogies. Unfortunately, the "monadic curse" makes them of little help to their intended audience.

There is another saying about monads: *"Every once in a while I get this exhilarating feeling **'I know what the monad is!'**. Five minutes later the feeling is gone..."* For the life of me, I don't remember where did I run across this saying. However, I can personally identify with it. It is natural for human brain to take time to fully comprehend difficult, abstract concepts (not just monads). The good news is that you can successfully apply functional principles without understanding monads. In fact, many of us have been doing so for years!

And no, I will not attempt to write a Monad tutorial. Or is it that I am not ready yet - still awaiting the time when I fully understand what a Monad is? <i class="far fa-smile"/>
