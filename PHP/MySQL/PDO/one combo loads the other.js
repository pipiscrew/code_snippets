
		refresh_SubSector_by_SectorVAL(jArray[0]["client_sector_sub_id"]);
	}
	///////////////////////////////////////////////////////////// EDIT RECORD\
	
			//when combo sector change
			$('[name=client_sector_id]').on('change', function()
				{
					refresh_SubSector_by_SectorVAL();
				});
				
	});
	//jquery ends
	
	function refresh_SubSector_by_SectorVAL(sub_sector)
	{
		var sub_sector_id;
		sub_sector_id = sub_sector;
		
		
		$.ajax(
			{
				url : 'tab_leads_details_get_by_city.php',
				dataType : 'json',
				type : 'POST',
				data :
				{
					"valid" : $("#client_sector_id").val(),
				},
				success : function(data)
				{
					setComboItems("client_sector_sub_id",data.recs);

					if (sub_sector_id)
					{	$('[name=client_sector_sub_id]').val(sub_sector_id);
					
						if (sub_sector_id!= 0 && $('[name=client_sector_sub_id]').val()==null)
							alert("Sub Sector record cant be found!");
						
					}	
						

				},
				error : function(e)
				{
					alert("error");
				}
			});
	}
	
	function setComboItems(ctl_name, jArray)
	{
		var combo_rows = "<option value='0'></option>";
		for (var i = 0; i < jArray.length; i++)
		{
			combo_rows += "<option value='" + jArray[i]["ID"] + "'>" + jArray[i]["DESCR"] + "</option>";
		}

		$("[name=" + ctl_name + "]").html(combo_rows);
		$("[name=" + ctl_name + "]").change();
	}
	
	
	
//html
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Sub Sector :</label>
					<select id="client_sector_sub_id" name='client_sector_sub_id' class='form-control'>
					</select>
				</div>
			</div>


			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Source :</label>
					<select id="client_source_id" name='client_source_id' class='form-control'>
					</select>
				</div>
			</div>
			
//tab_leads_details_get_by_city.php
	<?php
	session_start();

	if (!isset($_SESSION["u"])) {
		header("Location: admin.html");
		exit ;
	}


	//include ('../../Debug.php');
	//
	////Catch
	//Debug::register();

	// include DB
	require_once ('config.php');

	if(!isset($_POST["valid"]))
	{
		echo json_encode(null);
		return;
	}


	$colWhereVAL         = $_POST["valid"];


	$conn                = connect();

	$recs               = getSet($conn,"select client_sector_sub_id as ID, client_sector_sub_name as DESCR from client_sector_subs where client_sector_id=?",array($colWhereVAL));

	$json                = array('recs'=> $recs);

	header("Content-Type: application/json", true);

	echo json_encode($json);
	
	
//config.php
	<?php
	function connect() {
		$mysql_hostname = "localhost";
		$mysql_user = "x";
		$mysql_password = "x";
		$mysql_database = "x";
		
		$dbh = new PDO("mysql:host=$mysql_hostname;dbname=$mysql_database", $mysql_user, $mysql_password);
		
		//enable utf8!
		$dbh->exec("set names utf8");
		
		return $dbh;
	}
	
	function getScalar($db, $sql, $params) {
		if ($stmt = $db -> prepare($sql)) {
	
			$stmt->execute($params);
	
			return $stmt->fetchColumn();
		} else
			return 0;
	}
	
	function getRow($db, $sql, $params) {
		if ($stmt = $db -> prepare($sql)) {
	
			$stmt->execute($params);
	
			return $stmt->fetch();
		} else
			return 0;
	}
	
	function getSet($db, $sql, $params) {
		if ($stmt = $db -> prepare($sql)) {
	
			$stmt->execute($params);
	
			return $stmt->fetchAll();
		} else
			return 0;
	}
	
	
	?>