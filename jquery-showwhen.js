/*

jQuery.showWhen

Fabio Santos (fabiosantoscode.blogspot.com)

Usage: See README.md

This program is free software. It comes without any warranty, to the extent
permitted by applicable law. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2, as
published by Sam Hocevar. See http://sam.zoy.org/wtfpl/COPYING for more
details. */ 


jQuery.fn.showWhen = function(toWatch, watchCallback, hideCallback, showCallback) {
    return this.each(function () {
        var $ToToggle = $(this),
            $ToWatch = $(toWatch),
            // Analyze our watchee.
            name = $ToWatch.attr('name'),
            type = $ToWatch.attr('type') || '',
            isCheckable = (type === 'radio' || type === 'checkbox'),
            // Default implementations of checking, showing and hiding.
            shouldHide = watchCallback ? watchCallback : (isCheckable ? 
                function($ToWatch){
                    return !$ToWatch[0].checked;
                }
                :
                function($ToWatch) {
                    val = $ToWatch.val();
                    return !val;
                }),
            show = (typeof showCallback === 'function') ? showCallback :
                function($ToShow) {
                    $ToShow.slideDown();
                },
            hide = (typeof hideCallback === 'function') ? hideCallback : function($ToHide) {
                $ToHide.slideUp();
            },
            // Avoid hiding same element twice.
            isHidden = undefined,
            // Event handler for the watched element.
            watch = function(evt) {
                if (shouldHide($ToWatch, $ToToggle)) {
                    if (isHidden === false) {
                        hide($ToToggle);
                        isHidden = true;
                    }
                } else {
                    if (isHidden === true) {
                        show($ToToggle);
                        isHidden = false;
                    }
                }
            };
        
        // Radios and checkboxes have no val() so they need a different
        // implementation of the shouldHide check.
        if (isCheckable) {
            // Don't watch a radio or checkbox, instead watch all in same name group
            // 
            // ...unless it doesn't have a name, in which case there is no group
            $ActuallyWatch = name ? $('[name="' + name + '"]') : $ToWatch;
        
            $ActuallyWatch
                .click(watch)
                .keyup(watch)
                .change(watch);
        } else {
            $ToWatch
                .change(watch)
                .keyup(watch)
                .click(watch)
                .focusout(watch);
        }
        
        //initial status
        if (shouldHide($ToWatch, $ToToggle)) {
            $ToToggle.hide();
            isHidden = true;
        } else {
            $ToToggle.show();
            isHidden = false;
        }
    });
};
