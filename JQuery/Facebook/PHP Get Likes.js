//http://talkweb.eu/get-number-of-likes-of-yourany-facebook-page-via-php/comment-page-1

require('php-sdk/src/facebook.php');
$facebook = new Facebook(array(
	'appId' => '000000000', // put appID here - see Create section
	'secret' => '0000c000c000c000c', //put your secret key here - see Create section
	));
$zt = $facebook->api('/ZeroTurnaround'); // my Facebook page is http://www.facebook.com/ZeroTurnaround
echo $zt['likes'];