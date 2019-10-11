

function getScalar($db, $sql, $params) {
	if ($stmt = $db -> prepare($sql)) {
		$types = str_repeat('s', count($params));
		bind_param_array($stmt, $types, $params);
		
		$stmt -> execute();
		$result = $stmt->get_result();
		
		//$r = $result->fetch_row(); //complete row
		$r = $result->fetch_array();
		
		$stmt -> close();
		
		return $r[0];
	} else
		return 0;
}