	function isNULL($str)
	{
		if ($str==null)
			return true;
		else if ($str=='null')
			return true;
		else 
			return false;
	}
	
	function replaceQuotes($str)
	{
		//replace quotes! the fields saved numeric but when edited by FBDesktop is String!!!
		$new_str = str_replace('"', '', $str);
		return trim($new_str);
	}


	function cleanQuotes($f)
	{
		return substr($f, 1, strlen($f) - 2);	
	}
	
	
	