jQuery docktip Plugin v 0.1
for jQuery 1.3.2

jQuery('#element').docktip()

Creates a Tooltip like the one from the Mac OSX Dock on hovering on any (visible) DOM-element.
Unlike the most other Tooltip Plugins, there is almost no flickering.
Instead of polluting the dom with infinite amounts of tooltip-divs the docktip-engine just creates 
ONE tooltip. Thus, it insignificantly lacks performance but nothing will ever interfere or look shitty.
Just like OSX ;)

docktip.js uses the title of any html element for the displayed text. You dont have to think about that 
though, because it resets the title value (so that the doesnt display its own tooltip).


 --------------------------------------------------------------
|                        I. OPTIONS                           |
 --------------------------------------------------------------

 position (string)
 position of the tip relative to the hovered element. Yet supported: 'top', 'left', 'right', 'bottom', 
 'center' | Default: center
 
 fade (boolean)
 fade the docktip on mouseLeave if set to true (and browser supports css3 opacity), hides when set to
 false | default: true

 duration (int) 200,
 duration in ms of the fadeOut on mouseLeave | Default 200ms
 
 id (string)
 the id of the docktip itself | Default: "docktip"
  
 cssclass (string)
 The docktips CSS Class | Default: "docktip"

 text_attribute (string)
 what attribute of the hovered element contains the docktip text | Default: 'title'


 --------------------------------------------------------------
|                        I. HTML                              |
 --------------------------------------------------------------

<img src="my_image.png" title="[Text of the tip]" alt="" class="i_wanna_hover_that_thing" />

OR

   <any_other_html_tag title="[Text of the tip]" class="i_wanna_hover_that_thing">
   </any_other_html_tag> 


--------------------------------------------------------------
|                        I. JS                               |
--------------------------------------------------------------

jQuery('.i_wanna_hover_that_thing').docktip()


--------------------------------------------------------------
|                I. Browser Support                          |
--------------------------------------------------------------

Functionality tested in IE 6+, Opera 10+, Safari 4+, Chrome 4+, Firefox 3+
Unfortunately the style doesnt support round corners for Opera and IE yet.
(coming soon hopefully)
