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
			console.log("k");
			CHART_DATA_ARRAY[i + 1] = [obj[legendCOL], obj[valueCOL]];
			console.log(CHART_DATA_ARRAY[i + 1]);
		});

		var data = google.visualization.arrayToDataTable(CHART_DATA_ARRAY);

		var options = {
			title : chartCAPTION
		};

		var chart = new google.visualization.PieChart(document.getElementById(chartID));
		chart.draw(data, options);
	}

	function getContentBIDS() {
		$.ajax({
			type : "POST",
			url : "fl_stats_sponsor_dbase_reports.php",
			data : "ID=" + "160",
			datatype : "json",
			success : function(result) {

				//////////////////////////////////////////////////////////////// CONTESTS_VIEWS PIE
				set_chart_data("SPONSOR_CONTESTS_CAUSE_COMPANIES_piechart", "Cause Companies Supported", result.sponsor_causes_pie, "title", "totalCAUSECOMP_BIDS");
				
				//////////////////////////////////////////////////////////////// CONTESTS_VIEWS PIE
				set_chart_data("SPONSOR_CONTESTS_VIEWS_piechart", "Contests Unique Views : " + result.contest_views.length, result.contest_views_pie, "title", "STATS");

				//////////////////////////////////////////////////////////////// CONTESTS_BIDS PIE
				set_chart_data("SPONSOR_CONTESTS_BIDS_piechart", "Total Bids : " + countBIDS, result.bids, "title", "totalBIDS");
				
				// //////////////////////////////////////////////////////////////// SPONSOR_SOCIAL PIE
				var socialFB = {
					title : 'Facebook',
					count : sponsor_view_social_fb
				};
				var socialTW = {
					title : 'Twitter',
					count : sponsor_view_social_tw
				};

				var socialARR = new Array();
				socialARR.push(socialFB);
				socialARR.push(socialTW);
				
///OR [start]
				var sponsor_comp_bid_socialARR = new Array();
				$.each(result.sponsor_bid_shares, function(i, obj) {
					tblROWS += "<tr><td>" + obj.title + "</td><td>" + obj.totalVOTES + "</td><td>" + obj.totalFB + "</td><td>" + obj.totalTW + "</td></tr>";
					
					var sponsor_comp_bid_social = {
						title : obj.title,
						count : obj.totalFB + obj.totalTW
					};
					
					sponsor_comp_bid_socialARR.push(sponsor_comp_bid_social);
				});
///OR [end]				

				set_chart_data("SPONSOR_CONTESTS_SOCIAL_piechart", "Social Networks", socialARR, "title", "count");
				
			},
			error : function(msg) {
				$("#lbl_sponsor_views, #lbl_sponsor_social_FB, #lbl_sponsor_social_TW, #lbl_sponsor_unique_causes_supported, #lbl_sponsor_total_time_support_causes").html("Could not retrieve information right now, please try later!");
				$("#table_sponsor_views, #table_sponsor_contest_bids, #table_sponsor_contest_views, #table_sponsor_views, #table_sponsor_social, #table_sponsor_causes").html("");
			}
		});
	}

	getContentBIDS();