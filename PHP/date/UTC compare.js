//compare UTC raw and give 120sec diff
$server_utc = strtotime(date("Y-m-d H:i") . " UTC");
$user_utc   = $secret2;

//server has wrong time, as result mobile is always greater than server
try {
	$calc = intval($server_utc) - intval($user_utc);	
}
catch (Exception $e){
	$calc = 121;
}

//when negative (^server has wrong time)
$calc = abs($calc);

if ($calc > 120)
	die("5648934");
	
	
	

//compare UTC (convert to date) and check only DATE
$secret = 1455366420;
$server_utc = date("Y-m-d", strtotime(date("Y-m-d")." UTC"));
$user_utc = date("Y-m-d", $secret2);

if ($server_utc!=$user_utc)
	die("E0x5648934\r\n{$calc}\r\n{$user_utc}");
	
	
	