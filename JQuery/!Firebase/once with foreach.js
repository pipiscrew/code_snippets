			function sendAndroidPUSH(message)
			{
				console.log("sendAndroidPUSH");
				
				var dbPushAndroid = new Firebase('https://' + baseURL + '/peopleAndroid/');
				dbPushAndroid.once('value', function(snapshot) {
					if (snapshot.val() === null) {
						console.log(snapshot.val().deviceID);
					} else {
							snapshot.forEach(function(mobile) {
								console.log(mobile.val().deviceID);
							});
					}

				});								
			}