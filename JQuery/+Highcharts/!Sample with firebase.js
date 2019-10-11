<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">

		<title>Episodes</title>

		<!-- Bootstrap core CSS -->
		<link href="bootstrap.min.css" rel="stylesheet">

		<!-- Bootstrap core JS -->
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script type="text/javascript" src="bootstrap.min.js"></script>

		<!-- Firebase -->
		<script type='text/javascript' src='https://cdn.firebase.com/v0/firebase.js'></script>
		<script type='text/javascript' src='https://cdn.firebase.com/v0/firebase-simple-login.js'></script>

		<script src="http://code.highcharts.com/highcharts.js"></script>
		<script src="http://code.highcharts.com/modules/exporting.js"></script>

		<script type="text/javascript">
			$(function() {

				//////////////////////////////////////
				//return back a snapshot for given URL
				//////////////////////////////////////
				function getSnap(URL) {
					//using 'once' function is safe

					var db = new Firebase(URL);
					var ret;
					db.once('value', function(snapshot) {
						ret = snapshot;
					});

					return ret;
				}


				$('#container').highcharts({
					title : {
						text : 'up2five'
					},
					tooltip : {
						formatter : function() {
							return 'Time : ' + this.key + '<br/>Average : ' + this.y + '<br/>Votes : ' + this.point.options.votes;
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

				//read event ID
				var eventname = GetURLParameter('event');

				//used only on editModal
				var episode = GetURLParameter('episode');

				//even no ID - go back
				// if (eventname == null)
				// window.location = "episodes.html";

				////////////////////////
				//read URL parameter
				////////////////////////
				function GetURLParameter(sParam) {
					var sPageURL = window.location.search.substring(1);
					var sURLVariables = sPageURL.split('&');
					for (var i = 0; i < sURLVariables.length; i++) {
						var sParameterName = sURLVariables[i].split('=');
						if (sParameterName[0] == sParam) {
							return sParameterName[1];
						}
					}
				}

				/////////////////////////////////
				//create reference with Firebase
				var episodesRef = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + episode + "/votes");

				var chart = $('#container').highcharts();

				// votes sum
				var voteSum = 0;

				// votes counter
				var voteCounter = 0;

				//security - when is not logged in goto login page
				var auth = new FirebaseSimpleLogin(episodesRef, function(error, user) {
					if (error | user === null) {
						window.location = "index.html";
					}

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
						data : []
					});

					episodesRef.on('value', function(snapshot) {
						if (snapshot.val() != null) {

							//for each episode time POINT
							snapshot.forEach(function(episodeDetails) {

								voteSum = 0;
								voteCounter = 0;
								var voteItem = episodeDetails.val();

								for (var timelinePoints3 in voteItem) {

									voteSum += voteItem[timelinePoints3].vote;
									voteCounter += 1;
								}

								var x = 0;
								x = parseFloat(episodeDetails.name().replace(',', "."));

								//add structured point, pass false not to draw it (just add to collection).
								chart.series[0].addPoint({
									x : x,
									y : parseFloat(voteSum / voteCounter),
									votes : voteCounter
								}, false);
								
							});

							//when all points added, draw it!
							chart.redraw();
							
						} else {//when snapshot is null
							//check if chart attached and remove it
							if (chart.series.length == 1) {
								chart.series[0].remove();
								chart.redraw();
							}
						}
					});
				});
			});
		</script>

	</head>

	<body>
		<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
	</body>
</html>