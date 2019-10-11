date functions

<? 
//case 1
$my_time=getdate(date('U'));
echo("$my_time[weekday] $my_time[mday] $my_time[month]  $my_time[year]");
echo "<p>";

//case 2
$today=time();
echo date('d-m-Y', $today);

?>

//UTC on PHP
	date_default_timezone_set("UTC");
	echo date("Y-m-d H:i:s", time());