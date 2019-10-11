//http://stackoverflow.com/questions/19178029/want-to-show-percentage-data-in-legends-of-google-pie-chart

//show legends on pie with line
				var data = google.visualization.arrayToDataTable(CHART_DATA_ARRAY);
		
				var options = {
					title : chartCAPTION,
		                     'width': 900,
		                     'height': 400,
					        legend: {
					            position: 'labeled'
					        },
					        pieSliceText: 'none'
				};
		
				var chart = new google.visualization.PieChart(document.getElementById(chartID));
				chart.draw(data, options);
				
				
//donuts with small fontsize
				var data = google.visualization.arrayToDataTable(CHART_DATA_ARRAY);
		
				var options = {
					title : chartCAPTION,
		                     'width': 900,
		                     'height': 400,
					        title: 'Chart Title',
					        pieHole: 0.4,
					        pieSliceTextStyle: {
					            fontSize: 10
					        }
					};
		
				var chart = new google.visualization.PieChart(document.getElementById(chartID));
				chart.draw(data, options);
				
//turn off legend
				var data = google.visualization.arrayToDataTable(CHART_DATA_ARRAY);
		
				var options = {
					title : chartCAPTION,
		                     'width': 900,
		                     'height': 400,
						   legend: {
						          position: 'none'
						      }
					};
		
				var chart = new google.visualization.PieChart(document.getElementById(chartID));
				chart.draw(data, options);