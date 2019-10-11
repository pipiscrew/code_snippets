//http://www.the-art-of-web.com/php/dataexport/
//http://www.the-art-of-web.com/dataexport1.phps
//author : http://www.chirp.com.au/

<?php

require_once("config.php");

if (!isset($_POST["country"]) || !isset($_POST["speciality"]) ||  !isset($_POST["member_type"])){
	die("error 6x9568");
}

$db = connect();

$country = $_POST["country"];
$speciality = $_POST["speciality"];
$member_type = $_POST["member_type"];


$wh = "";
if ($country>0)
	$wh = "where members.country_id={$country}"; 

if ($member_type>0)
{
	if (strlen($wh)>0)
		$wh.= " and ";
	else 
		$wh.= " where ";
		
	$wh .= " members.member_type_id={$member_type} "; 
}

if (strlen($speciality)>0)
{
	if (strlen($wh)>0)
		$wh.= " and ";
	else 
		$wh.= " where ";
		
	$wh .= " specialization like '%{$speciality}%' "; 
}	


if ($stmt = $db -> prepare("select member_id,concat(first_name, ' ', last_name , ' ', middle_name) as fullname,email,member_type_name, country_name, phone1, phone2, special_title, specialization, special_field_interest, website, facebook, twitter, date_created, date_approved
from members 
left join member_types on member_types.member_type_id = members.member_type_id 
left join countries on countries.country_id = members.country_id {$wh} order by fullname")) {

		$stmt->execute($params);

		$db_set = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
		
function cleanData(&$str)
{
	$str = preg_replace("/\t/", "\\t", $str);
	$str = preg_replace("/\r?\n/", "\\n", $str);
	if(strstr($str, '"')) $str = '"' . str_replace('"', '""', $str) . '"';
}

// file name for download
$filename = "website_data_" . date('Ymd') . ".xls";

header("Content-Disposition: attachment; filename=\"$filename\"");
header("Content-Type: application/vnd.ms-excel");

$flag = false;
foreach($db_set as $row) {
	if(!$flag) {
	  // display field/column names as first row
	  echo implode("\t", array_keys($row)) . "\n";
	  $flag = true;
	}
	array_walk($row, 'cleanData');
	echo implode("\t", array_values($row)) . "\n";
}
