echo date("Y-m-d H:i:s");


//valid for mySQL
date("Y-m-d H:i:s");


//flurry2mysql date
	$dateTime = date_create_from_format('F d Y h:i a', $tmp);
 
	$field[0] = date_format($dateTime, 'Y-m-d G:i')
	

//to specific GMT
//see zones @ http://php.net/manual/en/timezones.php
<?php
date_default_timezone_set('Europe/Athens');

$dt = date("Y-m-d O H:i:0");
echo $dt
?>


//OR
//http://stackoverflow.com/a/7276617
$date = new DateTime();
$date->setTimezone(new DateTimeZone('UTC'));

$fdate = $date->format('Y-m-d H:i:s'); // same format as NOW()

$query = "INSERT INTO tbl (field, created_on) VALUES ('blah', '$fdate')";
mysqli_query($query)