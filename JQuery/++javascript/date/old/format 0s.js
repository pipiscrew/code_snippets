			function getGMTfromUTC(val) {
				var d = new Date();
				d.setTime(val * 1000);
				
				var hours = d.getHours();
				var minutes = d.getMinutes();
				
			 	if (hours   < 10) {hours   = "0"+hours;}
			    if (minutes < 10) {minutes = "0"+minutes;}
    
				return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " " + hours + ":" + minutes;
			}