							//one line out of for loop
							//is the greatest time point (aka last vote)
							//set the chart max on xAxis
							//get seconds of VOTE timestamp + 10minutes
							max = getSecondsfromUNIX(UTCKey, 10);

							//////////////////////////////////////////////////////////////////
							////SETUP THE CHART start
							//////////////////////////////////////////////////////////////////

							//check if chart attached and remove it
							if (chart == null) {
								//setup chart
								chart = setupChart(min, max, 200);

								//add chart series
								chart.addSeries({
									showInLegend : false,
									renderTo : 'chart_container',
									type : 'areaspline',
									backgroundColor : 'white',
									events : {
										click : function(event) {

											if (event != null) {
												if (event.point == null)
													console.log("null");
												else {
													// Log to console
													console.log(event.point);

													$('#pointDetails').html('Time : ' + secondsToHms(event.point.x) + '<br/>Average : ' + event.point.y + '<br/>Votes : ' + event.point.options.votes);
													//alert(this.name + ' clicked\n' + 'Alt: ' + event.altKey + '\n' + 'Control: ' + event.ctrlKey + '\n' + 'Shift: ' + event.shiftKey + '\n');
												}
											} else
												console.log("null2");
										}
									},
									data : []
								});

							} else {
-->here
								chart.xAxis[0].update({
									max : max
									// tickInterval : 1000
								});
							}