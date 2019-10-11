//http://stackoverflow.com/questions/1853094/how-to-get-the-columns-names-along-with-resultset-in-php-mysql

	$returnVAR = array();
	$columns = array();
	
	$resultSET = $db -> query("select * from contests;", MYSQLI_STORE_RESULT);
	
	 while($row = $resultSET->fetch_array(MYSQLI_ASSOC)) {
	    if (empty($columns)) {
	        $columns = array_keys($row);
	    }
	
	 	// echo $row;
	 	// dump_r($row);
	 	$returnVAR[] = $row;
	 }