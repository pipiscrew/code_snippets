//http://stackoverflow.com/a/9790819

$prev = $_SERVER["HTTP_REFERER"];

if (!isset($prev))
	$prev="index.php";
	
header("Location: {$prev}");