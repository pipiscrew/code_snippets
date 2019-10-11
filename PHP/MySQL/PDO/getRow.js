getRow($db, "SELECT * FROM users WHERE mail=? AND password=?", array($_POST['email'], $_POST['pass']));

function getRow($db, $sql, $params) {
	if ($stmt = $db -> prepare($sql)) {

		$stmt->execute($params);

		return $stmt->fetch();
	} else
		return 0;
}

//read as $r['fullname'];

//when no row returned
	$open_session_id = getRow($db, "select user_working_hour_id from user_working_hours where date_end is null and user_id=? order by user_working_hour_id DESC limit 1",array($user_id));
	
	if(!$open_session_id)
		echo "boo";

//OR
function getRow($db, $sql, $params) {
	if ($stmt = $db -> prepare($sql)) {

		$stmt->execute($params);

		$row = $stmt->fetchAll(PDO::FETCH_ASSOC);

		return $row[0];
	} else
		return null;
}