//http://stackoverflow.com/questions/5125254/jquery-replace-div-contents-with-html-from-an-external-file-full-example
$("#companies").load('tab_company_details.php');


		$('#btn_new').on('click', function(e) {
			$("#companies").load('tab_company_details.php', function() {
			  alert( "Load was performed." );
			});
		});
		
		
		
	$("#ad_fees_details").load('tab_ad_fees_details.php', function() {
		$("#loading").hide();
		$("#ad_fees").hide();
		$("#ad_fees_details").show();
	});