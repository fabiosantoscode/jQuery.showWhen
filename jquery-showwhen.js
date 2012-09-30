/*

jQuery.showWhen

Fabio Santos (fabiosantoscode@blogspot.com)

Usage:
 - Include this script from your HTML page. It depends on jQuery, so include it
below jQuery.
 - (You may hide the temporarily hidden parts of your form with CSS, using the
display:none rule.)
 - Use $('.div-you-want-to-hide').showWhen('.form-element-you-want-to-watch')
 - Use the `invert` argument to tell the plugin to do the opposite. I.E.
instead of showing the target when the input has something written on it, show
it when there is nothing written on it.

This program is free software. It comes without any warranty, to the extent
permitted by applicable law. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2, as
published by Sam Hocevar. See http://sam.zoy.org/wtfpl/COPYING for more
details. */ 


jQuery.fn.showWhen = function(target, invert) {
    var toShow = this,
        hasContents = function(target) {
            return $(target).val().trim().length
                || $(target).html().trim().length;
        },
        shouldHide = function(target) {
            return invert ? hasContents(target) : !hasContents(target);
        },
        watch = function() {
            if (shouldHide(target)) {
                toShow.slideUp();
            } else {
                toShow.slideDown();
            }
        };

    var type = $(target).attr('type');

    if (type === 'radio' || type === 'checkbox') {
        hasContents = function() {
            return $(target)[0].checked;
        };
    }

    if (type === 'radio') {
        // Do not watch the radio button alone, watch for all in same group
        $('[name="' + $(target).attr('name') + '"]')
            .click(watch)
            .keyup(watch)
            .change(watch);
    } else {
        $(target)
            .change(watch)
            .keyup(watch)
            .click(watch)
            .focusout(watch);
    }
    //initial status
    if (shouldHide(target)) {
        $(toShow).hide();
    } else {
        $(toShow).show();
    }

    return this;
};
