				$('#btn_expotTXT').on('click', function(e) {
					$('#companies').children('a').each(function() {
						if ($(this).hasClass('list-group-item active'))
							if ($(this).attr('data-name'))
								console.log($(this).attr('data-name'));
						// alert(this.value); // "this" is the current element in the loop
					});
				});