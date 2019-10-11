				function retrieveComments(point) {
					var episodesRef = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + episode + "/comments/" + point);

					episodesRef.on('value', function(snapshot) {
						if (snapshot.val() != null) {

							snapshot.forEach(function(episodeDetails) {
								//vote record
								var voteItem = episodeDetails.val();

								//for each time POINT > vote
								for (var timelinePoints3 in voteItem) {

									voteSum += voteItem[timelinePoints3].rate;
									voteCounter += 1;
								}
							});
						}
					});
				}