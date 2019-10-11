//https://stackoverflow.com/a/16120026
	foreach($tables as $tbl) {
		$stmt = $dbase->prepare('SHOW COLUMNS FROM ' . current($tbl));