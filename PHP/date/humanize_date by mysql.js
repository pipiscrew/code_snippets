function humanize_date($val){
	if (!empty($val))
	{
		$dt = DateTime::createFromFormat('Y-m-d', $val);
		
		$val =	$dt->format('d-m-Y');
	}
	
	return $val;
}