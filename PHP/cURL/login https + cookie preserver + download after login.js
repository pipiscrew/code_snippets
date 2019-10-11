//http://davidwalsh.name/curl-post

<?php

//set POST variables
$url = 'https://dev.flurry.com/secure/loginAction.do';
$fields = array(
						'loginEmail' => urlencode("usermail"),
						'loginPassword' => urlencode("userpassword")
				);

//url-ify the data for the POST
foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
rtrim($fields_string, '&');

//open connection
$ch = curl_init();

//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_POST, count($fields));
curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_COOKIEFILE, "cookie.txt");
curl_setopt($ch, CURLOPT_COOKIEJAR, "cookie.txt");
curl_setopt($ch, CURLOPT_COOKIESESSION, true);

//execute post
$result = curl_exec($ch);

echo $result;

/////////////////////////////////2nd
$fields_string = "";
$fields2 = array(
						'projectID' => urlencode("470397"),
						'versionCut' => urlencode("versionsAll"),
						'intervalCut' => urlencode("30Days"),
						'eventID' => urlencode("9775478"),
						'stream' => urlencode("true"),
						'direction' => urlencode("1"),
						'offset' => urlencode("0"),
				);
// 				
//url-ify the data for the POST
foreach($fields2 as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
rtrim($fields_string, '&');
// 
	curl_setopt($ch,CURLOPT_URL, "https://dev.flurry.com/eventsLogCsv.do");
	// $ch = curl_init("https://dev.flurry.com/eventsLogCsv.do");
	// curl_setopt($ch,CURLOPT_URL, "https://dev.flurry.com/eventsLogCsv.do?projectID=470397&versionCut=versionsAll&intervalCut=30Days&eventID=9775478&stream=true&direction=1&offset=0");
	// $ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.16 (KHTML, like Gecko) \Chrome/24.0.1304.0 Safari/537.16';
	// curl_setopt($ch, CURLOPT_USERAGENT, $ua);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_REFERER, 'https://dev.flurry.com');
	curl_setopt($ch,CURLOPT_POST, count($fields2));
	curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.6 (KHTML, like Gecko) Chrome/16.0.897.0 Safari/535.6'); 
// curl_setopt($ch, CURLOPT_HEADER, true);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// curl_setopt($ch, CURLOPT_COOKIESESSION, true);


    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// curl_setopt($ch, CURLOPT_HEADER, 0);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
// curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
// curl_setopt($ch, CURLOPT_COOKIESESSION, TRUE);


    $data = curl_exec($ch);

echo "<meta http-equiv='content-type' content='text/html; charset=utf-8'></meta>";
//header("Content-Type: application/json", true);

echo 	"END:".$data;
?>


//tested&working (vs CURLOPT_POSTFIELDS)
//http://stackoverflow.com/questions/16000059/php-curl-and-response-code-302
	curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query( array('projectID' => urlencode("470397"), 'versionCut' => urlencode("versionsAll"), 'intervalCut' => urlencode("30Days"), 'eventID' => urlencode("10370511"), 
	'stream' => urlencode("true"), 'direction' => urlencode("1"), 'offset' => urlencode("0") ) ))