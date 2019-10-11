				//////////////////////////////////////
				//return back a snapshot for given URL
				//////////////////////////////////////
				function getSnap(URL) {
					//using 'once' function is safe

					var db = new Firebase(URL);
					var ret;
					db.once('value', function(snapshot) {
						ret = snapshot;
					});

					return ret;
				}


		var episodeInfo = getSnap("https://csp.firebaseio.com/events/" + eventname + "/episodes/" + recID + "/title");
		console.log(episodeInfo.val());