//http://stackoverflow.com/questions/4162223/how-to-send-500-internal-server-error-error-from-a-php-script

header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
exit;



// only allow access from authorized IPs
/*
$ip = @$_SERVER['REMOTE_ADDR'];
if ($ip != "127.0.0.1")
{
	header("HTTP/1.0 403 Forbidden");
	die();
}
*/