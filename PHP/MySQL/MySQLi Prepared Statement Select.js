//MySQL Native Driver (mysqlnd) driver must be enabled
//http://stackoverflow.com/questions/60174/how-can-i-prevent-sql-injection-in-php
//http://php.net/manual/en/mysqli-stmt.get-result.php

	$stmt = $dbConnection->prepare('SELECT * FROM employees WHERE name = ?');
	$stmt->bind_param('s', $name);
	
	$stmt->execute();
	
	$result = $stmt->get_result();
	
		while ($row = $result->fetch_assoc()) {
		    // do something with $row
		}
	
	$stmt->close();


//http://stackoverflow.com/questions/8321096/call-to-undefined-method-mysqli-stmtget-result/11135291#11135291
//if the MySQL Native Driver (mysqlnd) driver is not available, and therefore using bind_result and fetch instead of get_result

	$query = 'SELECT EmailVerified, Blocked FROM users WHERE Email = ? AND SLA = ? AND `Password` = ?';
	
	$stmt = $conn->mysqli->prepare($query);
	
	$stmt->bind_param('sss', $_POST['EmailID'], $_POST['SLA'], $_POST['Password']);
	
	$stmt->execute();
	$stmt->bind_result($EmailVerified, $Blocked);
	
	while ($stmt->fetch())
	{
	   /* Use $EmailVerified and $Blocked */
	}
	
	$stmt->close();
	
	
//get one column result with *bind_result*
		$count=0;
		$stmt = $db -> prepare("SELECT COUNT(DISTINCT video) AS count FROM VIDEOS");
        $stmt->execute();
        $stmt->bind_result($district);
        $stmt->fetch();
        $count =$district;