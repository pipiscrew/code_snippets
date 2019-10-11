<?php

try {

	$db = connect_mysql();
	
}
catch (Exception $e)
{
	//echo  $e->getMessage();
	die("E1x83457");
}

$r = getSet($db,"select push_title, SUBSTRING(push_text, 1, 100) as push_text, user_count, date_created from pushes order by date_created DESC", null);

?>

		<script src="assets/jquery-1.12.2.min.js">
		</script>
		<script src="assets/bootstrap.min.js">
		</script>
					
		<table class="table-striped" style="width:100%">
		    <thead>
			    <tr>
			    	<th>Devices</th>
			        <th>Push Title</th>
			        <th>Push Text (first 100chars)</th>
			        <th>Date Created</th>
			    </tr>
		    </thead>
		    <tbody id="tbl_rows">
		    </tbody>
		</table>

		
		<script>
			var jArray =   <?php echo json_encode($r); ?>;

			var tbl_rows = "";
			for (var i = 0; i < jArray.length; i++)
			{
				tbl_rows += "<tr><td>" + jArray[i]["user_count"] + "</td><td>" + jArray[i]["push_title"] + "</td><td>" + jArray[i]["push_text"] + "</td><td>" + jArray[i]["date_created"] + "</td></tr>";
			}
			
			$("#tbl_rows").html(tbl_rows);
		</script>
		
		