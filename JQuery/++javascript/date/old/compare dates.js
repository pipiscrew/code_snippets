					//compare dates
					var dt1;
					var dt2;

					try {
						if ((isEmpty($('#datestart').val())) | (isEmpty($('#dateend').val()))) {
							alert("'Date Start' and 'Date End' required!");
							return;
						}
						//
						dt1 = parseDate($('#datestart').val());
						dt2 = parseDate($('#dateend').val());
						
						//compare Start with End
						if (dt2 < dt1) {
							alert("'Date End' must be greater than 'Date Start'");
							return;
						} else {
							//compare DateEnd with today 
							var now = new Date();
							
							if (dt2 < now) {
								
								alert("'Date End' must be greater than today");
								return;
							}
						}
					} catch (exception) {
						alert(exception);
						return;
					}
					
			function isEmpty(str) {
				return (!str || 0 === str.length);
			}