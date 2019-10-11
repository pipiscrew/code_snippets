//general.php
<?php  
/**
* @link https://pipiscrew.com
* @copyright Copyright (c) 2016 PipisCrew
*/
 
function connect_mysql() {
    $mysql_hostname = "localhost";
    $mysql_user = "";
    $mysql_password = "";
    $mysql_database = "test"; 
     
    $dbh = new PDO("mysql:host=$mysql_hostname;dbname=$mysql_database", $mysql_user, $mysql_password, 
  array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
  ));
 
  return $dbh;
}
function connect_oracle() {
	//enable ext - php_pdo_oci.dll
	//src - http://stackoverflow.com/a/36639484 -- https://www.devside.net/wamp-server/connect-wamp-server-to-oracle-with-php-php_oci8_11g-dll
	$server         = "127.0.0.1";
	$db_username    = "SYSTEM";
	$db_password    = "Oracle_1";
	$sid            = "ORCL";
	$port           = 1521;
	$dbtns          = "(DESCRIPTION=(ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = {$server})(PORT = {$port})))(CONNECT_DATA=(SID={$sid})))";
	$dbh = new PDO("oci:dbname=" . $dbtns . ";charset=utf8", $db_username, $db_password, array(
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_EMULATE_PREPARES => false,
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC));
		
	 return $dbh;
}
function connect() {
    //if doesnt exist, will created.
    $dbh = new PDO('sqlite:dbase.db');
	//$dbh->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	//check if table has records, if not create table
	$d = getScalar($dbh, "select count(*) from users",null);
	if ($d==0)
	{
		executeSQL($dbh, "CREATE TABLE [users] (user_id INTEGER PRIMARY KEY, user_mail TEXT, user_password TEXT, user_level INTEGER)", null);
		executeSQL($dbh, "your other tables here?",null);
		
		//read&write only server (user cant download the dbase)
		chmod("dbase.db", 0600);
	}
	//check if table has records, if not create table
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
 
//        return $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $stmt->fetchAll();
    } else
        return 0;
}
 
function executeSQL($db, $sql, $params) {
    if ($stmt = $db -> prepare($sql)) {
 
        $stmt->execute($params);
 
        return $stmt->rowCount();
    } else
        return false;
}
?>

////
//sample.php
<?php
 
require_once("config_pdo.php");
 
$db = connect_mysql();
 
$user_id = 3;
$a = 1;
$names ="";
 
//example 1
$rows = getSet($db, "select * from users where user_id>? and user_is_active=?", array($user_id,$a)); //always pass as array, when not have parameters pass plain null
 
foreach($rows as $row) {
    $names .= $row['user_name'] . ", ";
}
 
//example 2
$field = = getScalar($db, "select user_working_hour_id from user_working_hours where date_end is null and user_id=? order by user_working_hour_id DESC limit 1",array($user_id));
 
if(!$field ) //when the variable is not filled
    echo "error";
else
    echo $field;
 
//example 3
$row = getRow($db, "select * from user_working_hours where date_end is null and user_id=? order by user_working_hour_id DESC limit 1",array($user_id));
     
if(!$row)  //when the variable is not filled
    echo "error";
else
    echo $r["user_working_hours_start"];