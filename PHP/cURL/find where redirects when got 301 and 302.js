//http://kyleyu.com/?q=node/356

//Normally you would set the following cURL option to follow a redirect:
//Unfortunately this doesn't always work. Either due to a server misconfiguration 
//or a 301 response that is ignored, sometimes cURL will just spit out a "1" instead 
//of the contents of the page you're fetching.

curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

function get_furl($url) {
	$furl = false;
	// First check response headers
	$headers = get_headers($url);
	// Test for 301 or 302
	if (preg_match('/^HTTP\/\d\.\d\s+(301|302)/', $headers[0])) {
		foreach ($headers as $value) {
			if (substr(strtolower($value), 0, 9) == "location:") {
				$furl = trim(substr($value, 9, strlen($value)));
			}
		}
	}
	// Set final URL
	$furl = ($furl) ? $furl : $url;
	return $furl;
}

//usage :
$url = get_furl('http://www.example.com/');
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 2);
$contents = curl_exec($ch);
curl_close($ch);
echo $contents;