loading 
		<style type="text/css">
			.modal-backdrop {
				opacity: 0.7;
				filter: alpha(opacity=70);
				background: #fff;
				z-index: 2;
			}

			div.loading {
				position: fixed;
				margin: auto;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				width: 200px;
				height: 30px;
				z-index: 3;
			}
		</style>
		

//js
		<script type="text/javascript">
			var selectedItems = 0;

			//indicator 
			var loading = $('<div class="modal-backdrop"></div><div class="progress progress-striped active loading"><div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">');
			
						$(function() {
						
								$('#categories').on('click', 'a', function(event) {
									event.preventDefault();

				      				loading.appendTo(document.body);	
				      				
									  setTimeout(function() {
									       loading.remove();
									      }, 2000);
				      				});
				      				
						});//jquery ends
						
						
						//somewhere else 
//						loading.remove();


//to appear in modal use :
loading.appendTo($('#formoMAIL'));