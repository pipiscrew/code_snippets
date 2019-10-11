<?php
 
//used for defined array, used on functions
class RECORD {
public $date_rec;
public $sessionID;
public $event_name;
public $app_version;
public $app_platform;
public $device;
public $user_id;
public $json_params;
}
 
//global cURL
$ch;
 
//global mySQL
$mysqli;
 
login_flurry();
 
get_event_TEST($ch, $mysqli);
 
//close connection
$mysqli -> close();
echo "<br><br> mysqli -> connection closed!";
 
curl_close($ch);
echo "<br><br> curl -> closed!";
 
 
//login to flurry with your real credentials!
function login_flurry() {
		global $ch;
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// LOGIN TO FLURRY [START]
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//set POST variables
	$url='https://dev.flurry.com/secure/loginAction.do';
	$fields=array('loginEmail'=>urlencode("x@x.gr"),'loginPassword'=>urlencode("xx"));
	//url-ify the data for the POST
	foreach($fields as $key=>$value) { $fields_string.=$key.'='.$value.'&';
	}
	rtrim($fields_string,'&');
	//open connection
	$ch=curl_init();
	//set the url, number of POST vars, POST data
	curl_setopt($ch,CURLOPT_URL,$url);
	curl_setopt($ch,CURLOPT_POST,count($fields));
	curl_setopt($ch,CURLOPT_POSTFIELDS,$fields_string);
	curl_setopt($ch,CURLOPT_FOLLOWLOCATION,true);
	curl_setopt($ch,CURLOPT_COOKIEFILE,"cookie.txt");
	curl_setopt($ch,CURLOPT_COOKIEJAR,"cookie.txt");
	curl_setopt($ch,CURLOPT_COOKIESESSION,true);
	//execute post
	$result=curl_exec($ch);
	// echo $result; //when 1 success, otherwise loading for 1000years!
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// LOGIN TO FLURRY [END]
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
 
//fetch event data like when click to download the CSV
function get_event_TEST($ch, $mysqli) {
	/////////////////////////////////2nd
	$fields_string = "";
	$fields2 = array('projectID' => urlencode("x"), 'versionCut' => urlencode("versionsAll"), 'intervalCut' => urlencode("30Days"), 'eventID' => urlencode("y"), 'stream' => urlencode("true"), 'direction' => urlencode("1"), 'offset' => urlencode("0"), );
 
	//url-ify the data for the POST
	foreach ($fields2 as $key => $value) {
		$fields_string .= $key . '=' . $value . '&';
	}
	rtrim($fields_string, '&');
	//
 
	curl_setopt($ch, CURLOPT_URL, "https://dev.flurry.com/eventsLogCsv.do");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_REFERER, 'https://dev.flurry.com');
	curl_setopt($ch, CURLOPT_POST, count($fields2));
	curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.6 (KHTML, like Gecko) Chrome/16.0.897.0 Safari/535.6');
 
	$data = curl_exec($ch);
 
	echo "<meta http-equiv='content-type' content='text/html; charset=utf-8'></meta>";
 
	////////////////////////< VA PROC >////////////////////////////////////////////
	$ListOfRECS = extract_rows_2_structured_array($data);
	////////////////////////< VA PROC >////////////////////////////////////////////
 
	//prepare statement for bulk insert! facebook+twitter fields by default set 0 from mySQL
	//call procedure
if ($stmt = $mysqli -> prepare("call FL_TEST (?, ?, ?, ?, ?, ?, ?, ?);")) {
 
	//bind our params
	$stmt -> bind_param('ssssssss', $user_id, $company_id, $season_id, $country, $title, $dt, $session_index, $platform);
 
		echo "MYSQL start<br>";
 
 
		//@ zero position is the CSV header
		for ($x = 1; $x <= sizeof($ListOfRECS); $x++) {
 
			if ($ListOfRECS[$x] -> sessionID == null)
				continue;
 
			////////////////////////< VA PROC >////////////////////////////////////////////
			$json = clean_and_decode_json_pass2($ListOfRECS[$x] -> json_params);
			////////////////////////< VA PROC >////////////////////////////////////////////
 
			/* Set our params */
			$dt = $ListOfRECS[$x] -> date_rec;
			$session_index = $ListOfRECS[$x] -> sessionID;
			$platform = $ListOfRECS[$x] -> app_platform;
 
			$user_id = $json -> user_id;
			$company_id = $json -> company_id;
			$season_id = $json -> season_id;
			$country = $json -> country;
			$title = $json -> title;
 
			/* Execute the prepared Statement */
			$stmt -> execute();
	
			$g = $stmt->affected_rows;
	 
			if ($g == -1)
				echo $g." - something wrong!<br>";
			else
				echo $$g." - Inserted<br>";
		}
 
		//close the statement
		$stmt -> close();
 
 
		echo "<br> ^3.TEST EVENT -- all imported!<br><br><br>";
 
	}
}
 
function clean_json_pass1_clean_date($row) {
 
	//1st field is the date contains from FLURRY comma, validate that exists on specific position and replace it!
	if (substr($row, 7, 1) == ",")
		$row = substr($row, 0, 7) . substr($row, 8);
 
	////////////////////////////////////////////////////// from row, remove from json field the commas!!
	$jsonStartPOS = strpos($row, "{");
	$jsonEndPOS;
 
	if ($jsonStartPOS !== FALSE) {
 
		$jsonEndPOS = strrpos($row, "}");
 
		if ($jsonStartPOS !== FALSE) {
 
			//slice till json field start
			$tmp = substr($row, $jsonStartPOS);
 
			//replace commas!!
			$tmp = str_replace(",", " ", $tmp);
 
			//replace double spaces after^^
			// $tmp = str_replace("  ", " ", $tmp);
 
			//slice rowline till { and merge the json from variable!!!
			$row = substr($row, 0, $jsonStartPOS) . $tmp . ",";
		}
	}
	////////////////////////////////////////////////////// from row, remove from json field the commas!!
 
	$field = explode(",", $row);
 
	////////////////////////////////////////////////////////////////////////////try to parse the date!
	//remove queotes from date!!!!!!!
	$tmp = substr($field[0], 1, strlen($field[0]) - 2);
 
	$dateTime = date_create_from_format('F d Y h:i a', $tmp);
 
	$field[0] = date_format($dateTime, 'Y-m-d G:i');
 
	//when fails return null!
	if ($tmp == null)
		$field[0] = date("Y-m-d H:i:s");
	// "is null";
	////////////////////////////////////////////////////////////////////////////try to parse the date!
 
	return $field;
}
 
function clean_and_decode_json_pass2($json_field) {
	////////////////////////////////////////////////////////// 	MAKE IT VALID JSON [START]
	//CSVoriginal =
	//		{ title : testVariable;  country : GR}
	// == is not valid should be :
	//		{ "title" : "testVariable", "country" : "GR"}
	//otherwise json_decode no work!
 
	//clean json from double quotes
	$json_field = str_replace('"', '', $json_field);
 
	$json_field = str_replace('{ ', '{ "', $json_field);
	$json_field = str_replace(' : ', '" : "', $json_field);
	$json_field = str_replace(';  ', '" , "', $json_field);
	$json_field = str_replace('}', '"}', $json_field);
	////////////////////////////////////////////////////////// 	MAKE IT VALID JSON [END]
 
	return json_decode($json_field);
}
 
function extract_rows_2_structured_array($apiResponse) {
 
	$rows = explode(PHP_EOL, $apiResponse);
 
	$ListOfRECS = array(RECORD);
	$rec;
 
	//for each line
	for ($x = 1; $x <= sizeof($rows); $x++) {
 
		$field = clean_json_pass1_clean_date($rows[$x]);
 
		$rec = new RECORD();
		$rec -> date_rec = $field[0];
		$rec -> sessionID = $field[1];
		$rec -> event_name = $field[2];
		$rec -> app_version = $field[4];
		$rec -> app_platform = $field[5];
		$rec -> device = $field[6];
		$rec -> user_id = $field[7];
		$rec -> json_params = $field[8];
 
		//add to array!
		$ListOfRECS[] = $rec;
	}
 
	return $ListOfRECS;
}
?>