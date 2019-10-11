//nodeJS
	request({
		method : 'POST',
		uri : 'http://contests4causes.com/sponsorsDEV/pushANDROID.php',
		headers : {
			'content-type' : 'application/json'
		},
		form :{
			"message" : "hello from nodeJS",
			"registrationIDs" : "APA91bFiDbWa0Xo9XlyBMXPahF_PnwSsWwEiRpj1_BRx3ILv1PXA26Ep4M9kjfj4dlGhBZhv9Pp6WPYVV1B3UpHyiFYDqmNdUxogdQ2hRvJNPHNbUpGILWY7VJCbrX-wxqUZg177lx3MeZW8q_56hkh1zk8xySGK0A"
		}
		
	}, function(error, response, body) {
		console.log(body);
	});
	
	
//////////////php
<?php
// 
// if($_SERVER["HTTP_REFERER"] != "http://sponsors.contests4causes.com/portal.php"){
	// // echo json_encode(null);
		// echo json_encode("boo");
	// return;
// }

echo json_encode($_POST["message"]);

if(!isset($_POST["message"]) || !isset($_POST["registrationIDs"])){
	echo json_encode(null);
	return;
}

echo json_encode("2");

//Google Cloud Server-API key
$apiKey = "AIzaSyALdfAIOgrbm8qTQ7ulxbqMXMSkpKcICjc";

//Google GCM Server
$url = 'https://android.googleapis.com/gcm/send';

//message to be send
$message = $_POST['message'];

//device IDs
$devices = $_POST['registrationIDs'];

//split mobile ids to an array
$devicesIDs = explode(',', $devices);

//count the element @ devicesIDs array
$devicesCount = sizeof($devicesIDs);

//the limit is 1000per googlePOST
//when deviceIDs > 900
//at least extent @ 1800, l8r we write a proc also
if ($devicesCount > 900) {
	//part1	
	push2devices(0, 900);
	
	//part2
	push2devices(901, $devicesCount - 901);
} else {
	//send to all
	push2devices(0, $devicesCount);
}

function push2devices($from, $to) {
	//read the public vars inside function
	global $apiKey, $url, $message, $devicesIDs;

	//create a new array via parameters
	$registrationIDs = array_slice($devicesIDs, $from, $to);
	
	$fields = array('registration_ids' => $registrationIDs, 
					'data' => array("message" => $message), );

	$headers = array('Authorization: key=' . $apiKey, 'Content-Type: application/json');

	// Open connection
	$ch = curl_init();

	// Set the url, number of POST vars, POST data
	curl_setopt($ch, CURLOPT_URL, $url);

	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));

	// Execute post
	$result = curl_exec($ch);

	// Close connection
	curl_close($ch);

	echo $result;
}
?>

