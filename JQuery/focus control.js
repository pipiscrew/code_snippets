//html
<input id="passNew" type="password" class="form-control" 
placeholder="New Password" autofocus>

//or
		<script type="text/javascript">
			$(function() {

				$('#comment').focus();
				
				
//focus a control when modal shown
//http://stackoverflow.com/questions/11634809/twitter-bootstrap-focus-on-textarea-inside-a-modal-on-click

	$('#myModal').on('shown', function () {
	    $('#textareaID').focus();
	})