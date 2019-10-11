class SimpleWorkingDays
{
	private function orthodox_eastern($year) { 
	    $a = $year % 4; 
	    $b = $year % 7; 
	    $c = $year % 19; 
	    $d = (19 * $c + 15) % 30; 
	    $e = (2 * $a + 4 * $b - $d + 34) % 7; 
	    $month = floor(($d + $e + 114) / 31); 
	    $day = (($d + $e + 114) % 31) + 1; 
	    
	    $de = mktime(0, 0, 0, $month, $day + 13, $year); 
	    
	    return date('Y-m-d',$de); 
	} 

	private function get_vacation_days($year)
	{
		$vacations = array();
		$easter = $this->orthodox_eastern($year);
		$vacations[] = "01.01"; //prwtoxronia
		$vacations[] = "06.01"; //8eofaneia
		$vacations[] = "25.03"; //25martioy
		$vacations[] = "01.05"; //1maioy - ergatikh protomagia
		$vacations[] = "15.08"; //15aug - koimhsh 8eotokoy
		$vacations[] = "26.10"; //26oct - polioyxoy 8essalonikhs
		$vacations[] = "28.10"; //28oct - epeteios toy oxi
		$vacations[] = "25.12"; //25dec - christams
		$vacations[] = "26.12"; //26dec - christams - 2nd day - syna3is tis 8eotokoy
		$vacations[] = date('d.m',strtotime($easter)); //orthodox easter
		$vacations[] = date('d.m',strtotime($easter."-48 days")); //clean monday
		$vacations[] = date('d.m',strtotime($easter."-2 days")); //big friday
		$vacations[] = date('d.m',strtotime($easter."+50 days")); //agioy pneymatos
		$vacations[] = date('d.m',strtotime($easter."+1 days")); //deytera toy pasxa
		
		return $vacations;
	}
		
	//get working day in month
	function get_month_working_days($month, $year)
	{
		$day_count = cal_days_in_month(CAL_GREGORIAN, $month, $year); // builtin function - get amount of days
		$vacation_days = $this->get_vacation_days($year);
		
		$exclude=0;

		for ($i = 1; $i <= $day_count; $i++) {
				$get_name = date('D', strtotime($year.'/'.$month.'/'.$i)); //get day
			    $get_name4vacation = date('d.m', strtotime($year.'/'.$month.'/'.$i));
				
				if($get_name == 'Sun' || $get_name == 'Sat' || in_array($get_name4vacation, $vacation_days)){
					$exclude+=1;
				}
		}
		
		return ($day_count - $exclude);
	}
}