		function submiteVote(vote, comment) {
					var voteRef = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + episode + "/votes/" + tm);

					//security - when is not logged in goto login page
					var auth = new FirebaseSimpleLogin(voteRef, function(error, user) {
						if (error | user === null) {
							window.location = "index.html";
						}

						voteRef.push({
							comment : comment,
							date : '20130601',
							user : 'userX',
							vote : parseInt(vote)
						});

					});
		}