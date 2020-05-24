---
title: "Editing Existing Assignments"
name: edit
section: grades
layout: docs
---

# Editing Existing Assignments

Changes to the grades of existing assignments can also be simulated. To start, ensure grade editing is enabled, and expand the category containing the assignment in question.

![An expanded category, with edit pencils visible](https://i.imgur.com/C83AS04.png)

*Editing assignment grades works regardless of whether the teacher has enabled letter grades for individual assignments (like in the example above, which shows `A 10 / 10`) or not (where only `10 / 10` would be shown). Once grades are edited, the individual assignment's letter grade will no longer be shown.*

*You can also edit the existing grades of assignments added via Schoology Plus, which are by default titled "Added Assignment (Clcik to Rename)," without having to delete and recreate them. Other than allowing you to rename them, they behave identically to all other assignments.*

Click the edit pencil next to the grade you want to edit. The grade will be highlighted, and you can type in a new grade to replace the old one.

![An assignment in the middle of being edited](https://i.imgur.com/Jw3irCI.png)

## Replacing Existing Grades

Multiple formats can be used to replace existing grade numerators in the gradebook.

* Most obviously, a number. Numbers entered (e.g. `9`, `16`, or `0.5`) directly correspond to the number of points earned on the assignment.
* A percentage. Percentages entered (e.g. `0%`, `100%`, `110%`, or `62.5%`) correspond to scoring that percentage on the assignment, and will become a numeric point value equal to the given percentage of the total points possible (as seen in the assignment's denominator). For instance, if you enter `75%` as the new numerator of a 20-point assignment, it is equivalent to entering 15 points.
* [A letter grade, as defined in course options](scales). Letter grades (e.g. `A`, `B`, or `C` in the default grading scale) will be treated equivalently to their minimum percentage. For instance, in the default grading scale, if you enter `B`, it will be treated as 80%; on a 20-point assignment, this would be equivalent to entering 16 points.

After any new numerator is entered and the edit saved, it will be converted to a number of points and displayed numerically.


Once you type in a replacement grade, **press enter** to save the grade edit.
Changes in the assignment, category, and course grades will be shown.

![A course gradebook after editing an assignment](https://i.imgur.com/whJbAwb.png)

## Assignments Without Grades

Assignments without grades can also have their grades edited. Just click the edit pencil icon, type in a [grade numerator](#Replacing-Existing-Grades) to replace the dash, and press enter as normal.

![Editing a nograde assignment](https://i.imgur.com/9FFWN7u.png)

> **Caveat:** Sometimes (most commonly in cases of a network error) the denominator for assignments without grades will not display (a dash will appear instead). Example:
> 
> ![A nograde assignment with no denominator](https://i.imgur.com/Ud07WpW.png)
> 
> In these cases, when you click the edit pencil, you will still be prompted to replace the dash, but you will need to enter a numerator *and* denominator, in [the same format as when adding new assignments](add).

## Missing, Incomplete, and Excused Assignments

![An example of an assignment with an "exception"](https://i.imgur.com/G8D5sIa.png)

These assignments (with states of missing, incomplete, or excused - known as "exceptions" in Schoology lingo) are indicated by a colored hexagon taking the place of a score (full green = excused, half-filled orange = incomplete, and empty orange = missing). Their presence should not break the calculation of grades throughout the rest of the gradebook. When they are dropped, undropped, have their grade edited, have a minimum grade calculated, or have any other Schoology Plus action performed on them, **they will lose their exceptional status.** The exception hexagon will be replaced with the equivalent numerical score: for missing assignments, that's 0 points; for other exception states, that's a no grade `—` (as if no grade was entered). These replacements are **mathematically equivalent** to the original exception state, and should not change the numerics of the gradebook. After the exception status is replaced with the equivalent point status, Schoology Plus operations should work as on all other assignments.
