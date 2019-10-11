'Quite often you may have a date or time (or both) from a MySQL database that you need in mktime format for using with the date() function. The functions below do this for you.

function timestampdate($date) {
$aDate = explode("-",$date);
$datetime = mktime(0, 0, 0, $aDate[1], $aDate[2], $aDate[0]);
return $datetime;
}

function timestamptime($time) {	
$aTime = explode(":",$time);
$datetime = mktime($aTime[0], $aTime[1], $aTime[2], 1, 1, 2007);
return $datetime;
}

function timestampboth($date, $time) {
$aDate = explode("-",$date);
$aTime = explode(":",$time);
$datetime = mktime($aTime[0], $aTime[1], $aTime[2], 
$aDate[1], $aDate[2], $aDate[0]);
return $datetime;
}
