/////////////////////////////////////////////////////////////////////////////////////
// 			SETUP MYSQL CONNECTION [START]
/////////////////////////////////////////////////////////////////////////////////////
$mysql_hostname = "localhost";
$mysql_user = "lamptc_adbook";
$mysql_password = "Q6VBN5fo";
$mysql_database = "lamptc_adbook";

//setup a connection with mySQL
$db = new mysqli($mysql_hostname, $mysql_user, $mysql_password, $mysql_database);

/* check connection */
if (mysqli_connect_errno()) {
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
}

//enable utf8!
$db -> query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");

/////////////////////////////////////////////////////////////////////////////////////
// 			SETUP MYSQL CONNECTION [END]
/////////////////////////////////////////////////////////////////////////////////////

if (!$db) {
	die("Connection error: " . mysqli_connect_error());
}

$rows_affected = 0;

//create the prepared statement
if ($stmt = $db -> prepare($statement)) {

    //bind our params
	$params = array( "one", "two" );
	$types  = str_repeat( 's', count( $params ));

    bind_param_array( $stmt, $types,$params);

	$stmt -> execute();
	
	$rows_affected = $stmt -> affected_rows;

	if ($rows_affected == -1)
		{
			echo "error";
			
			//close the statement
			$stmt -> close();
	
			return;
		}

	
	//close the statement
	$stmt -> close();
}

//close connection
$db -> close();

echo $rows_affected;

//http://no2.php.net/manual/en/mysqli-stmt.bind-param.php#115028
function bind_param_array( $stmt,  $types,  $vars ){
    $php_command = '$stmt->bind_param( $types';
    for( $i=0;$i<count($vars);$i++)
    {
        $php_command .= ',$vars['.$i.']';
    }
    $php_command .= ');';
    return eval( $php_command );
}