//http://stackoverflow.com/a/2332688
//example today
echo date('Y-m-d', strtotime("+30 days"));

<?php
	$Date = "2010-09-17";
	echo date('Y-m-d', strtotime($Date. ' + 1 days'));
	echo date('Y-m-d', strtotime($Date. ' + 2 days'));
?>

//And it outputs correctly:
//2010-09-18
//2010-09-19


//http://stackoverflow.com/a/20902030
$time = strtotime('2001-11-14 -3 years -7 months -5 days');
echo $date = date("Y-m-d", $time);