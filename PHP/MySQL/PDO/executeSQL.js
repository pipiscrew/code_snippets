//usage
executeSQL($db,"update users set last_logon=? where user_id=?", array(date("Y-m-d H:i:s"), $user_id));

function executeSQL($db, $sql, $params) {
	if ($stmt = $db -> prepare($sql)) {

		$stmt->execute($params);

		return $stmt->rowCount();
	} else
		return false;
}