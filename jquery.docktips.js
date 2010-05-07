/*
jQuery 1.3.2(+) docktip Plugin v 0.1 by Manuel Graf May 2010
Check out on Github: http://github.com/ManuelGraf/docktip.js
http://www.manuelgraf.com
http://www.apfelkuh.de
*/

(function($){  
 $.fn.docktip = function(options) {

     function vanish_tip(){
         if(jQuery.support.opacity && opts.fade){
             jQuery('#'+opts.id).fadeOut(opts.duration);
         }else{
             jQuery('#'+opts.id).css('display','none');
         }
         jQuery('#'+opts.id).unbind('click');
     };
     
     var defaults= {
         id: "docktip", 
         cssclass: "docktip", 
         duration: 200,
         delay: null,  
         fade: true,
         position: 'center',
         text_attribute: 'title'
     };
     
     var dynamic_styles = {
         center: function(){
             return { 
                display:'inline',
                left: this.offset().left+(this.outerWidth()/2)-(jQuery('#'+opts.id).outerWidth()/2),
                top: this.offset().top+(this.outerHeight()/2)-(jQuery('#'+opts.id).outerHeight()/2)
             };
         },
         right: function(){
             return { 
                display:'inline',
                left: this.offset().left+this.outerWidth()+10,
                top: this.offset().top+(this.outerHeight()/2)-(jQuery('#'+opts.id).outerHeight()/2)
             };                                                                                    
         },                                                                                       
         left: function(){                                                                        
             return {                                                                             
                display:'inline',                                                                 
                left: this.offset().left-jQuery('#'+opts.id).outerWidth()-10,                 
                top: this.offset().top+(this.outerHeight()/2)-(jQuery('#'+opts.id).outerHeight()/2)
             };
         },                                                                                       
         top: function(){                                                                         
             return {                                                                             
                display:'inline',                                                                 
                left: this.offset().left+(this.outerWidth()/2)-(jQuery('#'+opts.id).outerWidth()/2),
                top: this.offset().top-jQuery('#'+opts.id).outerHeight()-10                   
             };                                                                                    
         },                                                                                       
         bottom: function(){                                                                      
             return {                                                                             
                display:'inline',                                                                 
                left: this.offset().left+(this.outerWidth()/2)-(jQuery('#'+opts.id).outerWidth()/2),
                top: this.offset().top+this.outerHeight()+10
             };
         }
         
     };
     var opts = $.extend(defaults, options);
     if($('#'+opts.id).length < 1){
         $('<div></div>').attr('id',opts.id).addClass(opts.cssclass).appendTo('body');
     }
  
     return this.each(function() {
         var obj = $(this);
         var _text = obj.attr(opts.text_attribute);         
         obj.data('docktip_text',_text).attr(opts.text_attribute,'');
        
         $(this).hover(function(event){
             var obj = jQuery(this);
             jQuery('#'+opts.id).unbind('click');
             jQuery('#'+opts.id).unbind('mouseleave')
             jQuery('#'+opts.id).text(obj.data('docktip_text')).bind('click',{obj:obj},function(evt){
                 evt.preventDefault();
                 evt.returnValue = false; 
                 evt.data.obj.trigger("click");
             }).bind('mouseleave',{obj:obj},function(evt){
                 if(jQuery(evt.relatedTarget) != obj){
                     vanish_tip('#'+opts.id);
                 }
             });
             var _hoverstyle = dynamic_styles[opts.position].apply(obj);
             var _tip = jQuery('#'+opts.id).text(_text).css(_hoverstyle).stop(false,true).show();
             return false;
         },function(event){
             if(jQuery(event.relatedTarget).attr('id') != opts.id){
                 vanish_tip('#'+opts.id)
             }
         });
        
     });  
};  
})(jQuery);