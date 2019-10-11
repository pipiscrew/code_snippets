//https://www.firebase.com/docs/javascript/query/off.html
					episodesRef.on('value', function(snapshot) {
						if (snapshot.val() != null) {
						...
						}
					});
					
					//Remove all callbacks of any type
					episodesRef.off();
					
					
//if you like to make a query just once and donot to trigger all the time, use once
//https://www.firebase.com/docs/javascript/firebase/once.html
					episodesRef.once('value', function(snapshot) {
						if (snapshot.val() != null) {
						...
						}
					});