<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<title>
			PipisCrew - Testarea
	</title>
	
	<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>

	<script type="text/javascript">
		$(function()
			{

						
				$.get( "http://graph.facebook.com/cocacola", function( data ) {
					  var x;

					  x = "Category : " + data.category;
					  
					  var likes = parseInt(data.likes);
					  x += "<br>Likes : " + likes;
					  
					  var tat = parseInt(data.talking_about_count);
					  x += "<br>TAT : " + tat;

					  var res =  (tat/likes) * 100;					  
					  x += "<br>Engagement Rate : " + parseFloat(res).toFixed(2);
					  
					  $("#result").html(x);
				});
				

			});
	</script>
</head>

<body>
		<div id="result">
		</div>
</body>
</html>