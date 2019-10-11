//http://stackoverflow.com/questions/6827810/unable-to-set-data-attribute-using-jquery-data-api

	////////////////////////////////////////
	// delete button - comes from GRID only
	$('#btn_delete').live('click', function(e) {
		//
		//store ID to delete button on modal dialog
		$('#btn_delModalDelete').data('data-name', $(this).attr('data-name'));//$(this).attr('data-name'));
		
		//show the dialog!
		$('#deleteModal').modal('toggle');
	});
	
	

	//////////////////////////
	// delete button on modal
	$('#btn_delModalDelete').live('click', function(e) {
		
		alert($(this).data('data-name'));
		// var epidoseDEL = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + $(this).attr('data-name'));
// 
		// epidoseDEL.remove();
	});
	
	
//html for grid buttons
"<button id='btn_delete' data-name='" + recID + "' class='btn btn-sm btn-block btn-primary'>delete</button>"


//html for modal 

		<!-- Delete Modal Dialog-->
		<div id="deleteModal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h4 class="modal-title">Modal title</h4>
					</div>
					<div class="modal-body">
						<p>
							One fine body&hellip;
						</p>
					</div>
					<div class="modal-footer">
						<button id="btn_delModalCancel" type="button" class="btn btn-default" data-dismiss="modal">
							Close
						</button>
						<button id="btn_delModalDelete" data-name='' type="button" class="btn btn-primary">
							Delete
						</button>
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->