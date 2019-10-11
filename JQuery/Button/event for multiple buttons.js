//on grid (dynamic created buttons)
				$(document).on("click", '#btn_del, #btn_delCAT, #btn_delCAUSECAT, #btn_delCAUSE, #btn_delCOMPANY, #btn_delCOUNTRY', function(e) {
					alert("You trying to use PRO feature functionality which is not enabled");
				});
				
//static
				$('#btn_del, #btn_delCAT, #btn_delCAUSECAT, #btn_delCAUSE, #btn_delCOMPANY, #btn_delCOUNTRY').on('click', function(e) {
					alert("You trying to use PRO feature functionality which is not enabled");
				});