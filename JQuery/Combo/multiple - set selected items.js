//https://github.com/davidstutz/bootstrap-multiselect

					var db4b = db4.child($(this).attr('data-name') + '/causes');
					db4b.once('value', function(snapshot) {
						if (snapshot.val() === null) {
							alert('I got a null result.');
						} else {
								snapshot.forEach(function(cause) {
									console.log(cause.val().ref);
									$('#causes').multiselect('select', cause.val().ref);
								});
						}
					});