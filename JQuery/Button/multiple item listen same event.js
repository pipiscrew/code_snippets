				///////////////////////
				//toolbar - log out user
				$('#logout, #logout2').on('click', function(e) {

					var auth = new FirebaseSimpleLogin(eventsRef, function(error, user) {
						auth.logout();
					});

					window.location = "http://www.google.com";

				});