//PHP to Javascript variable
var d = <?= strtotime(date("Y-m-d H:i")." UTC") ?>;

//PHP to Javascript variable scramble UTC
var d = <?= intval((strtotime(date("Y-m-d H:i")." UTC")-69) * 2) ?>;

//use on server side with scramble UTC
<?php

session_start();

//check host!
if ($_SERVER["HTTP_HOST"] != "contests4causes.com") {
	echo json_encode(null);
	exit ;
}

//check if contains valid vars!
if (!isset($_POST["t"]) && !isset($_POST["e"]) && !isset($_POST["pass"]) && !isset($_POST["passNew"])) {
	echo json_encode(null);
	exit ;
}

//convert server time to UTC long!
$now = strtotime(date("Y-m-d H:i") . " UTC");
$now = (($now - 69) * 2);

//60seconds back to avoid conflict with user relaxation!
//@ js setted when page load
$nowINT = intval($now) - 60;

//the UTC posted by user!
$nowPOST = $_POST["t"];

if ($now == $nowPOST) {
	//echo json_encode($nowPOST . "\r\n" . $now . " is equal");
} else if ($nowINT == $nowPOST) {
	//echo json_encode($nowPOST . "\r\n" . $nowINT . " is equal-60");
} else {	echo "60seconds passed! please try again!";
	return;
}

//convert POST variables to Javascript VARS!
echo '<script type="text/javascript" language="javascript"> var e="' . $_POST["e"] . '"; var pass="' . $_POST["pass"] . '"; var passNew="' . $_POST["passNew"] . '"; </script>';
?>