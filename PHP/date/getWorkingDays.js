function getWorkingDays($startDate, $endDate)	{
	$begin   = strtotime($startDate);
	$end     = strtotime($endDate);

	$no_days = 0;

	while($begin < $end) {
		$what_day = date("N",$begin);

		if($what_day < 6) // 6 and 7 are weekend days
			$no_days++;

		$begin += 86400; // +1 day
	};

	return $no_days;
}