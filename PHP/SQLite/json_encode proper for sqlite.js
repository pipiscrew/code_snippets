		$dir = 'sqlite:notes.db';
		$dbh  = new PDO($dir) or die("cannot open the database");
		
		$result = $dbh->query("select Note_ID,GUID,UPD_DATE from notes");
		
		$array = $result->fetchAll( PDO::FETCH_ASSOC );
		echo json_encode( $array );