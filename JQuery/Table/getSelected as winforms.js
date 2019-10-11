			//**COMMON** function for child PHP
			// Get the selected row
			function getSelected(selector) {
				var lines=null;
				
				$('#' + selector + ' > tbody  > tr').each(function() {
					if ($(this).hasClass('highlight')) {

						lines = $('td', $(this)).map(function(index, td) {
							return $(td).data('name'); 
						});

						return false;
					}
				});

				return lines;
			}
			
		$('#btn_edit').on('click', function(e) {
			var rowData = getSelected('recordsTBL');
			if (rowData == null) {
				alert("Please select a row!");
				return;
			}

			$("#loading").height($('body').height());
			$("#loading").show();

			$("#companies_details").load('tab_company_details.php?id=' + rowData[0], function() {
				$("#loading").hide();
				$("#companies").hide();
				$("#companies_details").show();
			});
		});
		
//where the td is with data-name attribute
<td data-name='{{isd}}'>{{title}}</td>