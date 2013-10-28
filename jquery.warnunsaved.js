/**
The MIT License (MIT)

Copyright (c) 2013 Rick O'Halloran (rick.ohalloran@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
**/
(function($) {
	
	var hasUnsavedChanges = false;
	var message = 'You have unsaved changes, are you sure you want to leave?';

	$.warnunsaved = function ( action ) {

		// Set unsaved changes to true
		if (action == "trigger") {
			hasUnsavedChanges = true;

		// Trigger a check and prompt the user if there are unsaved changes
		} else if (action == "confirm") {
			if (hasUnsavedChanges) {
				return confirm(message);
			} 

			return true;
		
		// Set unsaved changes to false
		} else if (action == "reset") {
			hasUnsavedChanges = false;
		} 
	}

	// Add onchange events to each element
	$.fn.warnunsaved = function() {
		return this.each(function() {
			$(this).on('change', function() {
				hasUnsavedChanges = true;
			});
		});
	}

	window.onbeforeunload = function(){
		if (hasUnsavedChanges) {
        	return message;
		} 
    };


}( jQuery ));