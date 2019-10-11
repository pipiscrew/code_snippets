	function timenow()
	{
		var now= new Date();
		ampm= 'am';
		h= now.getHours();
		m= now.getMinutes();
		s= now.getSeconds();
		if(h>= 12)
		{
			if(h>12) h -= 12;
			ampm= 'pm';
		}

		if(m<10) m= '0'+m;
		if(s<10) s= '0'+s;
		return now.toLocaleDateString()+ ' ' + h + ':' + m + ':' + s + ' ' + ampm;
	}
	
	var now= new Date(),
	
	//to get the offset in minutes from UTC
	console.log(now.getTimezoneOffset()); // outputs 180 - means 180/60=3hours!= GMT+3!!