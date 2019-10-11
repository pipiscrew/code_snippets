references
http://learn.jquery.com/plugins/basic-plugin-creation/
http://stackoverflow.com/a/16504147 | http://jsfiddle.net/Meligy/s2wN4/
http://www.sitepoint.com/how-to-develop-a-jquery-plugin/
http://www.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/

//bootstrap-chooser.js
(function( $ ) {
 
    $.fn.getSelected = function() {
			var arr = new Array();
			
			this.children('a').filter(function(){
			    return $(this).attr('data-name')!=null && $(this).hasClass('list-group-item active');
			}).each(function(){
			    arr.push($(this).attr('data-name'));
			});

			return arr;
    };
 
    $.fn.setSelected = function(jsonArray, idColName){
			for (var i = 0; i < jsonArray.length; i++)
				this.children('a').each( function(index, element){
					if ($(this).attr('data-name')==jsonArray[i][idColName])
					{	
						$(this).addClass('list-group-item active');
						return false; //exit for each
					}
				});
	}
	
    $.fn.fillList = function(jsonArray, header, idColName,DescrColName) {
    	
				var cats = "<a class='list-group-item active'> " + header + " : </a>";

				for (var i = 0; i < jsonArray.length; i++)
					cats += "<a href='#' class='list-group-item' data-name='" + jsonArray[i][idColName] + "'>" + jsonArray[i][DescrColName] + "</a>";
				
				//set result-rows to element
				this.html(cats);	
    };
    
    $.fn.clearList = function() {
			this.children('a').filter(function(){
		       return $(this).attr('data-name')==null;
			}).siblings().removeClass('list-group-item active').addClass('list-group-item');
    };
 
}( jQuery ));

$.fn.chooser = function() {
        $(this).on('click', 'a', function(event) {
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
        
}

//js

			$(function ()
				{
				    //attach the event
					$('#client_appointments_users').chooser();
					
					var jArray_appointmentUSERS = <?php echo json_encode($rows_appointmentUSERS); ?>;
					
					//filllist
					if (jArray_appointmentUSERS)
						$("#client_appointments_users").fillList(jArray_appointmentUSERS,"Participants", "user_id", "fullname");
						
				    //when modal closed, hide the warning messages + reset
				    $('#modalCLIENT_APPOINTMENTS').on('hidden.bs.modal', function() {
				        $('#formCLIENT_APPOINTMENTS').trigger("reset");
				 
				 		//reset users list
				 		$("#client_appointments_users").clearList();
				 	});
				 	
				 	

					////////////////////////////////////////
					// MODAL SUBMIT aka save & update button
					$('#formCLIENT_APPOINTMENTS').submit(function(e) {
					    e.preventDefault();
					 
					    ////////////////////////// validation
					    var form = $(this);
					    form.validate();
					 
					    if (!form.valid())
					        return;
					    ////////////////////////// validation
					 
					 //get selected from list
					 var get_selected_participants = $("#client_appointments_users").getSelected();
					 
					 if (get_selected_participants.length==0)
					 {
					 	alert("Please choose participants!");
					 	return;
					 }
				 
					    var postData = $(this).serializeArray();
					    var formURL = $(this).attr("action");
						
						//merge selected to serialized array
						postData.push({name: "participants", value : JSON.stringify(get_selected_participants)});

					 	//set is lead or not 
					 	//when loaded from *tab_leads_details.php*
					 	//the is_lead = 1 otherwise is_lead=0
					 	$("#client_appointment_is_lead").val(is_lead);
					 	
					    //close modal
					    $('#modalCLIENT_APPOINTMENTS').modal('toggle');
					 
					    $.ajax(
					    {
					        url : formURL,
					        type: "POST",
					        data : postData,
					        success:function(data, textStatus, jqXHR)
					        {
					            if (data=="00000")
									//refresh
									loadAPPOINTMENTSrecs();
					            else
					                alert("ERROR");
					        },
					        error: function(jqXHR, textStatus, errorThrown)
					        {
					            alert("ERROR - connection error");
					        }
					    });
					});

				});
						
				//edit button - read record 
				function query_CLIENT_S_modal(rec_id){
					$.ajax(
					{
						url : "x_fetch.php",
						type: "POST",
						data : { x_id : rec_id },
						success:function(dataO, textStatus, jqXHR)
						{
							if (dataO!='null')
							{
								var data = dataO.appointment; //the record [ONE]
								var dataP = dataO.participants; // the details-record [MANY] (aka appear on chooser)
								
								//** USE of - select the values from DBASE^
								$("#client_s_users").setSelected(dataP,"user_id")
								
								$('#modalCLIENT_S').modal('toggle');
							}
							else
								alert("ERROR - Cant read the record.");
						},
						error: function(jqXHR, textStatus, errorThrown)
						{
							alert("ERROR");
						}
					});
				}
				
				
		//x_fetch.php ends as :
		$json = array('appointment'=> $r,'participants' => $x);
		echo json_encode($json);