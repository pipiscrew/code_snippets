//https://forum.jquery.com/topic/how-to-catch-keypress-on-body

$(document).keypress(function(event) {
      alert('Handler for .keypress() called. - ' + event.charCode);
});