WARNING : 
//http://stackoverflow.com/questions/22979135/facebook-like-subscribe-event-not-working
ONLY the XFBML and HTML5 versions of the button allow you to subscribe to the 'edge.create' 
event in the Facebook SDK for JavaScript through FB.Event.subscribe. This JavaScript event will fire any time a button is clicked.

//https://developers.facebook.com/docs/reference/javascript/FB.Event.subscribe/v2.0

var page_like_or_unlike_callback = function(url, html_element) {
  console.log("page_like_or_unlike_callback");
  console.log(url);
  console.log(html_element);
}

// In your onload handler
FB.Event.subscribe('edge.create', page_like_or_unlike_callback);
FB.Event.subscribe('edge.remove', page_like_or_unlike_callback);


//////////OR
//http://stackoverflow.com/questions/23005569/like-button-of-facebook-will-not-fire-edge-create-or-edge-remove-in-web-page
window.fbAsyncInit = function() {
    FB.init({
      appId      : '510509449056378',
      status     : true,
      xfbml      : true
    });
    FB.Event.subscribe('edge.create',
       function(response) {
         alert('You liked the URL: ' + response);
       }
    );

    FB.Event.subscribe('edge.remove',
      function(response) {
         alert('You UNliked the URL: ' + response);
      }
    );
};


like generator :
https://developers.facebook.com/docs/plugins/like-button