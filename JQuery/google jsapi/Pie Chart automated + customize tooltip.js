//http://code.google.com/apis/ajax/playground/?type=visualization#pie_chart
//http://stackoverflow.com/questions/13331997/google-charts-literal-string-tooltip-error-when-applied-to-all-fields
//advanced - https://developers.google.com/chart/interactive/docs/customizing_tooltip_content

		<!-- GOOGLE pie
		https://google-developers.appspot.com/chart/interactive/docs/gallery/piechart-->
		<script type="text/javascript" src="https://www.google.com/jsapi"></script>

		<script type="text/javascript">
			google.load("visualization", "1", {
				packages : ["corechart"]
			});

		</script>
		

			function Create2DArray(rows) {
				var arr = [];
		
				for (var i = 0; i < rows; i++) {
					arr[i] = [];
				}
		
				return arr;
			}
		
			function set_chart_data(chartID, chartCAPTION, jsonDATA, legendCOL, valueCOL) {
				var CHART_DATA_ARRAY = Create2DArray(jsonDATA.length + 1);
				CHART_DATA_ARRAY[0][0] = "label";
				CHART_DATA_ARRAY[0][1] = "views";
				
				$.each(jsonDATA, function(i, obj) {

					if (obj['tooltip'])
						CHART_DATA_ARRAY[i + 1] = [obj[legendCOL], {'v': obj[valueCOL],'f': obj['tooltip']}];
					else 
						CHART_DATA_ARRAY[i + 1] = [obj[legendCOL], obj[valueCOL]];
				});
		
				var data = google.visualization.arrayToDataTable(CHART_DATA_ARRAY);
		
				var options = {
					title : chartCAPTION,
		                     'width': 900,
		                     'height': 400
				};
		
				var chart = new google.visualization.PieChart(document.getElementById(chartID));
				chart.draw(data, options);
			}
			
//the call
				var table_sadmin_vote_social_shares_per_country_per_categoryARR = new Array();
				var table_sadmin_vote_social_shares_per_country_per_category=0;

				var tblROWS = "";
				$.each(result.sadmin_vote_social_shares_per_category_per_country, function(i, obj) {
					tblROWS += "<tr><td>" + obj.country + "</td><td>" + obj.category + "</td><td>" + obj.totalFB + "</td><td>" + obj.totalTW + "</td></tr>";

					sadmin_vote_social_shares_counter = obj.totalFB + obj.totalTW;
					
					var sadmin_vote_social_shares_per_country_per_category = {
						title : obj.country + ' - ' + obj.category,
						count : obj.totalFB + obj.totalTW,
						tooltip : "Facebook : " + obj.totalFB + "\r\nTwitter : " +  obj.totalTW + "\r\n\r\nTotal : " + sadmin_vote_social_shares_counter
					};
					table_sadmin_vote_social_shares_per_country_per_categoryARR.push(sadmin_vote_social_shares_per_country_per_category);
				});

				$("#table_sadmin_vote_social_shares_per_country_per_category").html(tblROWS);
				set_chart_data("SADMIN_VOTE_SOCIAL_SHARES_PER_COUNTRY_PER_CATEGORY", "Shares per category per country (after vote)", table_sadmin_vote_social_shares_per_country_per_categoryARR, "title", "count");
				