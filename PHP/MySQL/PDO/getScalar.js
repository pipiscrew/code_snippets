//http://stackoverflow.com/questions/18702772/pdo-bind-param-is-undefined-method
//http://stackoverflow.com/questions/1666710/fetching-single-row-single-column-with-pdo

//the call
$r = getScalar($db, "SELECT COUNT(user_id) FROM users WHERE email=? AND password=?", array($_POST['email'], $_POST['pass']));

if ($r > 0)
	var_dump($r);
else
	echo "jj";

//the call2
getScalar($conn, $count_query_sql, array(':searchTerm' => '%'.$_GET["search"].'%'));

//the call3
//when nothing returned		
$open_session_id = getScalar($db, "select user_working_hour_id from user_working_hours where date_end is null and user_id=? order by user_working_hour_id DESC limit 1",array($user_id));

if(!$open_session_id)
	echo "boo";


function getScalar($db, $sql, $params) {
	if ($stmt = $db -> prepare($sql)) {

		$stmt->execute($params);

		return $stmt->fetchColumn();
	} else
		return 0;
}

//http://stackoverflow.com/questions/10929047/how-to-avoid-mysql-injections-using-pdo
$stmt = $dbh->prepare("SELECT * FROM tables WHERE names = :name");
$stmt->execute(array(':name' => $name));