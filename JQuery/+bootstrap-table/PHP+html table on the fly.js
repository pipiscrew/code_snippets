<?php
// include DB
require_once ('config.php');

$db             = connect();


$proposals = null;
///////////////////READ Proposals
$proposals = getSet($db,"select offer_id, DATE_FORMAT(offer_date_rec,'%d-%m-%Y') as date_created, users.fullname as user,gen_total,
       CASE offer_type
           WHEN 1 THEN 'New'
           WHEN 2 THEN 'Update'
           WHEN 3 THEN 'Renewal'
           ELSE 'unknown'
       END AS offer_type
       from offers
left join users on users.user_id = offers.offer_seller_id
where company_id=? order by offer_date_rec DESC", array($_GET['id']));
///////////////////READ Proposals

?>

<script>
    $(function() {
					 ///////////////////////////////////////////////////////////// FILL proposals grid
					 var jArray_proposals =   <?php echo json_encode($proposals); ?>;

					 var combo_proposals_rows = "";
					 for (var i = 0; i < jArray_proposals.length; i++)
					 {
					 	combo_proposals_rows += "<tr><td></td><td>" + jArray_proposals[i]["offer_id"] + "</td><td>" + jArray_proposals[i]["date_created"] + "</td>" +
					 	"<td>" + jArray_proposals[i]["user"] + "</td><td>" + jArray_proposals[i]["gen_total"] + "</td><td>" + jArray_proposals[i]["offer_type"] + "</td></tr>";
					 }

					 $("#lead_proposals_rows").html(combo_proposals_rows);
					 ///////////////////////////////////////////////////////////// FILL proposals grid



					 $("#lead_proposals_tbl").bootstrapTable();


					 $('#btn_lead_proposals_edit').on('click', function(e)
					 	{
					 		e.preventDefault();

					 		var row = $('#lead_proposals_tbl').bootstrapTable('getSelections');

					 		if (row.length>0)
					 		{
					 			console.log(row[0].id);
					 		}
					 		else
					 		alert("Please select a row");
					 	})

	})//jQuery ends here
	
</script>
		
<br/>
		<div class="container">
				<button id="btn_lead_proposals_new" class="btn btn-success" type="submit" name="submit">
					New
				</button>

				<button id="btn_lead_proposals_edit" type="button" class="btn btn-primary">
					Edit
				</button>
				<button id="btn_lead_proposals_delete" type="button" class="btn btn-danger">
					Delete
				</button>

<br>
		
			<table id="lead_proposals_tbl"
	           data-striped=true data-click-to-select="true" data-single-select="true">
				<thead>
					<tr>
						<th data-field="state" data-checkbox="true" ></th>
						<th data-field="id" data-visible="false">ID</th>
						<th data-sortable="true">Created</th>
						<th data-sortable="true">Seller</th>
						<th data-sortable="true">Total Cost</th>
						<th data-sortable="true">Type</th>
					</tr>
				</thead>

				<tbody id="lead_proposals_rows"></tbody>
			</table>
			</div>