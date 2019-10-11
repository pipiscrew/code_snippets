//http://stackoverflow.com/a/23571595/1320686
				$('#modal_time').on('shown.bs.modal', function() {
					$(this).animate({
						scrollTop : 0
					}, 'slow');
					
					$(this).find('input:text:visible:first').focus();
				});