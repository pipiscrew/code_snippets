				//logout
				$("#logout").on('click', function(e) {
					var firebaseRef = new Firebase("https://" + baseURL);

					var auth = new FirebaseSimpleLogin(firebaseRef, function(error, user) {
						if (error | user === null)
							window.location = "index.html";
						else
							auth.logout();
					});
				});






//https://github.com/firebase/firebase-simple-login/blob/master/index.html

				///////////////////////
				//toolbar - log out user
				$('#logout').on('click', function(e) {
					var firebaseRef = new Firebase("https://csp.firebaseio.com/");

					var auth = new FirebaseSimpleLogin(firebaseRef, function(error, user) {
						auth.logout();
					});
				});
				
				
//no work from author
//https://www.firebase.com/docs/javascript/firebase/unauth.html
				///////////////////////
				//toolbar - log out user
				$('#logout').on('click', function(e) {
					var dataRef = new Firebase("https://csp.firebaseio.com/");
					
					dataRef.unauth();
					window.location = "index.html";
				});