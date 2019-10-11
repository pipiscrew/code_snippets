$result = file_get_contents("urlHere");


you want *file_get_html* because *file_get_contents*
will load the response body into a string but *file_get_html*
will load it into simple-html-dom.

$dom = file_get_html($url);
$tables = $dom->find('table');
echo $tables[0];
echo $tables[1];

//Alternatively you could use file_get_contents along with str_get_html:
$dom = str_get_html(file_get_contents($url));
//But that would be silly.