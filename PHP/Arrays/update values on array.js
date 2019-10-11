	foreach($products as $key2 => $value2){
		
		if ($products[$key2]["product_id"] == $key)
		{
			$products[$key2]["quantity"] = $value;
		}
	}