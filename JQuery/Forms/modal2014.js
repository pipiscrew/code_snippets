			////////////////////////////////////////
			// MODAL FUNCTIONALITIES [START]
			//when modal closed, hide the warning messages + reset
			$('#modaloSUBSECTOR').on('hidden.bs.modal', function() {
				//when close - clear elements
				$('#formoSUBSECTOR').trigger("reset");

				//clear validator error on form
				validatorSUBSECTOR.resetForm();
			});
			
			//functionality when the modal already shown and its long, when reloaded scroll to top
			$('#modaloSUBSECTOR').on('shown.bs.modal', function() {
				$(this).animate({
					scrollTop : 0
				}, 'slow');
			});
			// MODAL FUNCTIONALITIES [END]
			////////////////////////////////////////
			
			var validatorSUBSECTOR = $("#formoSUBSECTOR").validate({
				rules : {
					 oSUBSECTOR_name : { 
						required : true,
						minlength : 2,
						maxlength : 100
					 },
					oSECTOR_description : { greaterThanZero : true }
					
				},
				messages : {
					oSECTOR_description : 'Required Field',
					oSUBSECTOR_name : 'Required Field'
				}
			});
			
		////////////////////////////////////////
		// MODAL SUBMIT aka save button
		$('#formoSUBSECTOR').submit(function(e) {
			e.preventDefault();

			////////////////////////// validation
			var form = $(this);
			form.validate();

			if (!form.valid())
				return;
			////////////////////////// validation

		    var postData = $(this).serializeArray();
		    var formURL = $(this).attr("action");

			//close modal
			$('#modaloSUBSECTOR').modal('toggle');

		    $.ajax(
		    {
		        url : formURL,
		        type: "POST",
		        data : postData,
		        success:function(data, textStatus, jqXHR) 
		        {
		            if (data=="ok")
		            	refresh_SubSector_by_SectorVAL();
		            else
		             	alert("ERROR");
		        },
		        error: function(jqXHR, textStatus, errorThrown) 
		        {
		            alert("ERROR");      
		        }
		    });
		});
		

<!-- NEW SUBCATEGORY MODAL [START] -->
<div class="modal fade bs-modal-lg" id="modaloSUBSECTOR" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					&times;
				</button>
				<h4 class="modal-title" id='lblTitle_oSUBSECTOR'>New Sub Sector</h4>
			</div>
			<div class="modal-body">
				<form id="formoSUBSECTOR" role="form" method="post" action="tab_client_sector_subs_details_save2.php">

						<div class='form-group'>
							<label>Parent Sector :</label>
							<select id="oSECTOR_description" name='oSECTOR_description' class='form-control' readonly>
							</select>
						</div>
						
						<div class='form-group'>
							<label>Sub Sector Name :</label>
							<input id='oSUBSECTOR_name' name='oSUBSECTOR_name' class='form-control' placeholder='Sub Sector Name'>
						</div>
						
						<div class="modal-footer">
							<button id="bntCancel_oSUBSECTOR" type="button" class="btn btn-default" data-dismiss="modal">
								cancel
							</button>
							<button id="bntSave_oSUBSECTOR" class="btn btn-primary" type="submit" name="submit">
								save
							</button>
						</div>
						
				</form>
			</div><!-- End of Modal body -->
		</div><!-- End of Modal content -->
	</div><!-- End of Modal dialog -->
</div><!-- End of Modal -->
<!-- NEW SUBCATEGORY MODAL [END] -->