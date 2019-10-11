//http://edpriceishungry.com/2010/01/04/converting-integers-to-monthnames-in-php/
	for( $m= 1 ; $m <= 12 ; $m++ )
	{
		echo monthName($m);
	}
	
function monthName($month_int) {
	$month_int = (int)$month_int;
	$timestamp = mktime(0, 0, 0, $month_int);
	return date("F", $timestamp);
}