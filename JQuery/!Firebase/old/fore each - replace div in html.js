				function showComments(point) {
					var episodesRef = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + episode + "/comments/" + point);

					var output = "";
					episodesRef.once('value', function(snapshot) {
						if (snapshot.val() != null) {

							snapshot.forEach(function(episodeDetails) {
								output += "<li>" + episodeDetails.val().username + " - " + (isEmpty(episodeDetails.val().comment) ? "no comment" : episodeDetails.val().comment) + "</li>";
							});

							$("#div_comments").html("<ul>" + output + "</ul>");
						}
					});
				}