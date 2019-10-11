//https://google-developers.appspot.com/chart/interactive/docs/gallery/piechart

//old
/*
When you use Google jsapi, you must load jquery and jquery UI using the load method only :

    <script type="text/javascript">
      google.load("search", "1");
      google.load("jquery", "1.4.2");
      google.load("jqueryui", "1.7.2");
    </script>
(from https://developers.google.com/loader/ )

That's the whole point : you don't need to include (and serve) the jquery files yourself as you're using Google API (and servers).
If you go directly to https://www.google.com/jsapi you will see at the bottom all of the supported version
*/
//old

    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    	
	//general used for charts to create 2D array
	function Create2DArray(rows) {
		var arr = [];

		for (var i = 0; i < rows; i++) {
			arr[i] = [];
		}

		return arr;
	}

	//init chart object (should be once?)
	google.load("visualization", "1", {
		packages : ["corechart"]
	});

	//each PIE has one callback
	var CONTESTS_VIEWS_piechart_ARRAY;
	function drawChart() {
		var data = google.visualization.arrayToDataTable(CONTESTS_VIEWS_piechart_ARRAY);

		var options = {
			title : 'Unique views per Contest'
		};

		var chart = new google.visualization.PieChart(document.getElementById('CONTESTS_VIEWS_piechart'));
		chart.draw(data, options);
	}


		$.ajax({
			type : "POST",
			url : "fl_stats_sponsor_dbase_reports.php",
			data : "ID=" + "160",
			datatype : "json",
			success : function(result) {
				//////////////////////////////////////////////////////////////// CONTESTS_VIEWS PIE

				CONTESTS_VIEWS_piechart_ARRAY = Create2DArray(result.contest_views_pie.length + 1);
				console.log(CONTESTS_VIEWS_piechart_ARRAY);
				CONTESTS_VIEWS_piechart_ARRAY[0][0] = "contest";
				CONTESTS_VIEWS_piechart_ARRAY[0][1] = "unique views";

				$.each(result.contest_views_pie, function(i, obj) {
					console.log(i);
					CONTESTS_VIEWS_piechart_ARRAY[i+1][0] = obj.title;
					CONTESTS_VIEWS_piechart_ARRAY[i+1][1] = obj.STATS;
				});

//no working on callbacks, you have to call the procedure direct
//				google.setOnLoadCallback(drawChart);
//aka
				drawChart();


			},
			error : function(msg) {
				$("#lbl_sponsor_views, #lbl_sponsor_total_bids, #lbl_sponsor_contest_views, #lbl_sponsor_social_FB, #lbl_sponsor_social_TW, #lbl_sponsor_unique_causes_supported, #lbl_sponsor_total_time_support_causes").html("Could not retrieve information right now, please try later!");
				$("#table_sponsor_views, #table_sponsor_contest_bids, #table_sponsor_contest_views, #table_sponsor_views, #table_sponsor_social, #table_sponsor_causes").html("");
			}
		});