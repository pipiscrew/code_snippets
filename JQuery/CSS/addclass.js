//http://stackoverflow.com/a/7403519
Just call addClass(). jQuery will do the check for you. If you check on your own,
you are doubling the work, since jQuery will still run the check for you.


		    //when modal closed, hide the warning messages + reset
		    $('#modalOFFER_ADVERTISE_DETAILS').on('hidden.bs.modal', function() {
		        //when close - clear elements
		        $('#formOFFER_ADVERTISE_DETAILS').trigger("reset");
		 
		        //clear validator error on form
		        validatorOFFER_ADVERTISE_DETAILS.resetForm();

				$("[name=ad_placement_mobile],[name=ad_placement_desktop],[name=ad_placement_desktop_right],[name=ad_placement_audience_network]").addClass("mycheckbox");
		    });
		    

					if (data.rec.ad_placement_mobile==1)
					{
						$("[name=ad_placement_mobile]").addClass('mycheckboxon')
					}

					if (data.rec.ad_placement_desktop==1)
					{
						$("[name=ad_placement_desktop]").addClass('mycheckboxon')
					}

					if (data.rec.ad_placement_desktop_right==1)
					{
						$("[name=ad_placement_desktop_right]").addClass('mycheckboxon')
					}

					if (data.rec.ad_placement_audience_network==1)
					{
						$("[name=ad_placement_audience_network]").addClass('mycheckboxon')
					}