//https://www.firebase.com/docs/javascript/firebase/set.html

							bidRef.set({
								'cause_id':selected_id,
								'cause_company_id':$(selected_cause).attr("cause_company_id"),
								'sponsor_id':"<?php echo $jsonArray["company_id"] ?>",
								'when':new Date().getTime()
							}, function(error) {
								   if (error) {
								     alert('Data could not be saved.' + error);
								   } else {
									$.ajax({
										  type: "POST",
										  dataType : 'json', 
										  url: "helper.php",
										  data: {
							                "compID" : "<?php echo $_GET["id"]?>",
							                "userID" : fb_user,
							                "valID" : "<?php echo intval((strtotime(date("Y-m-d H:i")." UTC")-69) * 2) ?>",
							                "isIphone" : -1,
							                "isInform":"0"
							            	},
										  
										  success : function(e) {
										  	console.log("success", e);
										  },							  
										  done : function(e) {
										    console.log( "done",e );
										  },
										  fail : function(e) {
										    console.log( "error",e );
										  },
										  always : function(e) {
										    console.log( "complete",e );
										  }
									});
								    
								  }
							});