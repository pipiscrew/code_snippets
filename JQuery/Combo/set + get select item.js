            //select 1st item on combo Customers
            $('[name="customer_id"]').val('0');
            
            //get selected value
            $('[name=company_id]').val();
            
//jquery is genius when we have :
										<select name="company_id" class="form-control">
                                            <option value="0">-Επιλέξτε-</option>
											<option value="26213">.KRAFT FOODS HELLAS S.A.</option>
											<option value="26214">.LEGO SYSTEMS A/S</option>
											<option value="26215">«Ελλαδικό» της ΒΙΟΚΟΤ</option>
										</select>

//^^ $('[name=company_id]').val(); will give us the value
                                            
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
                                            
//^^ $('[name=category]').val(); will give us the text because ithasnt value!


//when we have a select with values and we want to get also the select text
alert($('#causes :selected').text()); 

//or get all combo text -
 alert($('#causes').text());


//on a select with val + text when we would like to select by text 
							$("select#category option")
							   .each(function() { this.selected = (this.text == "test" ); });