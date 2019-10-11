	$fields_string = "";
	$fields2 = array('message' => urlencode($title), 'registrationIDs' => urlencode("$android_id"));

	//url-ify the data for the POST
	foreach ($fields2 as $key => $value) {
		$fields_string .= $key . '=' . $value . '&';
	}
	rtrim($fields_string, '&');
	//

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "http://x.com/sponsors/pushANDROID.php");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_REFERER, 'http://contests4causes.com');
	curl_setopt($ch, CURLOPT_POST, count($fields2));
	curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.6 (KHTML, like Gecko) Chrome/16.0.897.0 Safari/535.6');

	$data = curl_exec($ch);
	echo $data;