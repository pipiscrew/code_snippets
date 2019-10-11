//http://stackoverflow.com/questions/5147522/jquery-ajax-request-of-datatype-json-will-not-retrieve-data-from-php-script
header("Content-Type: application/json", true);
echo json_encode($aRow);