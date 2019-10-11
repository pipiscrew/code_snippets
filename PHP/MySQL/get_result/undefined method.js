//http://php.net/manual/en/mysqli-stmt.get-result.php
	get_result() supported only when *mysql native driver* is enable

//example get_result() - with prepared statement
	include ('92nNE1WK_config.php');
	
	$conn = connect();
	
	$stmt = $conn->prepare('SELECT * FROM mattel_companies WHERE companyid = ?');
	$stmt->bind_param('s', $_GET["id"]);
	
	$stmt->execute();
	
	$result = $stmt->get_result();
	
	$row=$result->fetch_assoc();

	$stmt->close();
	
	
//example without using get_result()
//without use of native driver the row cant contain the field names
//only by custom procedure like -> http://php.net/manual/en/mysqli-stmt.fetch.php
	if ($stmt = $db -> prepare("SELECT category_id FROM categories WHERE category_id = ?")) {
		$stmt->bind_param('s',$test);
		$test=3;
		$stmt -> execute();
		
		//select must contains only the 1 field, otherwise will var_dump null, when using more than 1 field :
		//$stmt->bind_result($f1,$test,$uu); 
		$stmt->bind_result($f1); 
		
		//while ($stmt->fetch())
		//{ OR for single
		$stmt->fetch();
		$stmt -> close();
		
		var_dump($f1);
	}
