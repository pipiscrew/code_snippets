<!DOCTYPE html>
<html>
<head>
    <title>Using jQuery Animations</title>
    <script type="text/javascript" src="jquery-1.10.2.js"></script>
    <script type="text/javascript">
        $("document").ready(function() {
            $("#go").click(function() {
                    $("#testDiv").animate({width: 400})
                    .animate({height: 300}, 400)
                    .animate({left: 200}, 500)
                    .animate({top: "+=100", borderWidth: 10}, "slow")});
        });
    </script>
<style>
    #testDiv {
        position:relative;
        width: 150px;
        height: 100px;
        margin: 10px;
        padding: 20px;
        background: #b3c8d0;
        border: 1px solid black;
        font-size: 16pt;
        cursor: pointer;
    }
</style>
</head>
<body>
    <h1>Quick jQuery Animation Intro</h1>
    <p>jQuery provides some basic animation features for showing and hiding elements, as well as a low-level animation function that can be used to animate several CSS properties (as long as they are numeric).</p>
    <button id="go">Go</button>
    <div id="testDiv"></div>
</body>
</html>

scroll from right to left, when stops alert user

//ex2
//http://api.jquery.com/animate/
<script>
	var windowWidth = $(window).width()+50;
 
    $( "#testDiv" ).animate({
        right: windowWidth
      }, 4000, function() {
          alert("end");
        // Animation complete.
    });
</script>


//ex3
$( "#clickme" ).click(function() {
  $( "#book" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});