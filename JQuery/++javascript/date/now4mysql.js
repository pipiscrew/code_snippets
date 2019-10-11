//http://stackoverflow.com/questions/5129624/convert-js-date-time-to-mysql-datetime

	function twoDigits(d) {
	    if(0 <= d && d < 10) return "0" + d.toString();
	    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
	    return d.toString();
	}

	function date_now4mysql()
	{
		var d = new Date();
		var str_date = d.getFullYear() + "-" + twoDigits(d.getMonth() + 1) + "-" + twoDigits(d.getDate()) + " " + twoDigits(d.getHours()) + ":" + twoDigits(d.getMinutes()) + ":" + twoDigits(d.getSeconds());
		console.log(str_date);
		return str_date;
	}
	
	$("[name=lastupdate]").val(date_now4mysql());