//http://lostechies.com/derickbailey/2012/05/22/function%E2%80%A6-vs-function%E2%80%A6-or-domready-vs-the-module-pattern/

//the classic document ready style
		$(function(){
		  // code in here
		});

//just set of JQuery functions
		(function($) {
		  // code in here
		})(jQuery);

-----------------------
so will be 

//external .js :
		(function($) {
		    $.tile = function showtbl2() {
		        console.log("fill table2!")
		    }
		})(jQuery);


//html page :
            $(function() {
            	$.tile();
            });

//Also using 2 DOM.ready() methods is redundant, you only ever need one for
//the page unless you have multiple sets of code that need to be independent of each other.

-----------------------
//http://www.latentmotion.com/separating-jquery-functions-into-external-files-without-selectors/

//External File (tilex.js):
	(function($){
	  tile = function() {
	    $("body").append('See? It works.');
	  };
	})(jQuery);
	
	
//html
<!DOCTYPE html>
<html>
<head>
<title>HyperStudio Timeline</title>
  <script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
  <script type="text/javascript" src="js/tilex.js"></script>

  <script type="text/javascript">
   $(document).ready(function(){
      tile();
    });
</script>
</head>
<body>
</body>
</html>

