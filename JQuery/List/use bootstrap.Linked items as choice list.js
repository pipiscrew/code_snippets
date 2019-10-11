//we using bootstrap Linked items
http://getbootstrap.com/components/#list-group-linked

//html
		<div id="companies" class="list-group centre"></div>
		

//js
			var selectedItems = 0;

			$(function() {

				//a item clicked from list
				$('#companies').on('click', 'a', function(event) {
					event.preventDefault();

					if ($(this).hasClass('list-group-item active')) {
						$(this).removeClass('list-group-item active');
						$(this).addClass('list-group-item');
						selectedItems -= 1;
					} else {
						$(this).addClass('list-group-item active');
						selectedItems += 1;
					}
					
					//infrom user for selected
					$('#selected').html(selectedItems);
				});
				
				// find selected aka export as txt
				$('#exportTXT').on('click', function(e) {
					event.preventDefault();

					//here holds the select values id
					var companies_ids = ",";
					$('#companies').children('a').each(function() {
						if ($(this).hasClass('list-group-item active'))
							if ($(this).attr('data-name'))
								companies_ids += $(this).attr('data-name') + ",";
						// alert(this.value); // "this" is the current element in the loop
					});
					
				//select all items
				$('#selectall').on('click', function(e) {
					e.preventDefault();

					selectedItems = 0;
					$('#companies').children('a').each(function() {
						if ($(this).attr('data-name')) {
							$(this).addClass('list-group-item active');
							selectedItems += 1;
						}
					});
					
					//infrom user for selected
					$('#selected').html(selectedItems);
				});

				//unselect all items
				$('#unselectall').on('click', function(e) {
					e.preventDefault();

					$('#companies').children('a').each(function() {
						if ($(this).attr('data-name')) {
							$(this).removeClass('list-group-item active');
							$(this).addClass('list-group-item');
						}
					});

					selectedItems = 0;
					//infrom user for selected
					$('#selected').html(selectedItems);
				});
				
//how to fill
				var cats = "<a class='list-group-item active'> Επιλέξτε εταιρίες : </a>";

				for (var it = 0; it < e.length; it++) {
					cats += "<a href='#' class='list-group-item' data-name='" + e[it]["companyid"] + "'>" + e[it]['comp_title'] + "</a>";
				}

				//set result-rows to companies
				$("#companies").html(cats);