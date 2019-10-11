<?php
	$pay_methods = getSet($db, "select * from transaction_methods",null);
?>
	$(function (){
		
			///////////////////////////////////////////////////////////// FILL pay_methods
			var jArray_pay_methods =   <?php echo json_encode($pay_methods); ?>;

			var combo_pay_methods = "<option value='0'></option>";
			for (var i = 0; i < jArray_pay_methods.length; i++)
			{
				combo_pay_methods += "<option value='" + jArray_pay_methods[i]["transaction_method_id"] + "'>" + jArray_pay_methods[i]["transaction_method_name"] + "</option>";
			}

			$("[name=pay_method]").html(combo_pay_methods);
			$("[name=pay_method]").change(); //select row 0 - no conflict on POST validation @ PHP
			///////////////////////////////////////////////////////////// FILL pay_methods
	});
	
	<div class='form-group'>
		<label>Method :</label>
		<select name='pay_method' class='form-control'>
		</select>
	</div>