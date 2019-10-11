

//http://stackoverflow.com/questions/12956886/google-charts-and-twitter-bootstrap-tabs

once you have your chart and charting information on a global scope you need to bind the following to the shown event of your tab as so:

$('a[data-toggle="tab"]').on('shown', function (e) {
    chart.draw(data, options);
  })