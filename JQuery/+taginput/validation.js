//jquery.validation doesnt work

			    ////////////////////////// validation
			    var form = $(this);
			    form.validate();
			 
			    if (!form.valid())
			        return;
			        
			 	if (!$('[name=tab2_countries]').val())
			 	{
					alert("Please fill countries!");
					return;
				}