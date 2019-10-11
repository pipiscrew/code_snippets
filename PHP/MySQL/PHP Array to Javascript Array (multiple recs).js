<?php
session_start();

if (!isset($_SESSION["u"])) {
	header("Location: index.html");
	exit ;
}

include ('92nNE1WK_config.php');

$conn = connect();

///////////////////READ CATEGORIES
$stmt = $conn -> prepare('select categ_id,categ_path from adbook_categories order by categ_path');

$stmt -> execute();

$result = $stmt -> get_result();
$categories;
$x = 0;

while ($row = $result -> fetch_assoc()) {
	$categories[$x] = $row;
	$x += 1;
}

$stmt -> close();
///////////////////READ CATEGORIES


///////////////////READ SPEFIC RECORD
if (isset($_GET["id"])) {
	$stmt = $conn -> prepare('SELECT * FROM adbook_companies WHERE companyid = ?');
	$stmt -> bind_param('s', $_GET["id"]);

	$stmt -> execute();

	$result = $stmt -> get_result();

	$row = $result -> fetch_assoc();

	$stmt -> close();
}
///////////////////READ SPEFIC RECORD

$conn -> close();

?>

<script type="text/javascript">
	///////////////////////////////////////////////////////////// FILLCATEGORIES
	var jArrayCATS = <?php echo json_encode($categories); ?>;
	console.log(jArrayCATS);
	var combo_rows="";
    for (var i=0; i<jArrayCATS.length; i++){
        combo_rows += "<option value='" + jArrayCATS[i]["categ_id"] + "'>" + jArrayCATS[i]["categ_path"] + "</option>";
    }
    
    $("#categ_id1, #categ_id2, #categ_id3, #categ_id4").html(combo_rows);
    
    
    
//html
				<div class='form-group'>
					<label>Κατηγορία 1 :</label>
					<select id="categ_id1" name='categ_id1' class='form-control'></select>
				</div>