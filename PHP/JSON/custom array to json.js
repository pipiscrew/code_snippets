//http://stackoverflow.com/questions/1390983/php-json-encode-encoding-numbers-as-strings

    $json = array('html' => $msg, 'counter' => $count, );

    header("Content-Type: application/json", true);
    echo json_encode($json);
    
//
			$a = array(
			    'id' => 152,
			    'another' => 'test',
			    'ananother' => 456,
			);
			$json = json_encode($a);
			echo $json;