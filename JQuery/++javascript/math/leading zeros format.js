//http://www.electrictoolbox.com/pad-number-zeroes-javascript-improved/

			function pad(number, length) {
			   
			    var str = '' + number;
			    while (str.length < length) {
			        str = '0' + str;
			    }

			    return str;
			}