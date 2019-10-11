//http://www.staroneweb.co.in/simple-effective-encrypt-decrypt-with-php/


//www.example.com?id=4 would be something like
//
//www.example.com?id=NA==

//crypt
$u_id=(double)$_GET['id'] * 525325.24;

$id=base64_encode($u_id);

//on second page decrypt
$u_id=base64_decode($_GET['id']);

$id=(double)$u_id / 525325.24;



////////////////////////////////////////////2nd way


//javascript
	var d = <?= intval((strtotime(date("Y-m-d H:i")." UTC")-69) * 2) ?>;

//php
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