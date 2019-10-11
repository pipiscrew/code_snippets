//https://stackoverflow.com/a/15774702
$path = realpath('./') . '/x/';
$files = scandir($path);
Following code will remove . and .. from the returned array from scandir:

$files = array_diff(scandir($path), array('.', '..'));