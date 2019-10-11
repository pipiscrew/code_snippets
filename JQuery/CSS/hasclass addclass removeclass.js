				$('#companies').on('click', 'a', function(event) {
					event.preventDefault();

					if ($(this).hasClass('list-group-item active')) {
						$(this).removeClass('list-group-item active');
						$(this).addClass('list-group-item');
					} else
						$(this).addClass('list-group-item active');
				});