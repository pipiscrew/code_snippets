//html
		<div id="client_appointments_users" class="list-group centre"></div>

//js
			function fill_APPOINTMENTS_Users(jAr){
				var cats = "<a class='list-group-item active'> Participants : </a>";

				for (var i = 0; i < jAr.length; i++)
					cats += "<a href='#' class='list-group-item' data-name='" + jAr[i]["user_id"] + "'>" + jAr[i]["fullname"] + "</a>";
				

				//set result-rows to companies
				$("#client_appointments_users").html(cats);	
			}
			

			function getSelectedParticipants()
			{
//working old method
//				var arr = new Array();
//
//				$('#client_appointments_users').children('a').each(function()
//					{
//						if ($(this).hasClass('list-group-item active'))
//						if ($(this).attr('data-name'))
//						arr.push($(this).attr('data-name'));
//					});
//
//				return arr;

				var arr = new Array();
				
				$('#client_appointments_users').children('a').filter(function(){
				    return $(this).attr('data-name')!=null;
				}).each(function(){
				    arr.push($(this).attr('data-name'));
				});

				return arr;
			}
			
					//reset users list
					function reset_users_list(){
						$('#client_appointments_users').children('a').filter(function(){
					       return $(this).attr('data-name')==null;
						}).siblings().removeClass('list-group-item active').addClass('list-group-item');
					}
					
					var jArray_appointmentUSERS = <?php echo json_encode($rows_appointmentUSERS); ?>;
					
					if (jArray_appointmentUSERS)
						fill_APPOINTMENTS_Users(jArray_appointmentUSERS);
						
			$(function ()
				{
					var jArray_appointmentUSERS = <?php echo json_encode($rows_appointmentUSERS); ?>;
					
					if (jArray_appointmentUSERS)
						fill_APPOINTMENTS_Users(jArray_appointmentUSERS);
						
					//a item clicked from list
					$('#client_appointments_users').on('click', 'a', function(event) {
						event.preventDefault();
						
						if (!$(this).attr('data-name'))
							return;

						if ($(this).hasClass('list-group-item active')) {
							$(this).removeClass('list-group-item active');
							$(this).addClass('list-group-item');
						} else {
							$(this).addClass('list-group-item active');
						}
					});

			
			


				    ////////////////////////////////////////
				    // MODAL FUNCTIONALITIES [START]
				    //when modal closed, hide the warning messages + reset
				    $('#modalCLIENT_APPOINTMENTS').on('hidden.bs.modal', function() {
				        //when close - clear elements
				        $('#formCLIENT_APPOINTMENTS').trigger("reset");
				 
				 		//reset users list
				 		reset_users_list();
				 		
				        //clear validator error on form
				        validatorCLIENT_APPOINTMENTS.resetForm();
				        
				        
				    });
				    
			});	