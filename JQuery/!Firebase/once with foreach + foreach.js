					db2 = new Firebase('https://' + baseURL + '/causecategories/');

					db2.once('value', function(snapshot) {

						snapshot.forEach(function(catID) {
							// delNode('https://' + baseURL + '/causecategories/' + catID.name() + '/causes/');
							delNode('https://' + baseURL + '/causecategories/' + catID.name() + '/competitions/');

								var causescompetitions = catID.child('causes');
								causescompetitions.forEach(function(causes) {
									delNode('https://' + baseURL + '/causecategories/' + catID.name() + '/causes/' + causes.name() + '/competitions/');
								});
						});
					});