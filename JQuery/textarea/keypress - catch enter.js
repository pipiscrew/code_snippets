				$(document).on("keypress", "#comment", function(e) {
					if (e.keyCode == 13) {
						if ($('#comment').val().length == 0)
							return;
							
						alert($('#comment').val());
					}
				});
				
//special for modals (aka dont close on enter)
					$('#base_sku').on('keypress', function(e) {
						if (e.keyCode == 13) {
							e.preventDefault();
							
							if ($('#base_sku').val().length == 0)
								return;
								
							alert($('#base_sku').val());
						}
					});