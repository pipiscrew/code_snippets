//use a div tag on the start of body hidden
<div id="loading" style="display:none;background-color:grey;position:absolute;top:0;left:0;height:100%;width:100%;z-index:999"></div>

//on ajax start or whatever 
$("#loading").height($('body').height()); //cover when user is at page2 etc.
$("#loading").show();

//when completes
$("#loading").hide();



//div no2 (div made white + uses a indicator)
<div id="loading" style="display:none;background-color:white;position:absolute;top:0;left:0;height:100%;width:100%;z-index:999;vertical-align:middle; text-align:center"><img src='http://www.w3schools.com/jquery/demo_wait.gif' /></div>


//for AJAX is these functions to set the start and end of AJAX call
http://api.jquery.com/ajaxStart/
http://api.jquery.com/ajaxStop/