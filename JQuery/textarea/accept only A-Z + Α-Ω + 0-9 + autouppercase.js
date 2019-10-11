//http://stackoverflow.com/questions/2812585/jquery-validate-characters-on-keypress
//http://jsfiddle.net/ntywf/2/

$(document).ready(function () {
    
    $('input').keyup(function() {
        var $th = $(this);
        $th.val($th.val().toUpperCase());
        $th.val( $th.val().replace(/[^A-ZΑ-Ω0-9]/g, function(str) {  return ''; } ) );
    });
});


regex to accept also special chars
/[^A-ZΑ-Ω0-9._^%$#!~@,-]/g