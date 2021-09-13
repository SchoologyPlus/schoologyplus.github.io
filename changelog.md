---
title: Changelog
---
# Schoology Plus Changelog

## Version 7.3.1 - September 12, 2021

### Added
- You can now choose to either temporarily or permanently hide the dark theme warning message when taking assessments

### Changed
- Reformated the contributors list
  - Additionally included a large number of new contributors that have helped out with tasks such as testing features, reporting bugs, or moderating our Discord server
  - Thank you to everyone who has contributed to Schoology Plus!
  - Learn more about how to contribute [here](https://github.com/aopell/SchoologyPlus/blob/develop/CONTRIBUTING.md)
- Grades page sorting of courses by period now matches "P1", "P2", etc.
  - In the future, we will likely remove this setting and attempt to sort classes in the same order as specified in the course dropdown

### Fixed
- Added an error message when saving a theme fails due to running out of storage space
- Fixed an issue with navigation bar hover colors in modern themes
- When creating a theme from a preset, you are no longer asked if you want to rename your theme when attempting to save
- The "Enable Schoology Plus on this domain" context menu item no longer allows toggling on lms.lausd.net
- Attempted a fix for another instance where extension features randomly disable
  - If you continue to experience this, please reach out in our [Discord server](https://discord.schoologypl.us/) with a screenshot of your browser console (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd>)

## Version 7.3 - September 8, 2021

### Added
<img src="https://imgur.com/0Q5rgDp.png" width="200">

- You can now create themes based on one of four presets
  - The four presets are: Modern Dark, Modern Light, Modern Rainbow, Classic
- Added a new setting "Use Built-In Icon Set"
  - Allows you to pick whether or not to use Schoology Plus's icon set
  - Since these icons were created for Los Angeles Unified School District, they may not work well for schools in other districts
  - Enabled by default for LAUSD schools, disabled by default for any other schools
  - You can preview the built-in icon set by clicking the link in Schoology Plus settings

### Changed
- Added and modified some default course icons
- Course letter grade now appears on the grades page even if total course grade box is hidden by your teacher
- Opening the notifications dropdown now clears the number of notifications on the browser extension toolbar icon
- Minor modern theme tweaks

### Fixed
- Dark theme warning is no longer massive when viewing the results of an assessment attempt
- Courses in common now correctly displays on empty user profiles
- Checkmarks now work correctly for calendar events
- Attempted fix on issue that causes various extension features (quick access, checkmarks, etc.) to be randomly disabled

## Version 7.2.4 - March 16, 2021

### Added
- Course icons that are SVGs are now set as the favicon on course pages
  - All built-in icons for the LAUSD domain will work with this feature

### Fixed
- Issues where certain features would be missing for some users

## Version 7.2.2 - March 16, 2021

### Fixed
- Another attempt to fix the issue where Quick Access and checkmarks would disappear for some people

## Version 7.2.1 - March 13, 2021

### Fixed
- Fixed an issue where Quick Access would not show up in some cases
  - If this is still occurring for you after this update, please contact us in [our Discord server](https://discord.schoologypl.us)
- Fixed an issue where what-if grades would calculate incorrect values on weighted courses with multiple grading periods
- Fixed an issue where unlinked assignments would not match the theme colors on the grades page

## Version 7.2 - March 2, 2021
### Added
- Quick Links
  - Add a shortcut link to Quick Access that the user specifies in Course Options
  - Great for Zoom meeting links or course websites

![Quick Links set up instructions](https://i.imgur.com/xCqivIx.png)

### Changed
- What-If Grades now works for classes with multiple grading periods (semesters, quarters, etc.)
  - Previously calculations would be incorrect or what-if grades would fail to start entirely
- Added [@EricPedley](https://github.com/EricPedley) to the contributors page. Thanks for your contributions!
- File and folder descriptions now follow the "Override Styled Text" setting

### Fixed
- The toggle theme button no longer expands to the full width of the page on small window sizes
- Custom course icons should no longer blink when parts of the page change
- Fixed some minor modern theme issues
- Schoology Plus should no longer load on support.schoology.com and on other Schoology website domains

## Version 7.1 - January 16, 2021

### Changed
- Course Nicknames are Under Maintenance
  - Due to performance concerns, course nicknames may not show up in every place you're used to seeing them. We're working on a fix so hopefully this can be resolved as soon as possible. Thanks for your patience.
  - Nicknames will continue to show up in some places, but not in any content that appears after the initial page load
- Checkmarks can now be used with *anything* that appears in the Upcoming or Overdue box
  - This includes personal and class calendar events
- Theme Toggle button now sets theme to "Schoology Plus" temporarily rather than just disabling modern engine
  - This fixes text readability issues for certain custom themes
- Various modern theme engine improvements
  - Photo albums should no longer have white borders
  - Page shouldn't be white at the bottom anymore when loading
  - Submitted assignment preview X button has been restyled
  - "You must submit a comment before seeing replies" message now uses highlight color for the background

### Fixed
- Checkmarks sometimes not appearing at all
- Checkmarks not appearing when multiple assignments shared the same name and due date
- What-If grades not working on archived courses on third party domains
- Firefox "take a screenshot" feature not working with modern themes

## Version 7.0 - January 11, 2021

> The Schoology Plus Fall 2020 Survey closes on 1/31/2021 at midnight PST! **Don't forget to fill it out for your chance to win one of twenty Amazon gift cards worth $150! [Click here to take the survey now!](http://survey.schoologypl.us?source=ChangelogReminderNotice)**

### Added
- Dark Theme has finally been released!
  - After [over 6 months of work](https://github.com/aopell/SchoologyPlus/commit/e0af7a23362d1d4e82df8313c7260d347cffc6f4), the new modern theme engine has been released!
  - New light theme as well!
    - We (the developers) think it looks really good! Not like those blinding white themes other apps use...
  - You can now pick from Schoology Plus Modern Dark or Schoology Plus Modern Light in the theme editor theme list
  - Please report bugs to the `#darktheme-bugs` channel in [our Discord server](https://discord.schoologypl.us) if you find any
- When you first update to v7.0 (or install for the first time), you'll get a popup dialog box asking you to choose a new theme
- Modern Engine Options in the Theme Editor
  - You can create your own dark or light theme using the theme editor!
  - If you don't like our new built-in themes, try your hand at making your own.
  - There are a lot more customization options now allowing control over nearly every color used in the interface.
  - The mock interface (in-editor preview) has been expanded to include a new screen
- New Toggle Theme button on the navigation bar when using the modern themes
  - Since the modern themes change the interface significantly, there might be times where they cause display issues.
  - Use the Toggle Theme button to temporarily disable your theme if this happens
- New setting "Override Styled Text"
  - Override styled text in homefeed posts and discussion responses when using modern themes.
  - WARNING: This guarantees text is readable on dark theme, but removes colors and other styling that may be important. You can always use the Toggle Theme button on the navigation bar to temporarily disble your theme.
- Initial support for domains other than `*.schoology.com` or `lms.lausd.net`
  - Right click the Schoology Plus icon in the browser toolbar and select "Enable Schoology Plus on this domain"
  - Please treat this as a beta test for now, this is not considered a supported feature
  - That being said, please report bugs to [our Discord server](https://discord.schoologypl.us) if you find any
- Added [@KTibow](https://github.com/KTibow) to the contributors dialog. Thanks for your help!

### Changed
- Minor theme editor UI tweaks
  - Added labels to certain buttons
  - Replaced new theme FAB with two separate "Create Theme" and "Import Theme" buttons
  - Icons and JSON tabs no longer follow the scroll position
  - Added a new help button in the editor screen

### Removed
- Unnecessary `webRequest` and `webRequestBlocking` permissions

### Fixed
- A large number of features not working on Firefox
  - Due to a change in browser behavior between Firefox 78 and 79, a lot of Schoology Plus features stopped working.
  - We had a very hard time figuring out what was going wrong for multiple months
  - We finally found the solution, and the extension should work completely in Firefox again!
- Course options button not showing up if certain course information wasn't shown on the course page

## Version 6.7.1 - December 6, 2020

### Fixed
- Checkmarks and quick access now appear if homepage is set to Course Dashboard in Schoology settings

## Version 6.7 - December 2, 2020

> **Take the Schoology Plus Fall 2020 Survey for your chance to win one of twenty Amazon gift cards with a total value of $150!**
>
> [**Click here to take it now!**](http://survey.schoologypl.us?source=ChangelogNotice)

### Added
- You can now manually mark assignments as complete using the new checkboxes in the Upcoming and Overdue sections of the homepage
  - This is an improvement of our previous checkmarks, which tried to automatically detect submitted assignments and mark them as complete
  - Submissions can't be detected for all assignments, so we're still automatically marking certain assignments as submitted, but others you will need to check manually
  - If you previously changed the "Show Submitted Upcoming Assignments" setting, it has been reset to enable this new feature. You can always go back into Schoology Plus Settings to modify the setting

### Changed
- Updated the setting "Show Submitted Upcoming Assignments" to describe the new manual checkmarks described above
- Updated the names of certain contributors and added GitHub usernames for all contributors
- Dark theme now automatically changes the color of text posts to be readable, this will be configurable soon

### Removed
- The popup stating Schoology Plus has updated the domain it runs on has been removed

### Fixed
- Google Docs assignments no longer show checkmarks when not submitted
- Schoology Plus no longer runs on the account registration page on the Schoology website
- Numerous dark theme updates. Dark theme full release coming very soon!

## Version 6.6.4 - October 19, 2020
> This release fixes the check mark bug from version `6.6`.
>
> ***NOTE:*** Version `6.6.1` **DOES NOT** fix that bug, so please wait until you receive version `6.6.4`.

### Fixed
- Assignment check marks not working correctly
- Timers not showing during assessments in dark theme

## Version 6.6 - October 19, 2020

### Added
- **Upcoming assignments now show a checkmark when they've been submitted**
  - This was a highly requested feature
  - By default, green check marks ✔ are shown on all assignments you've submitted.
  - There are also options for putting a ~~strikethrough~~ through the assignment title or hiding the assignments completely.
  - Of course you can also turn this feature off in settings.
- New people to the contributors panel
  - Thank you [@xd-arsenic](https://github.com/xd-arsenic) for your development help!
  - You can help contribute to Schoology Plus as well! [Visit us on GitHub](https://github.com/aopell/SchoologyPlus) and [join our Discord](https://discord.schoologypl.us/)!

### Changed
- Updated a few course icons (LAUSD only)
- Various dark theme improvements
  - The new Schoology assessments are now dark (thanks [@xd-arsenic](https://github.com/xd-arsenic))
  - Various other fixes and interface improvements (thanks [@Roguim](https://github.com/Roguim))

### Fixed
- Graded assignments no longer extend past the bottom of the "and N more assignments" box on the notifications page

## Version 6.5 - October 11, 2020

### Added
- You can now click on a grade's numeric value to change it when using what-if grades (thanks [@reteps](https://github.com/reteps))
- Open in new tab button for certain document materials (like Google Docs) on the preview page (thanks [@reteps](https://github.com/reteps))
- New people to the contributors panel
  - Thank you [Peter Stenger (@reteps)](https://github.com/reteps) and [@Roguim](https://github.com/Roguim) for your development help!
  - You can help contribute to Schoology Plus as well! [Visit us on GitHub](https://github.com/aopell/SchoologyPlus) and [join our Discord](https://discord.schoologypl.us/)!
  - We're also participating in in [Digital Ocean's Hacktoberfest!](https://hacktoberfest.digitalocean.com/)

### Changed
- Updated a few course icons (LAUSD only)
  - Homeroom, PE
  - Also fixed a couple classes whose icons were showing incorrectly
- Updated DOMPurify library to version 2.1.1
- Courses in common now show directly on the profile page (thanks [@reteps](https://github.com/reteps))

### Fixed
- Various dark theme changes, additions, and fixes including new calendar colors (thanks [@Roguim](https://github.com/Roguim))
- Fixed Schoology Plus changing the default domain to certain apps and Schoology error pages

## Version 6.4.1 - September 5, 2020

### Added
- Support for period ordering for schools not in LAUSD
  - This will only work if your school's courses each contain their period numbers in the form of "PERIOD #" or "PER #"

### Changed
- Numerous additions to dark theme

### Fixed
- Beta dialog box not opening on Mac
- Problem with custom rainbow themes not working

## Version 6.4 - August 17, 2020

> This version of Schoology Plus adds a beta test for the new dark theme! If you're interested in testing it out, please [join our Discord server!](https://discord.schoologypl.us/)

### Added
- New dark theme beta test, see above
- Option to reposition the Quick Access panel
  - See the "Quick Access" setting in Schoology Plus settings

### Changed
- Quick Access also appears on the Course Dashboard section of the homepage

### Fixed
- Grade denominators not loading in certain scenarios
- Certain instances where tooltips were not loading on the materials page
- Schoology Plus trying to set the default domain to a Schoology app

## Version 6.3.1 - June 6, 2020

### Fixed
- Added a wider set of domains to ignore as a default domain for Schoology Plus

## Version 6.3 - June 4, 2020

### Added
- Quick Access panel on the home page
  - Has one-click access to all of your courses, as well as your grade report and other common pages
  - This can be disabled in Schoology Plus settings
- Three-dot (kebab) menus have been added to the grades page and courses page
  - These give access to a context menu allowing faster access to grades or other course pages
- Schoology Plus settings can now be opened by appending `#splus-settings` to the end of any Schoology URL

### Fixed
- Fixed the color of tabs on the courses page and a few other buttons

## Version 6.2.2 - May 28, 2020

### Changed
- Various drop-down menus now more closely follow your theme colors

### Fixed
- Schoology Plus no longer attempts to set Schoology apps as the default domain
- "Schoology Plus Settings" title having the wrong color text in some circumstances
- Certain buttons using theme colors for the text rather than white

## Version 6.2.1 - May 26, 2020

### Important Note

> With the introduction of our new anonymous usage statistics, we were inadvertently collecting more information than we intended. This mostly consisted of collecting URLs that included Schoology ID numbers. 
>
> This update fixes that and all collected potentially sensitive data has been deleted. The privacy policy has also been updated to clarify the scope of data we collect.

## Version 6.2 - May 24, 2020

> Schoology Plus has a new website at <a href="https://schoologypl.us" target="_blank">https://schoologypl.us</a>! Check it out!

### Added
- Collection of anonymous usage statistics (except in Firefox)
  - This can be disabled in Schoology Plus settings

### Changed
- Moved all help page links to our new website
- Moved changelog to our new website

### Fixed
- Issues with tooltips for word documents and other non-PDF file types on the materials page

## Version 6.1.1 - March 25, 2020

### Changed
- Clicking the "reorder courses" button in the courses dropdown now takes you to the courses page with the reorder window open
- Modified how PDF previews are generated on the materials page
- Updated libraries to match official versions

## Version 6.1 - March 23, 2020
> This version of Schoology Plus will not be accessible from the Firefox addon store. This should hopefully be resolved by the next version.

### Added
- Schoology Plus now has a Privacy Policy accessible [here](https://aopell.me/SchoologyPlus/privacy-policy)
  - A link to the privacy policy can be found in Schoology Plus settings

### Changed
- HTML in notifications is now sanitized to prevent XSS attacks
- The [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) for the extension no longer allows `unsafe-eval`

### Fixed
- Issue causing the text for notifications to be white on a white background
- Issue causing "Restore Defaults" button in Schoology Plus settings and the "X" buttons in course options to be theme-colored instead of red
- Issue causing buttons in the notifications and messages drop-downs to be theme-colored instead of white
- An issue where internal Schoology domains could cause Schoology Plus to change its default domain

## Version 6.0 - March 10, 2020

### Added
- Support for domains other than `lms.lausd.net`
  - Supports all domains following the `???.schoology.com` pattern
  - Not all features are supported on other domains (though most of them are!)
  - This is a major change that could definitely result in new bugs, though we've tested and hope there aren't any!
- A way to view the default course icon set from the theme editor
- Added and updated many default course icons
- You can now report that a default course icon is incorrect in course settings
- New "default" option for a theme's logo
  - Only available on domains other than `lms.lausd.net`
  - Prevents modifying the logo image in the navbar, leaving the school's default logo intact
- Schoology Plus now automatically calculates and displays your course grade (and individual category grades) when a teacher hides them by default

### Changed
- The selected theme's "hover" color is now additionally used to color links throughout Schoology
- Updated copyright notices to reflect the current year and represent all developers

### Removed
- The "(no grading period)" section of each class is no longer hidden by Schoology Plus
  - This had the potential to break things on other domains and it's possible some teachers within LAUSD use this feature too

### Fixed
- Multiple issues with what-if grades
  - Fixed an issue where teachers making assignment details inaccessible from students prevented what-if grades from working
  - Fixed an issue where teachers making course or category grades hidden prevented what-if grades from working
  - Fixed an issue where editing an assignment when there are no graded assignments yet caused what-if grades to fail
  - Fixed an issue where assignments that are actually "external tools" marked as missing caused what-if grades to fail


## Version 5.8.1 - March 4, 2020

### Changed
- Removed `activeTab` permission

### Fixed
- What-if grades failing due to issues relating to new versions of the Chrome browser
  - Added new permission `webRequests` to alleviate this issue
- What-if grades failing due to teacher's locking access to assignment details
  - Only affected categories will be locked if there is a missing assignment that cannot be accessed; other categories will still work

More fixes for obscure issues with what-if grades will come in future updates

## Version 5.7 - December 11, 2019

### Added
- Assignments can now be added to empty categories through what-if grades
  - This was a highly requested feature, sorry it took so long to get added!
- Setting to show/hide the "S" button in the bottom right corner that shows the Schoology Help Center
  - The default for this setting is to **hide** the button, so if you want it to show again you must change the setting in Schoology Plus Settings
- New "Schooolgy+" logo for default themes
- "Change Grade Boundaries" button has been added to "Calculate Minimum Grade For..." menu in what-if grades

### Changed
- Some settings that previously required a page reload to update now update instantly
- Hover text on letter grades calculated by Schoology Plus has been updated for clarity

### Fixed
- The "applications" menu on the top toolbar now properly uses theme colors
- Potentially fixed some issues causing what-if grades to fail to load
- Issue causing the bug report form to not properly include the full error message


## Version 5.6.1 - November 21, 2019

### Fixed
- Empty error messages in new what-if grades bug reporting options

## Version 5.6 - November 21, 2019

### Added
- New bug reporting options when what-if grades fails to load due to errors

## Version 5.5 - September 15, 2019

### Added
- More course icons that were requested by users
- Link to new Schoology Plus Survey 2019: **[take it here!](https://forms.gle/zAxh8gR3HRj3AuKZ8)**

### Fixed
- Some issues preventing what-if grades from functioning properly

## Version 5.4 - May 12, 2019

> **Enter the Schoology Plus Theme Creation Contest! <a target="_blank" href="https://aopell.me/SchoologyPlus/theme-contest">Click here for more details.</a>**

### Added
- Ability to rename added assignments
- More course icons from user requests
- A preview of rainbow hue animations in the theme editor
- Import theme button to the theme editor to make importing themes easier

### Changed
- "Grade Modification" is now called "What-If Grades." The name has changed, but the functionality remains the same.
- You can now drag and drop or paste images into the theme editor where only an image link was previously allowed
- Added a rainbow gradient to the hue value slider in the rainbow section of the theme editor
- Updated the look of pop-up boxes in the theme editor
- Missing course icons pop-up shows once per semester

### Fixed
- Themes with animated saturation causing crashes
- Grades showing as `NaN` when dropping missing or excused assignments in some cases

## Version 5.3.2 - April 8, 2019

### Added
- Course icons for many more course titles
- Course icons to "My Courses" page
- More detail to errors that cause grade editing to be disabled
  - We've been receiving multiple reports recently of grade editing being disabled due to various weird behaviors in gradebooks. We're trying our best to fix these problems but it is very difficult without having access to the broken gradebooks. If you have issues with grade editing, please send us as much information as you can in our Discord server

## Version 5.3.1 - March 27, 2019

### Fixed
- Grade editing being disabled in some situations

## Version 5.3 - March 25, 2019

### Added
- Setting allowing you to hide missing and/or overdue assignments from the home page sidebar
- Setting allowing you to toggle the new "[Weighted]" weighted gradebook indicator (added in version 5.2)
- Methods of requesting course icons for courses that don't have them
  - A popup will ask you if you want to request that Schoology Plus add built-in course icons for all of your classes that don't currently have an icon
  - You can also request icons for courses individually by visiting the Course Settings page for that course
- New contributing guidelines (which can be found [here](https://github.com/aopell/SchoologyPlus/blob/develop/CONTRIBUTING.md) and by clicking "Contributors" in Schoology Plus Settings) so you can help contribute to Schoology Plus!

### Fixed
- Inconsistent button styles located throughout the interface
- Wrong placement of three-dot (kebab) menu next to assignments with short comments
- Errors generated when making calls to the Schoology API

## Version 5.2.1 - March 19, 2019

### Changed

- Restore "Past Courses" link and related settings
  - LAUSD, and subsequently Schoology Plus, had removed Past Courses, but LAUSD has since restored them

## Version 5.2 - March 15, 2019

### Added

- Custom course icons now appear in the Reorder Courses UI
- Theme editor supports hue ranges that cross 0°
- Point buffer and points-until-grade indicators in the gradebook
  - Be aware these values are approximate. More precise estimates can be obtained through the grade edit simulator.
- Warning when submitting a quiz with unanswered questions

### Changed

- Schoology popups can no longer be scrolled away from
- Performance improvements for Courses in Common dialogs
- Weighted gradebooks now have a "Weighted" indicator
  - In the future this may link to an FAQ about weighted gradebooks
  - It should be clearer when gradebooks are weighted now, which is important because there is a substantial difference in how weighted and unweighted grades are calculated
- Removed "Past Courses" link and related settings, because LAUSD removed access to past courses

### Fixed

- Submitting assessments in Firefox
- Theming issues on assessment submission confirmation popup
- Theme editor documentation links not opening in new tabs
- Grade editing on the primary grades page now works even when past courses aren't visible

## Version 5.1 - February 14, 2019

### Added

- Grade simulation support for excused, missing, and incomplete assignments
- Reorder Courses button to courses dropdown
- Rainbow support to custom themes!
  - Hue, saturation, and lightness can be customized and animated
  - Rainbow can be combined with other theme features like course icons, banner logos, and custom cursors
  - Documentation of this feature is on the wiki
- Discord server for support and feedback
  - Linked from Schoology Plus Settings

### Changed

- When the window size is small, "Grades" now remains in the titlebar
  - "Resources" is moved to the "More" menu
- Various documentation updates to reflect the new Schoology interface
- Footer text in modals now shows "Schoology Plus" instead of less useful copyright information
- Themes use a new JSON format internally
  - Themes using the old format will be automatically converted upon import

### Fixed

- Various theme editor glitches fixed
- Long course names will no longer mess up spacing in courses dropdown
- Fixed duplicated point value inserts in grade posted notifications
- Point value inserts when assignments are excused, marked missing, or marked incomplete no longer show "null"

## Version 5.0 - December 19, 2018

### Added

- Support for the updated Schoology interface
- Two new default themes
  - "LAUSD Dark Blue": Uses the colors of the updated LAUSD Schoology theme
  - "Schoology Default": The default color scheme of Schoology.com
- Ability to use the new LAUSD logo in custom themes
- Letter grades and percentages can now be entered as a score when modifying grades

### Changed

- Courses drop down displays 6 tiles per row instead of 4 (change from default Schoology behavior)
- Updated the mock interface in the Theme Editor to replicate the new Schoology interface
- Moved "Enhanced by Schoology Plus" to the new footer
- Various long standing Schoology Plus features have been updated to compensate for changes brought about by the new interface
  - Therefore, some features may look slightly different or appear in different locations

### Removed

- Support for the deprecated "Custom Color" theme
  - If you were using a custom hue with the default theme prior to this update, a new theme with your custom color will automatically be created and set as your current theme

## Version 4.4 - December 11, 2018

> This release precedes a major interface change to LAUSD's Schoology. Schoology Plus will support the new interface, but not immediately upon its launch. Refer to the announcement within Schoology Plus [or this link](https://aopell.me/SchoologyPlus/new-interface-notice) for more information.

### Added
> Some of these features were inadvertently released as part of the 4.3.2 patch, but they should now be more polished and with fewer bugs.

- Stay logged in setting
  - Under Schoology Plus settings, this option allows you to remain signed in to Schoology across browser restarts
  - No more annoying logging in every time you repoen your browser
  - Disabled by default
- Courses in Common button
  - On every user profile, there's now a button to see what courses you have in common with that user
- Grades show in "grade posted" notifications
- Documentation for grade edit simulation
  - Available on the Schoology Plus wiki
  - Linked via a button near the enable grade editing checkbox

### Changed
- Theme icons can now be overridden with the icon set in Schoology on a per-course basis
- Debug log messages now have a consistent format to indicate which logs are from Schoology Plus and which aren't

### Fixed
- Handling of errors and extenuating circumstances on grades pages is vastly improved

## Version 4.3.2 - December 7, 2018
### Added
- Notices regarding Schoology Plus and LAUSD's upcoming Schoology updates
  - For more information, [click here](https://aopell.me/SchoologyPlus/notice)

## Version 4.3.1 - December 4, 2018
### Fixed
- Calculate Minimum Grade now once again will lower existing assignment grades to positive, but less than original, values when calculating minimum grades
  - Previously it would refuse to report anything lower than what you currently had on an assignment as a minimum score to get a letter grade
  - This bug was introduced in v4.3

## Version 4.3 - December 2, 2018
### Added
- Kebab (3-dot) menu on assignments in grade-editing mode
  - Easier access to the features from the right-click menu
  - Calculate the minimum grade needed to maintain a course average, and simulate dropping/deleting assignments

### Changed
- Clarified status of Schoology Plus as an unofficial addon, not an official Schoology product
- Added assignments can now be deleted, instead of dropped
- Course options dialogs now show which course they apply to

### Fixed
- Schoology Plus settings button spacing is now even with the other titlebar elements
- Calculating minimum grades now avoids ridiculous decimals or negative scores
- Pages requiring many API calls (e.g. long materials pages, or grade pages with many unentered assignments) should load more reliably

## Version 4.2 - November 21, 2018

### Added
- Fully-featured theme editor!
  - A more user-friendly way to customize your Schoology appearance
  - Access the theme editor through Schoology Plus settings (it replaces the old theme selection dialog)
  - Allows you to create, import, edit, export, delete, preview, and apply themes
  - Live preview of themes!
- Points possible values are shown for assignments that do not yet have a grade
  - By default, Schoology hides this information from you and shows simply an em dash (—) for assignments without a grade
- "See Archived" button in courses dropdown to quickly access archived courses
  - There is also a new setting that allows you to disable this feature

### Changed
- The Firefox extension download page now ensures you are using Firefox before downloading
- Renamed the "Custom Color" theme to "Schoology Plus"
- Renamed "Course Aliases" to "Nicknames"
- Moved document tooltips on materials pages from the file size to the file name
- New release nags
  - The "!!" on the Schoology Plus settings button and the flashing "New Update" text have been removed
  - Replaced with less intrusive on-page notification
- Theme JSON format updated
  - Themes will be automatically converted
  - Importing the old format still works
- Contributors page now more thoroughly lists icon authors
- More prominently featured Glen Husman, the co-lead developer of this extension

### Deprecated
- The "Custom Color" theme and the "Color Hue" setting have been deprecated
  - If you are currently using the Custom Color theme with a modified hue setting, your interface will remain unchanged
  - However, you are no longer able to modify the color hue setting
  - If you want to change the color, create a new theme and change the color hue

### Fixed
- Schoology Plus broadcasts now show up on https://lms.lausd.net/home
  - Previously, broadcasts would only show up on https://lms.lausd.net/home/recent-activity
- Better error handling all around
- Desktop notifications now work in Firefox

## Version 4.1.1 - September 16, 2018

### Fixes
- Address Firefox addon publishing complaints regarding old library versions

## Version 4.1 - September 16, 2018

### Changes
- "Loading..." tooltips now immediately appear for documents and assignments
- Material tooltips now generate in materials under folders (and other cases where not all materials show up at page load)
- Changelog, update, and notification infrastructural URLs updated to use GitHub pages (maintainable by all project contributors)

### Fixes
- Custom course aliases apply even with an extra space in the full name, most notably in Upcoming events
- Course dashboard fixes for custom aliases and icons
- Aliases now work properly for archived courses
- Classes without "PERIOD N" in the name will no longer crash the grades page

## Version 4.0 - September 4, 2018

### Additions
- Course aliases
  - Friendly nicknames can now be set for courses, replacing `AP ENG LANG A: TERM AF - PER 1` with nicer names, like "English (P1)"
  - Course aliases are used everywhere the full course name would be used
  - Available as a new setting in Course Options
- Material tooltips
  - The "Materials" page for each course now has tooltips for graded items and for documents
  - Graded items show the grade, what category the assignment is in, and if it has been submitted online
  - Documents (hovering over the size indicator) now show their length in pages and a preview of the first page

### Changes
- Astronomy now has a custom course icon in the default theme
- To facilitate new features such as document tooltips, new permissions are required: the extension now needs access to all of schoology.com

### Fixes
- Custom course icons apply more reliably and in more contexts
- API key retrieval, used for functions like getting denominators of missing assignments or the materials page tooltips, is now more reliable, especially for accounts which had not previously generated API keys

## Version 3.17 - August 16, 2018

### Additions
- Added option to keep teacher-provided course icons
  - Enabling this option will keep icons provided by teachers while still replacing default icons with custom SchoologyPlus icons
  
### Fixes
- Fixed the settings drop-down menu (in the top right corner) in Firefox

## Version 3.16 - May 19, 2018

### Additions
- Gradebook courses now have a context menu, linking to all course subpages
- Assignments now have a context menu
  - Can drop or undrop assignments to simulate impact on grade
  - Can calculate minimum scores on assignments needed to get a certain course letter grade (uses Schoology Plus-configured grading scale)

### Fixes
- Dropped assignments now correctly contribute to score totals
- Dropped assignments now no longer alter total score when edited while dropped
- More reliable loading of missing assignment information

## Version 3.15.2 - May 7, 2018

### Fixes
- If a maximum score for a missing assignment cannot be found, grade loading no longer hangs indefinitely

## Version 3.15 - May 3, 2018

### Additions
- Added course icons to the Course Dashboard page
- Missing assignments now show the max possible points on the grades page

### Changes
- Grade modification now allows negative point denominators
  - Use this as a way to drop assignments until proper support for this is added
  - For example, to drop an assignment with a score of 3/20, add an assignment with -3/-20 as the score
- Classes with missing assignments will take slightly longer to load, and "LOADING" may be shown while missing assignments are being processed
  - This is a result of the bug fix listed below

### Fixes
- Grade modification now respects missing assignments and counts their maximum points properly

## Version π - March 14, 2018

> The following new features were **suggested by users**. If you want your idea to be implemented into Schoology Plus, [fill out this survey](https://goo.gl/forms/iP6GzLqNc6YQoJo83). Thanks for your support and your suggestions!

### Additions
- Added a "Course Settings" menu on course pages for course-specific settings
- Added ability to create custom grading scales for each course
	- To set the grading scale, go to the page for a course and click "Course Settings" in the sidebar
	- This allows the usage of any number of custom grading symbols
- Added the ability to configure receiving announcements separately from assignment notifications
	- Previously, if notifications were disabled, announcements would not be received
	- There are three options for this setting:
		- **Enable Announcements**: Show desktop notifications and news feed posts for announcements
		- **Announcement News Feed Posts Only**: Only show posts in the news feed for announcements (no notifications)
		- **Disable Announcements**: Entirely disables checking for announcements

### Changes
- The "Assume Grading Scale" setting has been replaced with "Custom Grading Scales"
	- The default value for this new setting is `Enabled` and is not affected by the value of the old setting

### Fixes
- Fixed desktop notifications not working whatsoever on Firefox

## Version 3.10 - March 6, 2018

#### Additions

- Added broadcasts
  - Broadcasts are push notifications sent to all Schoology Plus users
  - Broadcasts are shown as desktop notifications as well as posts pinned to the top of the news feed
- Added broadcast for new users

## Version 3.9.6 - February 21, 2018

#### Fixes

- Fixed the arrow dropdown menu in Firefox
- Fixed the alignment of course icons on the mastery page

## Version 3.9.5 - February 13, 2018

#### Additions

- Added Firefox support
  - [Download Here](http://aopell.me/projects/schoology-plus-firefox-download.html)

#### Changes

- Changed the portion of the settings window that scrolls to not include the save button
- Minor behind-the-scenes changes to allow a Firefox port

## Version 3.9 - February 9, 2018

#### Additions

- Added course icons (if enabled) to the grades screen

#### Fixes

- Fixed an issue with the course icon for film classes

## Version 3.8 - February 4, 2018

#### Additions

- Course Icons
  - A default set of course icons has been added
  - These can be enabled (default) or disabled with the "Override Course Icons" setting
  - Course icons are **themeable** (See the [theme spec](https://github.com/aopell/SchoologyPlus/tree/master/themes) for details)
  - ***If your course is missing an icon, please send feedback including your course's transcript name and an icon will be added***
- Added setting to control class sort order
  - Options are `By Period` to order by period number or `Alphabetically` for the Schoology default
- Added an "Export Theme" button for custom themes
  - This will copy the theme's JSON representation to your clipboard for easy sharing
- Classes are now sorted according to your chosen sort method on the mastery page

#### Changes

- When a custom theme is added, it is immediately set as the current theme
- Removed ability to add themes with duplicate names

#### Fixes

- Settings now show their correct value when the settings page is reopened without a refresh
- Cursor image is now properly removed when switching from a theme with a custom cursor to a theme without one
- Modal styling is no longer broken on course and user pages
- Modals now resize appropriately in small windows

## Version 3.7 - January 30, 2018

#### Additions

- Added ability to change the logo image in custom themes

## Version 3.6.1 - January 29, 2018

#### Additions

- Added the ability to create custom themes
  - Currently this functionality is fairly limited
  - To create and delete custom themes, go to `Settings > Theme > Install and Manage Themes...`
  - You can install a theme by inputting JSON in the format defined [here](https://raw.githubusercontent.com/aopell/SchoologyPlus/master/themes/example-theme.json)
  - More functionality as well as a theme editor website will be added soon
  
#### Fixes

- Fixed some issues with unsaved settings persisting when the settings window was closed

## Version 3.5.2 - January 28, 2018

#### Fixes

- Fixed multiple issues related to grade modification

## Version 3.5.1 - January 27, 2018

#### Fixes

- Fixed an issue with calculating modified grades when a class had a weighted category with no assignments 

## Version 3.5 - January 26, 2018

#### Additions

- Added ability to disable grading scale assumption in settings
- Added "Feedback" link to settings page footer
  - Use this to submit bugs and feature requests

#### Changes

- The "!!" on the Schoology Plus icon now disappears when the setting screen is opened
  - However, the "New Update" indicator will persist until it is clicked

## Version 3.4 - January 23, 2018

#### Additions

- Added "LAUSD Orange" theme
- Added "Toy" theme (special thanks: :crown:)

## Version 3.3 - January 23, 2018

WARNING: *This update resets your rainbow mode setting*|
-|

#### Additions

- Added a "Theme" setting
- Added a "Restore Defaults" button to the settings page

#### Changes

- Rainbow mode is now the "Rainbow" theme
- Improved Rainbow theme for better color transitions between pages
  - The color no longer resets to red every time you load a new page

## Version 3.2 - January 20, 2018


#### Additions

- Courses drop-down no longer has a scrollbar
- Added contributors page
- Added changelog
  - Added indicator to changelog link when extension updates

#### Fixes

- Fixed number badge not showing any notifications

## Version 3.1 - January 16, 2018

#### Additions

- Added ability to disable notifications
- Added grades page link to navigation bar
- Added informational hover text to setting modified asterisk

#### Changes

- Minor improvements to options menu

#### Fixes

- Fixed options appearing modified after closing options menu without saving

## Version 3.0.2 - January 15, 2018
#### Fixes

- Bug fixes

## Version 3.0 - January 15, 2018
#### Additions

- Added options menu
- Added ability to customize navigation bar color
- Added rainbow mode

#### Changes

- Changed how notifications are checked
- Clicking notifications now takes you to the notification page

## Version 2.1.3 - December 14, 2017
#### Fixes

- Bug fixes

## Version 2.1 - December 12, 2017
#### Additions

- Added ability to simulate adding a new assignment to a category
- Added desktop notifications for new grades
- Clicking the extension icon opens Schoology

#### Fixes

- Fixed issue with hover color of home link on the navigation bar when on the home page

## Version 2.0 - December 9, 2017
#### Additions

+ Added ability to simulate changing a grade

#### Fixes

* Fixed gap in darker color when hovering over links on the navigation bar

## Version 1.2.3 - December 8, 2017
#### Fixes

- Bug fixes

## Version 1.2 - December 8, 2017
#### Additions

- Classes are now sorted by period

## Version 1.1 - December 8, 2017

#### Additions

- Added letter grades for classes that don't set them (assumes 10% grading scale)
- Schoology logo can now be clicked to return to the home page

## Version 1.0.1 - December 7, 2017

#### Fixes

- Fixed dropped grades counting in point totals
