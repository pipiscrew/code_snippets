//http://php.net/manual/en/function.array-key-exists.php

	if (!array_key_exists('host', $ref_details)){
		header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
		exit;	
	}