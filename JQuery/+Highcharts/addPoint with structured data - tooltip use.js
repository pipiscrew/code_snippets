//http://stackoverflow.com/questions/12739926/adding-data-to-a-highchart-chart-using-an-array-with-ids
								
					//add structured point, pass false not to draw it (just add to collection).
					chart.series[0].addPoint({
						x : x,
						y : parseFloat(voteSum / voteCounter),
						votes : voteCounter
					}, false);
					
				}); //loop

					//when the points added, draw it!
					chart.redraw();
					
					
//then on tooltip formatter we catch the vote attribute
				$('#container').highcharts({
					title : {
						text : 'up2five'
					},
					tooltip : {
						formatter : function() {
							return 'Time : ' + this.key + '<br/>Average : ' + 
-->							this.y + '<br/>Votes : ' + this.point.options.votes;
						}
					},
					yAxis : {
						title : {
							text : 'Votes Average'
						}
					},
					xAxis : {
						title : {
							text : 'Minute'
						}
					}

				});