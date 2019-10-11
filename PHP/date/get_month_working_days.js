//http://stackoverflow.com/a/14186046

<?php

echo get_month_working_days(date('n'), date('Y'));

echo get_month_working_days(12,2014);

function get_month_working_days($month, $year)
{
	$day_count = cal_days_in_month(CAL_GREGORIAN, $month, $year); // Get the amount of days
	
	$exclude=0;

	for ($i = 1; $i <= $day_count; $i++) {
			$get_name = date('D', strtotime($year.'/'.$month.'/'.$i)); //get week day
		
			if($get_name == 'Sun' || $get_name == 'Sat'){
				$exclude+=1;
			}
	}
	
	return ($day_count - $exclude);
}

?>
