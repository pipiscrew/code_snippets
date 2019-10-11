//http://stackoverflow.com/questions/10929047/how-to-avoid-mysql-injections-using-pdo

//name prepared
$stmt = $dbh->prepare("SELECT * FROM tables WHERE names = :name");
$stmt->execute(array(':name' => $name));

//questionmark prepared
$stmt = $dbh->prepare("SELECT count(*) FROM users WHERE mail=? AND password=?");
$stmt->execute(array($_POST['email'], $_POST['pass']));