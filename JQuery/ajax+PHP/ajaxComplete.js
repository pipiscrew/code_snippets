//http://api.jquery.com/ajaxComplete/

//As of jQuery 1.8, the .ajaxComplete() method should only be attached to document.

$( document ).ajaxComplete(function( event, xhr, settings ) {
  if ( settings.url === "ajax/test.html" ) {
    $( ".log" ).text( "Triggered ajaxComplete handler. The result is " +
      xhr.responseText );
  }
});