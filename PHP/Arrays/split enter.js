$rows = explode(PHP_EOL, $data);


for ($x=0; $x <= sizeof($rows); $x++){
	//1st field is the date contains from FLURRY comma, validate that exists on specific position and replace it!
	if (substr($rows[$x], 7,1)==",")
		$rows[$x] = substr($rows[$x], 0,7) . substr($rows[$x], 8) ;
	
	$line = explode(",", $rows[$x]);
}