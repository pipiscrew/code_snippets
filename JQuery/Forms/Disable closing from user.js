//http://stackoverflow.com/questions/9894339/disallow-twitter-bootstrap-modal-window-from-closing

$('#myModal').modal({
  backdrop: 'static',
  keyboard: false
})

+ the close button
$("#company_details_change_password").hide();


//http://stackoverflow.com/questions/16152073/prevent-bootstrap-modal-from-disappearing-when-clicking-outside-or-pressing-esca
//data-backdrop="static" to click out 
//data-keyboard="false" to Esc in your div modal

//or direct to modal html tag 
	<div class="modal fade" id="modaloCOMPETITION" data-backdrop="static" data-keyboard="false"
	
//or to anchor call
	<a data-toggle="modal" href="#modaloCOMPETITION" class="btn btn-default" data-backdrop="static" data-keyboard="false">
		New
	</a>