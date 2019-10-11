								var voteRef3 = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + episode + "/votes");
								voteRef3.once('value', function(snapshot3) {
									if (snapshot3.val() === null) {
										console.log("votes created" + tm);

										//add *votes* record
										voteRef3.set({
											avg : parseFloat(vote),
											count : 1,
											sum : parseFloat(vote)
										});
									} else {
										console.log("votes edited " + tm);

										//read the values stored @ firebase
										var count = parseInt(snapshot3.val().count);
										var sum = parseInt(snapshot3.val().sum);

										//modify vars by adding current vote
										count += 1;
										sum += parseFloat(vote);

										var avg = parseFloat(sum / count);
										
										//update the stored values
										voteRef3.set({
											avg : parseFloat(avg.toFixed(2)),
											count : count,
											sum : parseFloat(sum)
										});
									}
								});