//http://praveenlobo.com/techblog/how-to-convert-javascript-local-date-to-utc-and-utc-to-local-date/

					//convert now date to UTC and then to UNIX timestamp
					//http://stackoverflow.com/questions/8047616/get-a-utc-timestamp-in-javascript/15012173#15012173
					var newDay = new Date();
					var t = new Date(newDay.toUTCString());
					var time1 = Math.round(t / 1000);
					alert(time1);

					//convert unix timestamp to UTC date
					//http://stackoverflow.com/questions/5416920/timestamp-to-human-readable-format
					var newDate = new Date();
					//whatever date, converted automatically to user GMT
					newDate.setTime(1378908043 * 1000);
					dateString = newDate.toUTCString();
					alert(dateString);