//http://stackoverflow.com/questions/47824/how-do-you-remove-all-the-options-of-a-select-box-and-then-add-one-option-and-se

            //remove all options
            $('[name="cmbTitles"]')
                        .find('option')
                        .remove()
                        .end();
                        
                        
			//remove + add new                                                
			$('#mySelect')
			    .find('option')
			    .remove()
			    .end()
			    .append('<option value="whatever">text</option>')
			    .val('whatever');