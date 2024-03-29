//https://github.com/eyecatchup/tweetbutton/blob/master/tweetbutton.html

//bug : https://dev.twitter.com/discussions/17168

<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>A custom tweet button (with tweet count)</title>
  <style>
    html{font:normal normal normal 11px/18px 'Helvetica Neue',Arial,sans-serif;color:#333;}
    /* Tweet Button Styles */
    #tweet-btn-widget{white-space:nowrap;overflow:hidden;text-align:left;}a{outline:none;text-decoration:none;}.tweet-btn-o,.tweet-cnt-o,.btn,.btn .label,#tweet-cnt{display:-moz-inline-stack;display:inline-block;vertical-align:top;zoom:1;}.tweet-btn-o{max-width:100%;}.btn{position:relative;background-color:#F8F8F8;background-image:-webkit-gradient(linear,left top,left bottom,from(#FFF),to(#DEDEDE));background-image:-moz-linear-gradient(top,#FFF,#DEDEDE);background-image:-o-linear-gradient(top,#FFF,#DEDEDE);background-image:-ms-linear-gradient(top,#FFF,#DEDEDE);background-image:linear-gradient(top,#FFF,#DEDEDE);border:#CCC solid 1px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;color:#333;font-weight:bold;text-shadow:0 1px 0 rgba(255,255,255,.5);-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;cursor:pointer;height:18px;max-width:98%;overflow:hidden;}.btn,.tweet-cnt-o{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;height:20px;max-width:100%;}.btn i{position:absolute;top:50%;left:2px;margin-top:-5px;width:16px;height:13px;background:rgba(0,0,0,0);background-image:url(data:image/png;base64,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);}.btn .label{padding:0 3px 0 19px;white-space:nowrap;}.tweet-cnt-o{position:relative;background:#FFF;border:#BBB solid 1px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;min-height:18px;_height:18px;min-width:15px;_width:15px;}.tweet-cnt-o i,.tweet-cnt-o u{position:absolute;zoom:1;line-height:0;width:0;height:0;left:0;top:50%;margin:-4px 0 0 -4px;border:4px rgba(0,0,0,0) solid;_border-color:pink;_filter:chroma(color=pink);border-right-color:#AAA;border-left:0;}.tweet-cnt-o i,.tweet-cnt-o u{position:absolute;zoom:1;line-height:0;width:0;height:0;left:0;top:50%;margin:-4px 0 0 -4px;border:4px rgba(0, 0, 0, 0) solid;_border-color:pink;_filter:chroma(color=pink);border-right-color:#AAA;border-left:0;}.tweet-cnt-o u{margin-left:-3px;border-right-color:#FFF;}#tweet-cnt{white-space:nowrap;text-align:center;color:#333;padding:0 5px;}
  </style>
</head>
<body>

  <!-- Begin Tweet Button -->
  <div id="tweet-btn-widget">
    <div class="tweet-btn-o"><a href="#" class="btn" target="_blank" id="tweet-btn"><i></i><span class="label">Tweet</span></a></div>
    <div class="tweet-cnt-o"><i></i><u></u><a href="#" id="tweet-cnt" target="_blank">0</a></div>
  </div> <!-- End Tweet Button -->

  <script src="//code.jquery.com/jquery-1.9.1.min.js"></script>

  <!-- Begin Tweet Button Script -->
  <script>
    /**
     * Copyright: 2013 - present, Stephan Schmitz <eyecatchup@gmail.com>
     * License:   http://eyecatchup.mit-license.org/
     * Source:    https://github.com/eyecatchup/tweetbutton/
     */
    $().ready(function() {
    var via = 'bext0n';                // Change to your Twitter username
    var txt = 'Check out this page: '; // Change to whatever..
    var a=window.location.href,b="http://urls.api.twitter.com/1/urls/count.json?url="+encodeURIComponent(a),c="http://twitter.com/intent/tweet?related=&text="+encodeURIComponent(txt)+"&url="+a+"&via="+via;
    $("#tweet-btn, #tweet-cnt").click(function(d){d.preventDefault();window.open(c,"","width=550,height=420,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=1,left=100,top=100");return!0});
    $.ajax({url:b,dataType:"jsonp",success:function(d){console.log("Tweet count for "+a+": "+d.count);$("#tweet-cnt").text(d.count.toString())},error:function(d){console.log("Can not get tweet count from "+b);}});});
  </script> <!-- End Tweet Button Script -->

</body>
</html>