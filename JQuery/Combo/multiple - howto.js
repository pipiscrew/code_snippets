//https://github.com/davidstutz/bootstrap-multiselect

//html
				<div class="form-group">
					<label>Causes :</label>
					<select id="causes" name="causes" class="form-control" multiple="multiple"></select>
				</div>
				
//js
						/////////////////////////
						// fill MODAL causes combo
						var db3 = new Firebase('https://testarea.firebaseio.com/causes');
						db3.once('value', function(snapshot) {
							if (snapshot.val() === null) {
								alert('I got a null result.');
							} else {

								var causes = "";
								//"<option>-Choose-</option>";
								snapshot.forEach(function(categ) {
									causes += "<option value='" + categ.name() + "'>" + categ.val().title + "</option>";
									//categs += "<option>" + categ.val().title + "</option>";
								});
	//set the items
								$('#causes').html(causes);
	//here make it multi!
								$('#causes').multiselect({
									includeSelectAllOption : true,
									enableFiltering : 1,
									enableCaseInsensitiveFiltering : true
									//maxHeight: 150
								});

							}
						});
						
						
//to refresh (uncheck all)
					//refresh multi select
					$('#causes').multiselect('refresh');