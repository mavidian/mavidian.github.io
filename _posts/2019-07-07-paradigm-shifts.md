---
layout: post
title: Paradigm Shifts
author: Wojtek Dziegielewski
date: 2019-07-07 12:00:00 +0000
summary: Things are not necessarily the same as we perceive them.
---

## Playing Cards Experiment

Back in the 90's, I was working as an IT manager for a health plan that was acquired by one of the large players in the business. As a part of integration efforts, the entire middle management was sent to a 2-day retreat for a series of seminars. The presentations revolved around then-modern [TQM](https://en.wikipedia.org/wiki/Total_quality_management){:target="_blank"} topics. I don't rememember much of them except for one: a short (maybe 20-minute long) documentary about how people perceive things. If my memory serves me well, it was narrated in the great [David Attenborough's style](https://www.youtube.com/watch?v=enu-qR0H_uk){:target="_blank"} and started with this playing cards experiment:

*Watch and memorize the cards shown. You will get a few chances. Click on image to start.*

<!-- A bit of trickiness here: iframe is overlaid with a picture to avoid spoiling the surprise
     Note that youtube does not allow playing w/o title "Red Spade Experiment" while dailymotion's
     thumbnail reveals the red spade card. Hence, we're combining the video from dailymotion with
     the thumbnail from youtube.-->

<div onclick="play();" id="vidwrap" style="height:270px;width:480px;background: black url('https://img.youtube.com/vi/yFYBY_YUH5I/hqdefault.jpg') no-repeat center;overflow:hidden;cursor:pointer;"></div>
<script type="text/javascript">
    function play(){
        document.getElementById('vidwrap').innerHTML = '<iframe frameborder="0" width="480" height="270" src="https://www.dailymotion.com/embed/video/x2pxpnc?ui-start-screen-info=0&ui-logo=0&queue-enable=0&autoplay=1&mute=0" allowfullscreen allow="autoplay"></iframe>';
    }
</script> 
<p/>

If you didn't see this experiment before, chances are you were caught by surprise. This is because our minds are used to seeing the card suits in given colors and spades are expected to be black, not red. In other words, one of our cards violated the paradigm that a playing card suit can only be a spade, a heart, a diamond or a club.

## What is a Paradigm?

My understanding of psychology is at most superficial. Hence, my definition is very simple: A [paradigm](https://www.vocabulary.com/dictionary/paradigm){:target="_blank"} is the way we perceive things. Some examples:

* **Traffic light colors**. <span style="color:green">**Green**</span> means Go, <span style="color:red">**Red**</span> means Stop. This paradigm is ([almost](https://www.rd.com/culture/heres-japan-blue-traffic-lights/){:target="_blank"}) universal around the world.

* **Traffic patterns**. In most countries, people drive on the right. So, before crossing the street you look to your left first. Be careful when visiting England though, it is easy to step onto the roadway and cause a car (approaching from the "wrong" side) screech to a halt.

* **Seing things**. The image reflected on the eye retina is upside down. So, why don't we see thing that way? Well... perhaps we do and it is just a matter of adaptation. There are [experiments](https://www.theguardian.com/education/2012/nov/12/improbable-research-seeing-upside-down){:target="_blank"}  that show our vision can adapt to seing things the other way around.

## Power of Paradigms and Paradigm Shifts

 The documentary I mentioned at the beginning continued with several examples of how people perceive things and how powerful the consequences of such perception might be. In other words, it showed how paradigms shape up our reality. These two examples demonstrate profound changes that occurred in the second half of the last century:

* **Automotive Industry**. In the 60's, cars driven in America were typically big, powerful and most notably manufactured in the United States. Japanese cars, despite their comparable quality, were considered unreliable, unatractive and cheap. The oil crisis of the 70's drew attention to the smaller Japanese vehicles, which were quickly proven to be of superior quality to the small sedans manufactured in the US.

* **Watch Industry**. We all know that Switzerland is historically the #1 watch manufacturing nation in the world. Yet, in the 70's, the Swiss watch industry was in a major decline. The reason: electronic movement. Apparently, it was first introduced in Switzerland, but caught no interest of the manufacturers. They simply did not expect demand for watches without the traditional mechanical movement.

Both cases are examples of paradigm shifts. The good news is that US auto-makers as well as Swiss watch-makers recovered after the years of decline. However, not without huge effort and cost to catch-up with competitors and re-build reputation lost.

> When paradigms shift, old values no longer apply.

The above statement is very important. When people started buying smaller Japanese cars, US automakers needed to prove again that their cars are reliable and competitive. Similarly,  Swiss watchmakers had to fight back to establish themselves in the new reality.

## Paradigms in Information Technology

Computer Industry is only a few decades old, but has already undergone several major paradigm shifts. The examples are abundant:

* Mainframes <i class="fas fa-arrow-right"/> Personal Computers <i class="fas fa-arrow-right"/> Mobile Devices
* Centralized Computing <i class="fas fa-arrow-right"/> Client-Server Computing <i class="fas fa-arrow-right"/> Cloud Computing
* Hierarchical Databases <i class="fas fa-arrow-right"/> Relational Databases <i class="fas fa-arrow-right"/> Big Data
* Procedural Programming <i class="fas fa-arrow-right"/> Object-Oriented Programming <i class="fas fa-arrow-right"/> Functional Programming
* Proprietary Software <i class="fas fa-arrow-right"/> Open-Source Software

But perhaps the most interesting stories are about failures when dominating companies were unable to recognize and properly react to paradigm shifts. Examples are again abundant, let me just mention two:

* **IBM's failure with Personal Computers**. In the early 80's IBM created a standard for personal computers, so-called IBM compatible PCs. Yet, when it came to the operating system, they decided to license it from a small company called Microsoft. As a result, Microsoft benefited from millions of PCs built around the world and became the leader in the newly formed computer industry. IBM failed subseqeunt effors to enter the PC software market, such as with OS/2, not based on merits, but because by that time the PCs computing ecosystem was already centered on Microsoft.

* **Microsoft's failure with Windows Phone**. Ten years ago, Microsoft was in a perfect position to dominate the smartphone market. I am not sure why Microsoft failed with the mobile platform. Just like the IBM software for the PC platform, I don't think the Windows Phone was technologically inferior to Android or iPhone platforms. The closest I can think of may be related to greediness or arrogance after decades of Windows dominance in software industry.

## Conclusion

These last two examples show how big industry leaders can loose market dominance when paradigms shift. Remember, at those times, old values no longer matter. Just like IBM couldn't leverage its mainframe position on the PC platform, Microsoft's dominance in the PC market was of no help on the mobile platform.
