//https://www.firebase.com/docs/javascript/datasnapshot/numchildren.html

		var tt = new Firebase('https://csp.firebaseio.com/events/' + eventname);
		tt.on('value', function(snapshot) {
			var y = snapshot.child('episodes').numChildren();
			console.log(y);
		});
		
//or

var episodesRef = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes");
					episodesRef.on('value', function(snapshot) {

					var y = snapshot.numChildren();
							console.log(y);
			
					});
					
					
////////////
							var episodesRef3 = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + episode + "/comments");
							episodesRef3.on('value', function(snapshot) {
								
								var countComm=0;
								
								snapshot.forEach(function(commentDetails) {
									//var voteItem = commentDetails.val();
									countComm += commentDetails.numChildren();
									console.log(countComm);

								});
								
								$('#sp_comments').html(countComm);
							});