//http://stackoverflow.com/questions/2901125/jquery-validate-required-select/2901401#2901401

		// add custom validation for combos
		 $.validator.addMethod("valueNotEquals", function(value, element, arg){
		  	return arg != value;
		 }, "Value must not equal arg.");
		 
        ///////////////////////////////
        //validation - on form submit
        $("#formbestof").validate({
            rules : {
            	customer_id  : { valueNotEquals: '0' },
                category  : { valueNotEquals: '-Επιλέξτε-' }
            },
            messages : {
            	customer_id  : 'Το πεδίο είναι υποχρεωτικό',
                category  : 'Το πεδίο είναι υποχρεωτικό'
            }
        });

//html
				//this is with value
										<select name="company_id" class="form-control">
                                            <option value="0">-Επιλέξτε-</option>
											<option value="26213">.KRAFT FOODS HELLAS S.A.</option>
											<option value="26214">.LEGO SYSTEMS A/S</option>
											<option value="26215">«Ελλαδικό» της ΒΙΟΚΟΤ</option>
										</select>
										
				//this is without value, so takes the text as val
                                            <select name='category' class='form-control' >
                                            	<option>-Επιλέξτε-</option>
												<option>ONLINE COMMUNICATION</option>
												<option>OUTDOOR</option>
												<option>ΔΙΑΦΗΜΙΣΤΙΚΑ ΕΝΤΥΠΑ</option>
												<option>ΕΤΑΙΡΙΚΗ ΤΑΥΤΟΤΗΤΑ</option>
												<option>ΗΜΕΡΗΣΙΟΣ & ΠΕΡΙΟΔΙΚΟΣ ΤΥΠΟΣ</option>
												<option>ΡΑΔΙΟΦΩΝΟ</option>
												<option>ΣΥΣΚΕΥΑΣΙΑ</option>
												<option>ΤΗΛΕΟΡΑΣΗ</option>
                                            </select>
                                            
        
//ex
        $('#formbestof').submit(function(e) {
        	 	e.preventDefault();
        	 
		        ////////////////////////// validation
		        var form = $(this);
		        form.validate();
		
		        if (!form.valid())
		            return;
		        ////////////////////////// validation