<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

<script type='text/javascript' src='jquery-1.10.2.min.js'></script>

		<script type="text/javascript">
	
			$(function() {
				
				//button click
				$('#btn').on('click', function(e) {
					$("#myDIV").html("ERROR 09090909");
				});
				
			});
		</script>
	</head>
	
	<body>
		
		<button id="btn">
			Push Me
		</button>
		
		<br><div id="myDIV"></div><br>
		
		
	</body>
</html>

//jQ CDN
//http://jquery.com/download/
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">