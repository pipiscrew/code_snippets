//input is string like 30/12/2013 20:22

			function parseDate(input) {
				var data = input.split(' ');
				var datePart = data[0].split('/');
				var timePart = data[1].split(':');

				// new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
				return (new Date(datePart[2], datePart[1] - 1, datePart[0], timePart[0], timePart[1]));
				// months are 0-based
			}