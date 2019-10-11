function get_keys_from_array_items($array)
{
		$retVAL ="";
		if (is_array($array)) {
			
			foreach ($array as $itemKEY => $itemValue) {
				$retVAL .=  $itemKEY.",";
			}
			
		}
		
		return $retVAL;
}

//usage
foreach ($jsonArray as $key => $value) {

	if (is_array($value)) {
		$ccategories = get_keys_from_array_items($value["causes_categories"]);
		$causes = get_keys_from_array_items($value["causes"]);
	}
}