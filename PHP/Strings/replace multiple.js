//http://stackoverflow.com/a/535146

$searchReplaceArray = array(
  'blah' => 'bleh', 
  'blarh' => 'blerh'
);
$result = str_replace(
  array_keys($searchReplaceArray), 
  array_values($searchReplaceArray), 
  $string
);

