//foreach@tr http://stackoverflow.com/questions/10431987/jquery-each-loop-in-table-row
//foreacg@td http://stackoverflow.com/questions/5991011/getting-all-the-table-td-values-into-array

			// Get the selected row
			function getSelected(selector) {
				var lines=null;
				
				$('#' + selector + ' > tbody  > tr').each(function() {
					if ($(this).hasClass('highlight')) {

						lines = $('td', $(this)).map(function(index, td) {
							return $(td).text();
						});

						return false;
						//return lines;
						//alert(lines[0] + ' ' + lines[1]);

						//alert($(this).html());
					}
				});

				return lines;
			}
			
			$(function() {


				$('#btn_EditPRODUCTS').on('click', function(e) {
					alert(getSelected('productsTBL'));
				});
				
			});