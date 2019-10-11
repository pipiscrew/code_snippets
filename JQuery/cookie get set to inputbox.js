	$(function() {
			  
		// text enter event
		$('#message-text').on('keypress', function(e) {
		    // if Enter key is pressed, send message
		    if (e.keyCode == 13) sendMessage();
		})

		/* USER HANDLE EVENTS */
			// el to edit username
			var userHandle = $('#user-handle');

			// show username from local storage in the field to edit username
			userHandle.val(getHandle());

			// subscribe to changes in the field
			userHandle.on('input', function() {
			    // update local storage whenever the field changes
			    setHandle(userHandle.val());
			});

			// this function retrieves username from localstorage
			function getHandle() {
			    return window.localStorage.getItem("usern");
			}

			// this function saves username to localstorage
			function setHandle(text) {
			    window.localStorage.setItem("usern", text);
			    
			}	
		/* USER HANDLE EVENTS */
		
	}) //jQuery ends