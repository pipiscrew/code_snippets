	function twoDigits(d) {
	    if(0 <= d && d < 10) return "0" + d.toString();
	    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
	    return d.toString();
	}
	
	//remember the month is zero based here!
	function getLastDateOfMonth(Year,Month){
 		var d = new Date((new Date(Year, Month+1,1))-1);
 		
		var str_date = twoDigits(d.getDate()) + "-" + twoDigits(d.getMonth() + 1) + "-" + d.getFullYear();
		return str_date; 		
	}