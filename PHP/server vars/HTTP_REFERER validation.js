//server validation - if called directly HTTP_REFERER is not set
if(!isset($_SERVER["HTTP_REFERER"])){
	header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
	exit;
} else {
	$ref = $_SERVER['HTTP_REFERER'];
	$ref_details = parse_url($ref); 
	//array(3) { ["scheme"]=> string(4) "http" ["host"]=> string(9) "domain.com" ["path"]=> string(11) "/thedir/" }
	
	if (!array_key_exists('host', $ref_details)){
		header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
		exit;	
	}

	if (strtolower($ref_details["host"]) != "pipiscrew.com" && strtolower($ref_details["host"]) != "www.pipiscrew.com"){
		header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
		exit;	
	}
}