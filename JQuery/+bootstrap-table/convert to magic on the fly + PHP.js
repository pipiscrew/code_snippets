<?php

//config defined @ tab_proposal.php
// include DB
require_once ('config.php');

$db             = connect();

$templates  = null;

///////////////////READ templates
$templates = getSet($db, "select offers_mail_template_id, template_subject, LEFT(template , 30)  from offers_mail_templates", null);
///////////////////READ templates
?>

<!-- bootstrap 3.0.2 -->
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<!--Bootstrap Table-->
<link href="css/bootstrap-table.min.css" rel="stylesheet" type="text/css" />

<!-- jQuery 2.0.2 -->
<script src="js/jquery.min.js" type="text/javascript"></script>
<!-- Bootstrap -->
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<!--Bootstrap Table-->
<script src="js/bootstrap-table.min.js" type="text/javascript"></script>
    
<script type="text/javascript">

	$(function() {
		
	var template_rows = <?php echo json_encode($templates); ?>;
	
		//when has templates
		if (template_rows)
		{
			var rows ="";
			
			for (var i = 0; i < template_rows.length; i++)
			{
				rows+="<tr><td></td><td>" + template_rows[i]["offers_mail_template_id"] + "</td><td>" + template_rows[i]["template_subject"] + "</td><td>" + template_rows[i]["template"] + "</td></tr>";
			}
			
			$("#templates_rows").html(rows);
			
			//convert2magic!
			$("#templates_tbl").bootstrapTable();
		}
		
	});//jQ ends
		
</script>

<table id="templates_tbl"
   data-striped=true data-click-to-select="true" data-single-select="true">
    <thead>
        <tr>
            <th data-field="state" data-checkbox="true"></th>
            <th data-field="id" >ID</th>
            <th data-field="template_subject">Subject</th>
            <th data-field="template">Template Body</th>
 
        </tr>
    </thead>
 
    <tbody id="templates_rows"></tbody>
</table>

