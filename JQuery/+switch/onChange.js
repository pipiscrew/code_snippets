//http://www.bootstrap-switch.org/
//http://stackoverflow.com/questions/18830219/bootstrap-switch-checked-event

		<script type='text/javascript' src='js/bootstrap-switch.min.js'>
		</script>
		
		
$('#page_merge').on('switchChange.bootstrapSwitch', function (event, state) {
	console.log(state); //true false
	
	$("#page_mergeDIV").slideToggle();
}); 


				<div id="page_mergeDIV" class="form-inline" style="display: none;">
					<div class='form-group'>
						<label>
							Page 1 :
						</label>
						<input id="page_one" name="page_one" type="text" class='form-control' placeholder='page one' style="width:400px;">

						<label>
							Page 2 :
						</label>
						<input id="page_two" name="page_two" type="text" class='form-control' placeholder='page two' style="width:400px;">
					</div>
				</div>