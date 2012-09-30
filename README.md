jQuery.showWhen
===============

jQuery plugin to only show parts of pages when certain conditions are met.

By Fabio Santos (http://fabiosantoscode.blogspot.com)

Usage
----

 - Include this script from your HTML page. It depends on jQuery, so include it
below jQuery.
 - (You may hide the temporarily hidden parts of your form with CSS, using the
display:none rule.)
 - Use $('.div-you-want-to-hide').showWhen('.form-element-you-want-to-watch')
 - Use the `invert` argument to tell the plugin to do the opposite. I.E.
instead of showing the target when the input has something written on it, show
it when there is nothing written on it.

[Here is a blog post on it] (http://fabiosantoscode.blogspot.pt/2012/09/jqueryshowwhen.html)

[And here is a fiddle] (http://jsfiddle.net/pGrKH/6/)


Roadmap
-------

Not much really

 - Testing (qunit probably)
 - Examples
 - A callback argument to allow client code to specify when to show/hide.