
//when field is date
getScalar($db,"update users set last_logon=? where user_id=?", array(date("Y-m-d"), $r['user_id']));


//when field is datetime
getScalar($db,"update users set last_logon=? where user_id=?", array(date("Y-m-d H:i:s"), $r['user_id']));
//or you can use mySQL function
//http://stackoverflow.com/questions/9541029/insert-current-date-in-datetime-format-mysql
mysql_query("INSERT INTO `table` (`dateposted`) VALUES (now())");

function getScalar($db, $sql, $params) {
	if ($stmt = $db -> prepare($sql)) {

		$stmt->execute($params);

		return $stmt->fetchColumn();
	} else
		return 0;
}
