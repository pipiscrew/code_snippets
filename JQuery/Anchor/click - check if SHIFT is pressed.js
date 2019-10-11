				$('#subcategories').on('click', 'a', function(event) {
					event.preventDefault();

					//user select/unselect sub-categories
					
					//clicked with shift pressed!
					if (event.shiftKey) {
						if ($(this).hasClass('list-group-item active')) {
							$(this).removeClass('list-group-item active');
							$(this).addClass('list-group-item');
							selectedItems -= 1;
						} else {
							$(this).addClass('list-group-item active');
							selectedItems += 1;
						}

						//infrom user for selected
						$('#selectedSUBCAT').html(selectedItems);
						return;
					}

					//show indicator
					loading.appendTo(document.body);

					// subCatID = $(this).data('name');

					fillSUBCategoriesList($(this).data('name'));

				});