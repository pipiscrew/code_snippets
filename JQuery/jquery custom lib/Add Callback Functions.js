//http://www.codechewing.com/library/how-to-add-callback-functions-to-jquery-plugin/
//jQuery plugin to animate the font size:
(function( $ ) {
 
  $.fn.pluginname = function( options ) {
 
    options = $.extend( $.fn.pluginname.defaults, options );
 
    // Plugin code
    return this.each( function() {
 
      $( this )
        .animate(
          {
            fontSize : options.fontSize
          },
          duration : 200,
          complete: options.complete // Complete function to be called.
        );
 
      // Fire the setup callback
      $.isFunction( options.setup ) && options.setup.call( this );
 
    });
 
  }
 
  // Set up the default options.
  $.fn.pluginname.defaults = {
    fontSize : '200%',
    setup : null,
    complete : null
  };
 
})( jQuery );


//use of 
$( 'p' ).pluginname({
  fontSize : '300%',
  complete : function() {
    $( this ).fadeOut( 1000 );
  },
  setup : function() {
    $( this ).css( 'color', 'red' );
  }
});