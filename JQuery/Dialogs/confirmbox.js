                ///////////////////////
                //toolbar - log out user
                $('#logout, #logout2').on('click', function(e) {

                    getConfirm('Are you sure?', function(result) {
                        if (result) {
                            setTimeout(function() {
                                var auth = new FirebaseSimpleLogin(eventsRef, function(error, user) {
                                    auth.logout();
                                });

                                window.location = "http://www.google.com";
                            }, 1000);

                        }
                    });

                });
                

                function getConfirm(confirmMessage, callback) {
                    confirmMessage = confirmMessage || '';

                    $('#confirmbox').modal({
                        show : true,
                        backdrop : true,
                        keyboard : false,
                    });

                    $('#confirmMessage').html(confirmMessage);
                    $('#confirmFalse').click(function() {
                        $('#confirmbox').modal('hide');
                        if (callback)
                            callback(false);

                    });
                    $('#confirmTrue').click(function() {
                        $('#confirmbox').modal('hide');
                        if (callback)
                            callback(true);
                    });
                }
                

		<!-- confirm logoff-->
		<div id="confirmbox" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body" >
						<h3  id="confirmMessage"></h3>
						<button id="confirmTrue" class="btn btn-lg btn-primary">
							yes
						</button>
						<button id="confirmFalse" class="btn btn-lg btn-success" data-dismiss="modal">
							no
						</button>
					</div>
				</div>
			</div>
		</div>