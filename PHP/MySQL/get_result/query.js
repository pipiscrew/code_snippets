function connect() {
	$mysql_hostname = "localhost";
	$mysql_user = "x";
	$mysql_password = "x";
	$mysql_database = "x";

	//setup a connection with mySQL
	$mysqli = new mysqli($mysql_hostname, $mysql_user, $mysql_password, $mysql_database);

	/* check connection */
	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}

	//enable utf8!
	$mysqli -> query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");

	return $mysqli;
}

$db = connect();
$res = $db->query('SELECT category_id,category_name FROM categories');
var_dump($res->fetch_row());