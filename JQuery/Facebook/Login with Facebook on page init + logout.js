//example by - https://developers.facebook.com/docs/facebook-login/login-flow-for-web/v2.0
//https://developers.facebook.com/docs/reference/javascript/FB.logout

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

<script type='text/javascript' src='//code.jquery.com/jquery-1.11.0.min.js'></script>

    <script>
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '690386867683569',
          xfbml      : true,
          version    : 'v2.0'
        });
        
		  FB.getLoginStatus(function(response) {
		    console.log(response);
		    if (response.status === 'connected') {
		    	testAPI();
		    }
		    else 
		    	console.log("please login");
		  });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
       
	  function testAPI() {
	    console.log('Welcome!  Fetching your information.... ');
	    FB.api('/me', function(response) {
	    	console.log(response);
	      console.log('Successful login for: ' + response.name);
	     console.log('Thanks for logging in, ' + response.name + '!');
	    });
	  }
    </script>
    


		<script type="text/javascript">
	
			$(function() {
				
				//button click
				$('#btnLogout').on('click', function(e) {
					FB.logout(function(response) {
						  console.log(response)
						});
					});
				//button click
				$('#btn').on('click', function(e) {
					 FB.login(function(response) {
					   if (response.authResponse) {
					     console.log('Welcome!  Fetching your information.... ');
					     FB.api('/me', function(response) {
					       console.log('Good to see you, ' + response.name + '.');
					       testAPI();
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
		
		<button id="btn">
			Login
		</button>

		<button id="btnLogout">
			Logout
		</button>
				
		<br><div id="myDIV"></div><br>
		
		
	</body>
</html>
