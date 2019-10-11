		    ////////////////////////////////////////
		    // MODAL FUNCTIONALITIES [START]
		    //when modal closed, hide the warning messages + reset
		    $('#modalOFFER_ADVERTISE_DETAILS').on('hidden.bs.modal', function() {
		        //when close - clear elements
		        $('#formOFFER_ADVERTISE_DETAILS').trigger("reset");
		 
		        //clear validator error on form
		        validatorOFFER_ADVERTISE_DETAILS.resetForm();

				$("[name=ad_keywords],[name=ad_client_goals],[name=aud_countries],[name=aud_languages],[name=aud_interests],[name=aud_behaviors],[name=ad_connections]").tagsinput('removeAll');
		    });