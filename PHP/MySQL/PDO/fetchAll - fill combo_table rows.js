////******************//////////////////// FOR COMBO

$tax_offices_rows=null;
///////////////////READ tax_offices
	$find_sql = "SELECT * FROM `tax_offices` order by tax_office_name";
	$stmt      = $db->prepare($find_sql);
	
	$stmt->execute();
	$tax_offices_rows = $stmt->fetchAll();
///////////////////READ tax_offices

	///////////////////////////////////////////////////////////// FILL tax_offices
	var jArray_tax_offices =   <?php echo json_encode($tax_offices_rows); ?>;

	var combo_tax_offices_rows = "<option value='0'></option>";
	for (var i = 0; i < jArray_tax_offices.length; i++)
	{
		combo_tax_offices_rows += "<option value='" + jArray_tax_offices[i]["tax_office_id"] + "'>" + jArray_tax_offices[i]["tax_office_name"] + "</option>";
	}

	$("[name=tax_office_id]").html(combo_tax_offices_rows);
	$("[name=tax_office_id]").change(); //select row 0 - no conflict on POST validation @ PHP
	///////////////////////////////////////////////////////////// FILL tax_offices
	
	
////******************//////////////////// FOR TABLE

$proposals=null;
///////////////////READ proposals
	$find_sql = "SELECT offer_id,offer_no,offer_date_rec,offer_budget FROM `offers` order by offer_id";
	$stmt      = $db->prepare($find_sql);
	
	$stmt->execute();
	$proposals = $stmt->fetchAll();
///////////////////READ proposals


	///////////////////////////////////////////////////////////// FILL proposals
	var jArray_proposals =   <?php echo json_encode($proposals); ?>;

	var combo_proposals = "";
	for (var i = 0; i < jArray_proposals.length; i++)
	{
		combo_proposals += "<tr><td>" + jArray_proposals[i]["offer_id"] + "</td><td>" + jArray_proposals[i]["offer_no"] + "</td><td>" + jArray_proposals[i]["offer_date_rec"] + "</td><td>" + jArray_proposals[i]["offer_budget"] + "</td></tr>";
	}

	$("#proposal_tbl_rows").html(combo_proposals);
	///////////////////////////////////////////////////////////// FILL proposals
	
	<table id='proposal_tbl' class="table table-striped" >
	
		<thead>
			<tr>
				<th tabindex="0" rowspan="1" colspan="1">DBASE ID</th>
				<th tabindex="0" rowspan="1" colspan="1">Proposal ID</th>
				<th tabindex="0" rowspan="1" colspan="1">Date</th>
				<th tabindex="0" rowspan="1" colspan="1">Budget</th>
			</tr>
		</thead>
	
		<tbody id="proposal_tbl_rows"></tbody>
	</table>