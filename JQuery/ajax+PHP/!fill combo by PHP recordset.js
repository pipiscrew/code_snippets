<?php

$content_users = getSet($db,"select * from users",null);

?>


	$(function() {
		///////////////////////////////////////////////////////////// FILL users
		var jArray_users =   <?php echo json_encode($users_rows); ?>;

		if(jArray_users){
			var combo_users_rows = "<option value='0'></option>";
			for (var i = 0; i < jArray_users.length; i++)
			{
				combo_users_rows += "<option value='" + jArray_users[i]["user_id"] + "'>" + jArray_users[i]["fullname"] + "</option>";
			}
	
			//checkbox when stored as int
			if (data["card3_send_ppl_website"]==1)
				$('[name=card3_send_ppl_website').prop('checked',true);
			
			//checkbox when stored as string (aka if the field has value)
			if (jArray_users["card1_q3a"])
				$('[name=card1_q3a]').prop('checked',true);
			}
			
		$("[name=account_executive_id]").html(combo_users_rows);
		$("[name=account_executive_id]").change();
		///////////////////////////////////////////////////////////// FILL users
	});