<?php
header('Content-Type: text/html; charset=utf-8');

$dbhost = "localhost";
$dbname = "x";
$dbuser = "x";
$dbpass = "x";

$db     = new PDO('mysql:host=' .$dbhost .  ';dbname='.$dbname, $dbuser, $dbpass,
	array(PDO::MYSQL_ATTR_INIT_COMMAND=> "SET NAMES 'utf8'"));

$sth = $db -> prepare("select fullname from votes where member_id<282") or die("cannot open the database");
$sth->execute();
$result = $sth->fetchAll();

header("Content-Type: application/json", true);
//var_dump ($result);
echo jsonRemoveUnicodeSequences($result);


function jsonRemoveUnicodeSequences($struct) {
   return preg_replace("/\\\\u([a-f0-9]{4})/e", "iconv('UCS-4LE','UTF-8',pack('V', hexdec('U$1')))", json_encode($struct));
}

?>