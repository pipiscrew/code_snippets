//JS
					 var get_selected_participants = getSelectedParticipants();

					 if (get_selected_participants.length==0)
					 {
					 	alert("Please choose participants!");
					 	return;
					 }


	//the serialization
					    var postData = $(this).serializeArray();
					    var formURL = $(this).attr("action");
					    
	//add item!
						postData.push({name: "participants", value : JSON.stringify(get_selected_participants)});





			function getSelectedParticipants()
			{

				var arr = new Array();

				$('#client_appointments_users').children('a').each(function()
					{
						if ($(this).hasClass('list-group-item active'))
						if ($(this).attr('data-name'))
						arr.push($(this).attr('data-name'));
					});

				return arr;
			}
			
//PHP
	$arr = json_decode($_POST['participants'],true);
	
	foreach ($arr as $userID) {
		echo $userID;
	}