			//when combo city change
			$('[name=company_city_id]').on('change', function()
				{
					$.ajax(
						{
							url : 'tab_client_users_details_get_by_city.php',
							dataType : 'json',
							type : 'POST',
							data :
							{
								"valid" : $("#company_city_id").val(),
							},
							success : function(data)
							{
								//update the child combos
								setComboItems("company_area_id",data.areas);
								setComboItems("company_muni_id",data.muni);
								setComboItems("company_tax_office_id",data.tax);
							},
							error : function(e)
							{
								alert("error");
							}
						});
				});

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
			
//PHP
<?php
session_start();

//include ('Debug.php');
//
////Catch
//Debug::register();

if(!isset($_SESSION["u"]))
{
	header("Location: index.html");
	exit ;
}

include ('92nNE1WK_config.php');

if(!isset($_POST["valid"]))
{
	echo json_encode(null);
	return;
}

$colWhereVAL         = $_POST["valid"];


$conn                = connect();

$areas               = getRowsFromTablesWhere($conn,"city_areas","city_area_id","city_area_title","city_area_city_id", $colWhereVAL);
$muni                = getRowsFromTablesWhere($conn,"city_municipalities","city_muni_id","city_muni_title","city_muni_city_id", $colWhereVAL);
$tax                 = getRowsFromTablesWhere($conn,"tax_offices","tax_office_id","tax_office_title","tax_office_city_id", $colWhereVAL);

$conn -> close();

$json                = array('areas'=> $areas,'muni' => $muni,'tax'  => $tax);

header("Content-Type: application/json", true);

echo json_encode($json);



function getRowsFromTablesWhere($conn, $tbl,$colID,$colDESCR, $colWHERE, $colWhereValue)
{
	$recordset;

	if($stmt = $conn -> prepare('select '.$colID.' as ID, '.$colDESCR.' as DESCR from '.$tbl.' where '.$colWHERE.'='.$colWhereValue.' order by '.$colDESCR)){
		$stmt -> execute();

		$result = $stmt -> get_result();


		$x      = 0;
		$recordset;

		while($row = $result -> fetch_assoc())
		{
			$recordset[$x] = $row;
			$x += 1;
		}

		$stmt -> close();

	}
	else
	$recordset = 'select '.$colID.' as ID, '.$colDESCR.' as DESCR from '.$tbl.' where '.$colWHERE.'='.$colWhereValue.' order by '.$colDESCR;

	return $recordset;
}


