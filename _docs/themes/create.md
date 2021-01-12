---
title: "Creating a Theme"
name: create
section: themes
layout: docs
---

# Creating a Theme <!-- omit in toc -->

**Contents**
- [Introduction](#introduction)
- [Name](#name)
- [Color](#color)
  - [Hue](#hue)
  - [Custom Colors](#custom-colors)
  - [Rainbow](#rainbow)
- [Logo](#logo)
- [Cursor](#cursor)
- [Modern Engine Options](#modern-engine-options)
  - [Interface Colors](#interface-colors)
  - [Text Colors](#text-colors)
  - [Calendar Colors](#calendar-colors)
  - [Options](#options)
- [Icons](#icons)
  - [How Custom Icons Work](#how-custom-icons-work)
  - [Creating a Custom Icon Set](#creating-a-custom-icon-set)

## Introduction

Welcome to the Schoology Plus theme editor! You can create your own themes to style the Schoology interface to your liking. Custom themes have many features, all of which are outlined below. To get started, follow these simple steps:

**How to create your own theme:**

1. Open the theme editor (See [Accessing the Theme Editor](access))
2. Click the <span class="material-icons">add</span> "Create Theme" button. You are now in "edit mode".
3. Modify the different options in the "Properties" section. More information on each one is listed below.
4. When you're satisfied with the theme, click <span class="material-icons">save</span> "Save" or <span class="material-icons">check</span> "Save & Apply"

If you want to discard all changes to your theme, click the <span class="material-icons">settings_backup_restore</span> "Discard Changes" button.

![Video Tutorial](https://i.imgur.com/NJ9DgFF.gif)

## Name

Every theme is **required** to have a name at least one character in length. The name of your theme is used for display and identification purposes only. Make it short and simple while still capturing the main features of your theme.

## Color
There are three methods of setting the colors of the Schoology interface in your custom theme:
### Hue

Pick a color hue if you want an interface with a simple set of similar colors. A hue is a number from 1 to 360 from the HSL (Hue-Saturation-Lightness) method of defining colors. The saturation and lightness values are fixed for each of the interface elements.

**To set a color hue:**

1. Make sure the "Color Hue" button is selected under "Color"
2. Drag the slider to pick the color hue you like best

> The default value for Color Hue is 210, which is used by the default "Schoology Plus" theme.

### Custom Colors

Use the custom colors setting to get more control over the colors of individual interface elements. You can set four different colors with this setting.

**To set custom colors:**

1. Make sure the "Custom Colors" button is selected under "Color"
2. Use the color selectors to select the following four interface colors:
    - Primary Color
        - This is the main interface color, used for the navigation bar and as the primary color for buttons and dialog boxes
        - *This color should be dark enough that white text is visible on top of it*
    - Background Color
        - This color is the background of the settings dropdown button on the navigation bar, next to your name in the upper right
    - Hover Color
        - This color is the background of buttons and other interactive links when you hover over them, and the border color of the settings dropdown button on the navigation bar next to your name in the upper right
        - *This color should also be dark enough that white text is visible on top of it*
    - Border Color
        - This color is the border color for buttons

Use the theme preview on the right side of the theme editor to see how changing each color affects the interface. 

![Custom Colors Example](https://i.imgur.com/eXQljiq.png)

### Rainbow

> **NOTE:** Rainbow colors are an ***advanced feature*** and have many complex components.

Use rainbow colors to animate the colors of the Schoology interface. You can choose to animate any combination of the hue (base color), saturation (how intense the color is), and lightness (how bright the color is) of the interface color. For each of the components (hue, saturation, lightness) you can choose to either animate the component or keep it at a static value.

**To animate a color component:**

1. Check the "⬜ Animate" check box under the color component you wish to animate
2. Use the sliders and check boxes to configure the following options about your animation:
    - Animation Speed
        - This slider controls how fast your color component animates, with higher values being a faster animation
    - Range
        - This controls the range of the animation
        - For example, if you set the range of the Hue component from 0 to 55, the hue would cycle from red to yellow only instead of through the full color wheel
    - Alternate
        - If this is not checked, when the animation reaches the end of the range it will loop back to the beginning of the range and start again
        - If this is checked, the color animation will bounce back and forth through the range rather than looping back to the beginning
    - Offset
        - The offset allows each component to start at a different value
        - For example: let's say you have a theme where you are animating both saturation and lightness across the full range (0-100) at the same speed. If you leave both offsets at 0, the saturation and lightness at any given time will be equal since they are animating at the same speed. By changing the offset of one of the components (for example, saturation) to 50, the saturation will always be 50 higher than the lightness.

**[Click here for a video example of all the options](https://imgur.com/04sHjL7.gif)**

Notice:
- The rate of colors changing increases when the speed is changed from 50 to 100
- When the range is modified to start at 283, the colors only cycle from pink to red
- When alternate is checked, the color no longer resets to pink after reaching red, and instead animates in the other direction, back to pink

**To keep a color component at a static value:**

1. Ensure the "⬜ Animate" check box under the color component you wish to keep static is unchecked
2. Use the "Value" slider to set the static value of the color component

![Static Colors Example](https://i.imgur.com/Wdk2sIF.gif)

## Logo

The logo is the image that is displayed in the upper left corner of the interface.

> The default value for Logo is Schoology Logo, which is used in the default "Schoology Plus" theme

There are four possible options for the logo:

|Option|Preview|
|------|-------|
|Schoology Logo|![Schoology logo](https://i.imgur.com/y64kiCY.png)|
|New LAUSD Logo|![New LAUSD logo](https://imgur.com/NOuGRyZ.png)|
|Old LAUSD Logo|![Old LAUSD logo](https://imgur.com/Mm7FXhD.png)|
|Custom Image|See Below|

> **NOTE:** The "Schoology Logo" image has a transparent background, while both LAUSD logo images have a colored background as shown above.


You can use your own custom image for your theme's logo. The image should be **160 pixels by 36 pixels** or smaller. If the image is a different size it may cause display issues.

**Using a custom image for your theme's logo:**

1. Select the "Custom Image" option for logo
2. Drag-and-drop, paste, or enter a direct link to the image in the "Logo Image URL" textbox
3. Make sure your logo looks good in the preview pane!

*An example of a (really ugly) custom logo:*

![Custom Logo](https://i.imgur.com/Zc6uoYc.png)

## Cursor
You can set a custom image to replace your cursor when using your theme. The only restriction is that your image must be less than **128 pixels by 128 pixels**, otherwise your browser won't display it. In practice, you probably don't want any image larger than 32x32, and even that is still rather large for a mouse cursor.

> **NOTE:** The custom cursor only replaces the default cursor (the one that looks like an arrow). The "pointer" that appears when you hover over links and other types of cursors are unaffected by this setting.

**To use a custom cursor:**

1. Drag-and-drop, paste, or enter a direct link to an image in the "Cursor Image URL" textbox under "Cursor"
2. Make sure your cursor looks good in the preview pane!

*The "Toy" theme uses a custom cursor*
![Custom Cursor](https://i.imgur.com/8nRZR9q.gif)

## Modern Engine Options
The new Schoology Plus Modern Theme Engine allows extremely fine-grained customization of colors for the entire Schoology interface. Unlike the other older color options, the modern engine changes the entire interface instead of just links and the navigation bar. The Modern Engine is the backbone behind Schoology Plus's Modern Dark and Modern Light built-in themes.

Using the Modern Engine, you can create your own dark or light theme with any colors that you choose. The Schoology Plus Modern Theme Engine gives you more control over the appearance of Schoology, however it's slightly more complex to use. Additionally, the modern engine does not work everywhere and may cause certain content to be displayed incorrectly. Use at your own risk, but please [use our Discord server to report bugs if you find them](https://discord.schoologypl.us/)!

### Interface Colors
The Modern Engine makes use of 9 different colors to customize the entire Schoology interface. Each color is used in many different places, so these descriptions are meant to be a *general idea* of where they might be used rather than 100% accurate.

- Primary Color: The main background color of most pages
- Accent Color: The color of the main content container on each page
- Secondary Color: The color of some side containers and menus
- Input Color: The color of text boxes and other types of input fields
- Border Color: The color of borders around interface elements
- Highlight Color: For highlighting things
- Active Color: The color of selected menu items
- Grades Color: The color of letter grades and assignment scores
- Error Color: The color of error boxes and text

### Text Colors
There are 3 different text colors used in different situations. Once again, these descriptions are meant to be a *general idea* of where they might be used rather than 100% accurate.

- Primary Text Color: The color of almost all text in Schoology
- Muted Text Color: The color of greyed-out or less important text
- Contrast Text Color: The color of titles and navigation bar menus

### Calendar Colors
Calendar colors are not currently customizable with the theme editor. They will automatically switch between the light and dark theme colors depending on your Primary Color.

### Options
These options change how certain interface elements are spaced and styled.

- Border Radius: Controls how rounded the corners are on panels
- Border Size: The width of all borders in the interface
- Element Padding: The space between interface elements

## Icons

> **NOTE:** Icons are an ***advanced feature*** that makes use of Regular Expressions (RegEx). If you don't know how regular expressions work, this feature may not be easy to understand. To learn more about regular expressions, visit [Wikipedia](https://en.wikipedia.org/wiki/Regular_expression) or [this tutorial site](https://www.regular-expressions.info/quickstart.html).

Custom course icons are powerful feature of Schoology Plus themes, but are also the most complicated feature. Let's go over how they work.

### How Custom Icons Work
Custom course icons are defined as a regular expression and an associated icon image. If a course name matches a regular expression, the associated icon image will be used.

When choosing the icon to display for a given course, Schoology Plus takes the following steps:

1. Schoology Plus attempts to match a full course title (ignoring nicknames set by the user) to the icons defined in the current theme
    - The regular expressions are checked **in order** from top to bottom
    - If at any point the regular expression matches the course title, the icon associated with that regular expression is used as the course icon
    - For this reason, you should use as strict of a regular expression as possible
2. If no match was found in the currently selected theme, Schoology Plus will attempt to match the course title to the default icon set

### Creating a Custom Icon Set
**To create a single custom icon:**

1. Enter edit mode (see [Introduction](#Introduction) for a new theme or [Editing a Theme](edit) for existing themes)
2. Select the "THEME ICONS" tab in the preview pane
3. Click the <span class="material-icons">add</span> "Add New" button on the right side
4. Enter a regular expression into the box labeled "Class Name Pattern" in the "Class Name Regular Expression" column
5. Drag-and-drop, paste, or enter a direct link to an image into the "Icon URL" box
6. If done correctly, a preview of your icon should appear to the right of the URL in the "Icon" column

![Video Tutorial](https://i.imgur.com/eJxjtAB.gif)

**To create more icons:**

Repeat steps 1-6 above

**To re-order icons:**

Click the <span class="material-icons">arrow_upward</span> "Move Up" button to move a row upwards.

Click the <span class="material-icons">arrow_downward</span> "Move Down" button to move a row downwards.

> **REMEMBER:** Regular expressions are matched *in order* from top to bottom

![Video Tutorial](https://i.imgur.com/tgzTiKy.gif)

**To delete an icon:**

Click the <span class="material-icons">delete</span> "Delete" button to delete that row.

![Video Tutorial](https://i.imgur.com/gxgvly6.gif)

**To create a default icon:**

Create an icon with the regular expression `.` (a single period) and move it to the bottom of the list. This regular expression will match any class name, and since it's at the bottom of the list, all other icons will be tried before it. This will also prevent Schoology Plus from using the default icon set.
