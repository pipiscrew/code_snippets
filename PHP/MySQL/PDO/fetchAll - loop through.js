$proposals=null;
///////////////////READ proposals
	$find_sql = "SELECT offer_id,offer_no,offer_date_rec,offer_budget FROM `offers` where company_id= :id order by offer_id";
	$stmt      = $db->prepare($find_sql);
	$stmt->bindValue(':id', $_GET["id"]);
	
	$stmt->execute();
	$proposals = $stmt->fetchAll();
///////////////////READ proposals

$names_row;
foreach($proposals as $row) {
	$names_row .= $row['names'] . ", ";
}

////////////////////////////****OR

//http://php.net/manual/en/pdostatement.fetchall.php

<?php
	$sth = $dbh->prepare("SELECT name, colour FROM fruit");
	$sth->execute();
	
	/* Fetch all of the remaining rows in the result set */
	print("Fetch all of the remaining rows in the result set:\n");
	$result = $sth->fetchAll();
	print_r($result);
	
foreach($rows_sql as $row_key => $row_sql)
{
	for($i = 0; $i < count($table_columns); $i++)
	{

//		if($table_columns[$i] == 'bubbles_id')
//		{
//			$findexternal_sql = 'SELECT `title` FROM `bubbles` WHERE `id` = ?';
//			$findexternal_row = $db->fetchAssoc($findexternal_sql, array($row_sql[$table_columns[$i]]));
//			$rows[$row_key][$table_columns[$i]] = $findexternal_row['title'];
//		}
//		else
		{
			$rows[$row_key][$table_columns[$i]] = $row_sql[$table_columns[$i]];
		}


	}
}

?>


/////implemented
include ('config.php');

$table_columns_caps = array(
	'member_id',
	'fullname',
	'mail',

);

$conn     = connect();

$stmt     = $conn->prepare("select member_id,fullname,mail from votes limit 100");
$stmt->execute();
$rows_sql = $stmt->fetchAll();

$rows     = array();
$x=-1;
foreach($rows_sql as $row_key){
	$x+=1;
	
	for($i = 0; $i < count($table_columns_caps); $i++)
	{
		$rows[$x][$table_columns_caps[$i]] = $row_key[$table_columns_caps[$i]];
	}
	
}

$arr = array('total'=> 800,'rows' => $rows);

header("Content-Type: application/json", true);

echo json_encode($arr);