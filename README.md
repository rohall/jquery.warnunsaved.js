jquery.warnunsaved.js
=====================

Simple jQuery library for tracking unsaved changes and confirming that the user would like to discard them when leaving the page

## Examples

`$("textarea").warnunsaved();` // Bind to onchange events and set the unsaved changes flag if a change occurs

`$.warnunsaved("reset");` // Reset the unsaved changes flag to false

`$.warnunsaved("trigger");` // Set the unsaved changes flag to true

`$.warnunsaved("check");` // If the unsaved changes flag is true, confirm the action with the user.   
