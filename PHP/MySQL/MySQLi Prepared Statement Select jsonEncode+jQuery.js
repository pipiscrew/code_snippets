//index.html (jQuery)
			$.ajax({
				type : "POST",
				url : "getResults.php",
				data : "ID=" + "160",
				datatype : "json",
				success : function(result) {
					console.log(result);
				},
					error : function(msg) {
						console.log("error",msg);
					}
			});

//getResults.php
try {
	include ('config.php');

	$db = connect();

	$stmt = $db -> prepare('SELECT * FROM test where test2_id = ? group by test4_id,test5_id');
	
	$p1 = "151";
	
	$stmt -> bind_param('s', $p1); 	//$_POST['ID']);

	$stmt -> execute();

	$result = $stmt -> get_result();

	$returnVAR = array();

	//MYSQLI_NUM = Array items will use a numerical index key.
	//MYSQLI_ASSOC = Array items will use the column name as an index key.
	//MYSQLI_BOTH = [default] Array items will be duplicated, with one having a numerical index key and one having the column name as an index key.
	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		$returnVAR[] = $row;
	}

	//unicode
	header("Content-Type: application/json", true);

	echo json_encode($returnVAR);

} catch (exception $e) {
	echo json_encode(null);
}


//config.php
<?php

function connect() {
	$mysql_hostname = "localhost"; 
	$mysql_user = "coin";
	$mysql_password = "P8";
	$mysql_database = "c3in";

    //setup a connection with mySQL
    $mysqli = new mysqli($mysql_hostname, $mysql_user, $mysql_password,$mysql_database);

    /* check connection */
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
	
	//enable utf8!
	$mysqli -> query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");

    return $mysqli;
}


function getScalar($conne,$sql) {
    if ( $rs = $conne->query($sql) ) {
        $r = $rs->fetch_array();
        $rs->free();
        return $r[0];
    }
    return $def;
}

?>