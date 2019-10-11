//PHP
function make_offer_at_nodeJS($comp_ID, $user_ID)
{
	$fields_string = "";
	$fields2 = array('comp_id' => urlencode($comp_ID), 'user_id' => urlencode($user_ID));

	//url-ify the data for the POST
	foreach ($fields2 as $key => $value) {
		$fields_string .= $key . '=' . $value . '&';
	}
	rtrim($fields_string, '&');
	//

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "http://contests.azurewebsites.net/contest");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	// curl_setopt($ch, CURLOPT_REFERER, 'http://contests4causes.com');
	curl_setopt($ch, CURLOPT_POST, count($fields2));
	curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
	// curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	// curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.6 (KHTML, like Gecko) Chrome/16.0.897.0 Safari/535.6');

	$data = curl_exec($ch);
	
	if (!isNULL($data))
	{
		$json = json_decode($data);
	
		return $json->message;
	}
	else 
		return null;
}

//nodeJS
//for contest bid
app.use(express.urlencoded());
app.use(express.json());

app.post('/contest', function(req, res) {

	/////////////////////////////////////////////////////////// VALIDATE NEEDED VARS [start]
	// var comp_id = "-JNrLgYdwDgFl9xHgEfn";
	// var user_id = "123";

	var comp_id = req.body.comp_id;
	var user_id = req.body.user_id;

	if (comp_id == undefined || user_id == undefined) {
		sendO("ERROR 01010101");
		return;
	}
});