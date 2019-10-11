//warning take place *on write* + on read
function connect() {
	$mysql_hostname = "localhost";
	$mysql_user = "pp2";
	$mysql_password = "pp";
	$mysql_database = "testDB2";
	
	$dbh = new PDO("mysql:host=$mysql_hostname;dbname=$mysql_database", $mysql_user, $mysql_password);
	
	//enable utf8!
	$dbh->exec("set names utf8");
	
	return $dbh;
}


//OR (tested & working)
$dbh = new PDO("mysql:host=$mysql_hostname;dbname=$mysql_database", $mysql_user, $mysql_password,
                    array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
                    
                    
convert latin text field to utf8
//http://archive.oreilly.com/pub/post/turning_mysql_data_in_latin1_t.html