				$('#reg').on('click', function(e) {
					e.preventDefault();
					console.log(e);
					var str = "episodes.html?event=" + e;
					window.location = (str);
					$(this).hide();
				});
				
				
				$('#btn_dn_file_prop_approval').on('click', function(e) {
					e.preventDefault();
					window.location= "tab_leads_details_proposal_approval_download.php?OFFERS2bFORM_client_updateID=<?= $_GET['id'] ?>&OFFERS2bFORM_updateID=" + $("#OFFERS2bFORM_updateID").val();
				});