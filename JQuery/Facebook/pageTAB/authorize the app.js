
<script>
//without jQuery ready
      window.fbAsyncInit = function() {
      
      //init the app
        FB.init({
          appId      : '956942367664567',
          xfbml      : true,
          version    : 'v2.0',
        });
      
      //ask user to authorize the app
		FB.getLoginStatus(function(response) {
		  if (response.status === 'connected') {
		    console.log('Logged in.');
		  }
		  else {
		    FB.login();
		  }
		});

		//here is null because must authorize
	 	FB.api('/me', function(response) {
	      console.log(response);
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


//login reference :
https://developers.facebook.com/docs/javascript/quickstart/v2.0#login