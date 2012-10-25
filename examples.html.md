jQuery.showWhen examples
========================

Basic usage:
------------

        $('#example1').showWhen($('#example1-toggle'));

<div class="example1">

<p>
<label for="example1-toggle">Do you wish to be informed of our offers through e-mail? (`#example1-toggle`)</label>
<input type="checkbox" id="example1-toggle">
</p>

<div style="background-color: #eee; padding: 1em;" id="example1">
<i>#example1</i>
<label for="example1-input">If so, please insert your e-mail.</label>
<input type="text" id="example1-input" class="example1" />
</div>

</div>


Using callbacks to customize
----------------------------

        $('#example2').showWhen('#example2-toggle',
            null,
            // hideCallback
            function($target){
                $target.fadeOut().fadeIn().faceOut();
            },
            // showCallback
            function($target){
                $target.fadeIn().fadeOut().fadeIn();
            });


<p>
<label for="example2-toggle">Insert value</label>
<input type="text" id="example2-toggle" />
</p>

<div style="background-color: #eee; padding: 1em;" id="example2">
<label>Insert payment API URL:</label>
<input type="text" placeholder="Yes, by hand." />
</div>

Checkboxes
----------

        $('#example3').showWhen('#example3-toggle')

<p>
<label for="example3-a">Example3 - a</label>
<input type="checkbox" name="example3" id="example3-a" />
</p>
<p>
<label for="example3-b">Example3 - b</label>
<input type="checkbox" name="example3" id="example3-b" />
</p>
<p>
<label for="example3-c">Example3 - c</label>
<input type="checkbox" name="example3" id="example3-c" />
</p>
<p>
<label for="example3-toggle">Example3 - toggle</label>
<input type="checkbox" name="example3" id="example3-toggle" />
</p>
<div style="background: #eee; padding: 1em;" id="example3">
<p>Toggled area</p>
</div>

That's all there is to it, really.

