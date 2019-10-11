				$('#logout').on('click', function(e) {
					var db = new Firebase('https://' + baseURL + '/');
				
					var auth2 = new FirebaseSimpleLogin(db, function(error, user) {
							if (user)
								auth.logout();
					});
				});
				
				//OR
	$("#LOGOUT").on('click', function(e) {
		var firebaseRef = new Firebase("https://" + baseURL);

		var auth = new FirebaseSimpleLogin(firebaseRef, function(error, user) {
			if (error | user === null)
				window.location = "index.html";
			else
				auth.logout();
		});
	});