$dbopts           = parse_url(getenv('DATABASE_URL'));

$arr = array(
    'hostname' =>  $dbopts["host"],
    'user' => $dbopts["user"],
    'password' => $dbopts["pass"],
    'database' => ltrim($dbopts["path"],'/'));
    
//https://stackoverflow.com/a/10189346/1320686
$post_fields = "";
foreach($arr as $key=>$field){
    $post_fields .= $key . "=" . $field . "&";
}
rtrim($post_fields, '&');

$ch = curl_init('https://x.com/import.php');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_REFERER, 'http://x.heroku.com');
curl_setopt($ch, CURLOPT_POST, count($arr));
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
//https://stackoverflow.com/a/11066378/1320686
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT ,0); // The number of seconds to wait while trying to connect. Use 0 to wait indefinitely.
curl_setopt($ch, CURLOPT_TIMEOUT, 0); // The maximum number of seconds to allow cURL functions to execute.
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.6 (KHTML, like Gecko) Chrome/16.0.897.0 Safari/535.6');

$data = curl_exec ($ch);
//echo $data; //use it for debug
//curl_close ($ch);