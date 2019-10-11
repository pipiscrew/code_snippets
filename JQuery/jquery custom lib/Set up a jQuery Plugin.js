//http://www.codechewing.com/library/how-to-set-up-a-jquery-plugin/
//By using the $.extend function above, we extend the passed options object by adding all the other properties from one to another.
//If the user has supplied a custom option, the default will be overridden.
(function( $ ) {
 
  $.fn.pluginname = function( options ) {
 
    options = $.extend( $.fn.pluginname.defaults, options );
 
    // Plugin code
    return this.each( function() {
 
      $( this )
        .css({
          color : options.colour,
          fontStyle : options.fontStyle
        });
 
    });
 
  }
 
  // Set up the default options.
  $.fn.pluginname.defaults = {
    colour : 'red',
    fontStyle : 'italic'
  };
 
})( jQuery );

//use
$( 'a' ).pluginname({
 
  colour : 'green',
  fontStyle : 'italic'
 
});