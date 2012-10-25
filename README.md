jQuery.showWhen
===============

jQuery plugin to only show parts of pages when certain conditions are met.

By Fabio Santos (http://fabiosantoscode.blogspot.com)
[Here is a blog post on it](http://fabiosantoscode.blogspot.pt/2012/09/jqueryshowwhen.html)

[And here is a fiddle](http://jsfiddle.net/pGrKH/6/)

Usage
----

 - Include this script from your HTML page. It depends on jQuery, so include it
below jQuery.
 - (You may hide the temporarily hidden parts of your form with CSS, using the
display:none rule.)
 - Use $('.div-you-want-to-hide').showWhen('.form-element-you-want-to-watch')
 - Use the `watchCallback` argument to customize its use. Return `false` to hide
 your target. Here is the default implementation (it is different for checkboxes
 and radio buttons):

        function(toWatch) {
            var $Target = $(toWatch);
            
            return $Target.val().length > 0;
        }

 - Use the `hideCallback` to customize how the element hides. Default:
 
        function(toHide) {
            toHide.slideUp();
        }

 - And the `showCallback` to define how the element is revealed. Default:

        show = function(toShow) {
            toShow.slideDown();
        }

Roadmap
-------

Not much really

 - Testing (qunit probably)
 - Examples

