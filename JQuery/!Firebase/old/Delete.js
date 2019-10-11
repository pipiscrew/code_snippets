//https://www.firebase.com/docs/javascript/firebase/remove.html

				/////////////////
				// delete button
				$('#btn_delete').live('click', function(e) {
					var epidoseDEL = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + $(this).attr('data-name'));

					epidoseDEL.remove();
				});