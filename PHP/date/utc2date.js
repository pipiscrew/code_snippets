//http://stackoverflow.com/a/9849447/1320686

//utc
$time = strtotime($dateWithTimeZone);

//convert to datetime
$dateInLocal = date("Y-m-d H:i:s", $time);