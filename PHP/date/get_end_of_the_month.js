//http://stackoverflow.com/a/1686742

//th month must be passed as string otherwise conflict on AUGUST
function get_end_of_the_month($month, $year)
{
	//t returns the number of days in the month of a given date 
	$d = date("t", strtotime(date("{$year}-{$month}-d")));
	$m = date("{$year}-{$month}-{$d}"); //format back to mysql style!
	return  $m;

}


//usage
get_end_of_the_month(date('m'),date('Y'));