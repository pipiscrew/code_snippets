//http://stackoverflow.com/questions/1519872/pdo-looping-throug-and-printing-fetchall

function getSet($db, $sql, $params) {
	if ($stmt = $db -> prepare($sql)) {

		$stmt->execute($params);

		return $stmt->fetchAll();
	} else
		return 0;
}

$rows = getSet($db, "select * from namedays where day=?", array($m));
foreach($rows as $row) {
	$names_row .= $row['names'] . ", ";
}
