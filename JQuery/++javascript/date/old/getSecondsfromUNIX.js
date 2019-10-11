				function getSecondsfromUNIX(unixtime, oper) {
					var newDate = new Date();
					newDate.setTime(unixtime * 1000);
					//UTCKey hold user vote

					if (oper != 0) {
						newDate.setMinutes(newDate.getMinutes() + oper);
					}

					var dateString = newDate.toString().replace(/GMT.*/g, "").trim();
					dateString = dateString.substring(dateString.lastIndexOf(" ") + 1, dateString.length);
					return hmsToSecondsOnly(dateString);
				}