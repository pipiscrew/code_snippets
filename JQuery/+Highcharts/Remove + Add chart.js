//http://stackoverflow.com/questions/6604291/proper-way-to-remove-all-series-data-from-a-highcharts-chart

					//check if chart attached and remove it
					if (chart.series.length == 1) {
						chart.series[0].remove();
						chart.redraw();
					}
							
					//add chart
					chart.addSeries({
						showInLegend : false,
						renderTo : 'chart_container',
						type : 'areaspline',
						backgroundColor : 'white',
						data : [0]
					});
					
//no tested
//http://stackoverflow.com/questions/11109921/highcharts-redraw-empty-chart
chart.series[0].data = [];
chart.redraw();