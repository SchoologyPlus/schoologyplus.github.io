---
title: Changelog
---
# Schoology Plus Changelog

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