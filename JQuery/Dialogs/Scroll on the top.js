//http://stackoverflow.com/questions/17180621/jquery-scroll-to-top-of-bootstrap-modal

		//functionality when the modal already shown and its long
		//when reloaded scroll to top
		$('#modalPRODUCTS').on('shown.bs.modal', function() {
			$(this).animate({
				scrollTop : 0
			}, 'slow');
		});

                
//
<!-- NEW CUSTOMER MODAL [START] -->
<div class="modal fade" id="newCustomer" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">