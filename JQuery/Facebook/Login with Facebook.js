//https://developers.facebook.com/docs/reference/javascript/FB.login/v2.0

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

<script type='text/javascript' src='//code.jquery.com/jquery-1.11.0.min.js'></script>

    <script>
      window.fbAsyncInit = function() {
        FB.init({
          appId      : 'xx',
          xfbml      : true,
          version    : 'v2.0'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    </script>
    


		<script type="text/javascript">
	
			$(function() {
				
				//button click
				$('#btn').on('click', function(e) {
					 FB.login(function(response) {
					   if (response.authResponse) {
					     console.log('Welcome!  Fetching your information.... ');
					     FB.api('/me', function(response) {
					       console.log('Good to see you, ' + response.name + '.');
					     });
					   } else {
					     console.log('User cancelled login or did not fully authorize.');
					   }
					 });
				});
				
			});
		</script>
	</head>
	
	<body>
		
		//proper is 
		//<fb:login-button scope="manage_pages" onlogin="testAPI()" data-auto-logout-link="true" data-show-faces="true"></fb:login-button>
		//https://developers.facebook.com/docs/plugins/login-button
		<button id="btn">
			Push Me
		</button>
		
		<br><div id="myDIV"></div><br>
		
		
	</body>
</html>
