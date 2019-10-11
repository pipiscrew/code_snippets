//http://stackoverflow.com/questions/7599300/intercept-all-current-and-future-links
//js
				$('#categories').on('click', 'a', function(event) {
					event.preventDefault();

					alert($(this).data('name'));
				});

		//OR

				$('#categories').delegate('a', 'click', function(event) {
				  event.preventDefault();
				  
				  alert($(this).data('name'));
				});
				
//html
		<div id="categories" class="list-group">
			<a class="list-group-item active"> Επιλέξτε κατηγορία : </a>
			<a href="#" class="list-group-item">Dapibus ac facilisis in</a>
			<a href="#" class="list-group-item">Morbi leo risus</a>
			<a href="#" class="list-group-item">Porta ac consectetur ac</a>
			<a href="#" class="list-group-item">Vestibulum at eros</a>
		</div>