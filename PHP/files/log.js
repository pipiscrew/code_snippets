<?php

date_default_timezone_set("UTC");
write_log('start '.implode("|",$_GET));
.
.
function write_log($val){
	$f = fopen('log_visitors.txt', 'a');

	fwrite($f, $_SERVER['REMOTE_ADDR'].' - '.date('Y-m-d H:i:s').' - '.$val."\r\n");
	fclose($f);
}

//using 'a' append or create the file

//OR

<?php

date_default_timezone_set("UTC");

try {
	//log
	$info = gethostbyaddr($_SERVER['REMOTE_ADDR']);

	if ($info && $_SERVER['REMOTE_ADDR']) {
		$myfile = fopen("log.txt", "a");// or die("Unable to open file!");
		fwrite($myfile, date("Y-m-d H:i:s") . " -- {$_SERVER['REMOTE_ADDR']} -- " . $info . "\r\n");
		fclose($myfile);
	}
	//log	
} catch (Exception $e) {
	
	
}

?>

//set chmod 600 to log.txt file
//chmod($myfile, 0600);