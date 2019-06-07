---
layout: page
title: Lesson 2
permalink: /dataconveyer/tutorial/lesson2.html
---

# Data&nbsp;Conveyer Tutorial<br/>Lesson 2: Custom Transformation

This lesson assumes that you have completed [Lesson 1]({{ "/dataconveyer/tutorial/lesson1.html" | relative_url }}) of this [Tutorial]({{ "/dataconveyer/tutorial/" | relative_url }}). It is expected to take about 5 minutes.

This time, instead of simply converting data, we will transform the contents of the records. Notice that the input.csv file contains 200 data records preceded by a header row that defines these 4 fields: LNAME, FNAME, CITY and STATE. Like this: 

<div class="fixed-block"><pre>
LNAME,FNAME,CITY,STATE
Koppinger,Loren,Old Forge,PA
Springe,Larae,Houma,LA
Beech,Shawna,Thousand Oaks,CA
Inouye,Eric,Chicago,IL
Husser,Jess,New York,NY
...
</pre></div>

Let’s make the following changes to the *Program.cs* file.

**Step 2.1**  Add another *using* directive:

```csharp
using Mavidian.DataConveyer.Entities.KeyVal;
```

**Step 2.2**  Replace 2 lines that define the *OutputDataKind* and *OutputFileName* properties in the *OrchestratorConfig* object initializer near the top of the *Main* method with these 4 lines:

```csharp
AllowTransformToAlterFields = true,
RecordboundTransformer = TransformRecordToSayHello,
OutputDataKind = KindOfTextData.Raw,
OutputFileName = "output.txt"
```

>Note the *RecordboudTransformer* property we introduced here. It tells Data&nbsp;Conveyer to transform every record (one at a time) using a function named *TransformRecordToSayHello*. This function takes a record as a parameter and returns a (newly transformed) record.
>
>AllowTransformToAlterFields property is significant. It needs to be specified in order to allow field additions/removals during transformations. The default setting for this property (false) only allows updates to existing fields, in which case Data&nbsp;Conveyer can optimize processing for better performance.


**Step 2.3**  Add the *TransformRecordToSayHello* function to the bottom of the *Main* class:

```csharp
private static IRecord TransformRecordToSayHello(IRecord recordIn)
{
 var recOut = recordIn.GetEmptyClone();
 recOut.AddItem("MSG", $"{recordIn["FNAME"]} {recordIn["LNAME"]} says Hello from {recordIn["CITY"]}!");
 return recOut;
}
```

**Step 2.4**  Select *Debug → Start Debugging (F5)* to build and execute the project.

Upon completion, you will notice a new file named *output.txt* in the build output path.  Its contents will look like this:

<div class="fixed-block"><pre>
Loren Koppinger says Hello from Old Forge!
Larae Springe says Hello from Houma!
Shawna Beech says Hello from Thousand Oaks!
Eric Inouye says Hello from Chicago!
Jess Husser says Hello from New York!
...
</pre></div>

Data&nbsp;Conveyer supports alternative syntax for accessing data elements, which uses dynamic type.  Let’s give it a try...

**Step 2.5**  Replace the contents of the TransformRecordToSayHello function with this code:

```csharp
dynamic recOut = recordIn.GetEmptyClone();
dynamic recIn = recordIn;
recOut.MSG = $"{recIn.FNAME} {recIn.LNAME} says Howdy from {recIn.CITY}!";
return recOut;
```

**Step 2.6**  Select *Debug → Start Debugging (F5)* to build and execute the project.

Upon completion, examine the new contents of the *output.txt* file.

<br/>End of Lesson 2.

Proceed to [Lesson 3: Progress Reporting (~5 mins)]({{ "/dataconveyer/tutorial/lesson3.html" | relative_url }}).
