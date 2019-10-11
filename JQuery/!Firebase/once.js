					var db4 = new Firebase('https://testarea.firebaseio.com/competitions');
					var db4Query = db4.child($(this).attr('data-name')); //if needed
					db4Query.once('value', function(snapshot) {
						if (snapshot.val() === null) {
							alert('I got a null result.');
						} else {
							console.log(snapshot.val());
							$('#title').val(snapshot.val().Title);
							$('#descr').val(snapshot.val().Comment);
							$('#logo').val(snapshot.val().Logo);
							$('#credit').val(snapshot.val().Cr);
							$('#category').val(snapshot.val().Cat);
							$('#datestart').val(getGMTfromUTC(snapshot.val().dateStart));
							$('#dateend').val(getGMTfromUTC(snapshot.val().dateEnd));

							//hide indicator
							$("#loading").hide();

							//show modal
							$('#modaloCOMPETITION').modal('toggle');

						}
					});