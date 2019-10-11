//no work with plain html


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
//https://developer.mozilla.org/en-US/docs/Web/API/notification

		<script type="text/javascript">
	
			$(function() {
				//request permission onload
				//if (!("Notification" in window)) {
				//	alert("This browser does not support desktop notification");
				//}
				//else 
				//	Notification.requestPermission();
				
				//button click
				$('#btn').on('click', function(e) {
					notifyMe();
				});
				
				function notifyMe() {
				  // Let's check whether notification permissions have already been granted
				  if (Notification.permission === "granted") {
					// If it's okay let's create a notification
					var notification = new Notification("Hi there, permissions already been granted!");
				  }

				  // Otherwise, we need to ask the user for permission
				  else if (Notification.permission !== 'denied') {
					Notification.requestPermission(function (permission) {
					  // If the user accepts, let's create a notification
					  if (permission === "granted") {
						var notification = new Notification("Hi there, you just approve notifications!");
					  }
					  else 
	  					console.log("not granted");
					});
				  }

				  // At last, if the user has denied notifications, and you 
				  // want to be respectful there is no need to bother them any more.
				}
				
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
