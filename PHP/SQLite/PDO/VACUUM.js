//http://www.php.de/datenbanken/60984-sqlite3-und-vacuum-authorization-denied.html
	$dbh = new PDO('sqlite:dbase.db3');
	
	if (date('d')==31)
	{	
		$dbh->exec("VACUUM");
		echo "VACUUM done!";
		exit;
	}