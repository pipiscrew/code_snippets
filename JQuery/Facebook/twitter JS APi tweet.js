//main for javascript - https://dev.twitter.com/docs/tfw-javascript
//events - https://dev.twitter.com/docs/tfw/events
//button - https://dev.twitter.com/docs/tweet-button

//this sample code-tested&working https://dev.twitter.com/discussions/4953
<!DOCTYPE html>
<head>
</head>
 
<body>
  <a href="http://twitter.com/share" class="twitter-share-button">Tweet</a>
  <a href="http://twitter.com/twitterapi"class="twitter-follow-button">Follow</a>
 
  <script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>
  <script type="text/javascript">
    function debugEvent(intent_event) {
      console.log(intent_event);
      alert('I am here');
    }
 
 //This event will be triggered when the user publishes a Tweet (either new, or a reply) through the Tweet Web Intent.
 twttr.events.bind('tweet', function (event) {
 	  console.log ("!!");
  console.log (event);
  console.log ("!2!");
});
    twttr.events.bind('click',    debugEvent);
    // twttr.events.bind('tweet',    debugEvent);
    twttr.events.bind('retweet',  debugEvent);
    twttr.events.bind('favorite', debugEvent);
    twttr.events.bind('follow',   debugEvent);
  </script>
</body>
</html>