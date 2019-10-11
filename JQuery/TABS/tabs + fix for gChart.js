//src - http://stackoverflow.com/a/30468366
<?php

//fill $result with a PDO recordset
$countries = array();
$countries[] = array('Country', 'Hits per Day');
foreach($result as $row) {
    $countries[] = array($row[0]['country'], sizeof($row));
}

//fill $result2 with a PDO recordset
$users = array();
$users[] = array('Users', 'Hits per Day');
foreach($result2 as $row) {
    $users[] = array($row[0]['users'], sizeof($row));
}

?>

<html>
  <head>
    <script src="assets/jquery-3.1.1.min.js"></script>
    <script src="assets/bootstrap.min.js"></script>
    <link href="assets/bootstrap.min.css" rel="stylesheet">
      
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        //output charts to PNG - https://developers.google.com/chart/interactive/docs/printing
        
        $(function() {
        	
        	//fix to draw or redraw when user switch tab 
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                //http://stackoverflow.com/a/30468366
                
                //draw the pies TAB1
                if (this.href.indexOf('#countries')>0){
		          byCountryPIE();
		          //any other chart for 1st tab.
		          //byCountrySoftwaresPIE();
		          //byCountryCompaniesPIE();
                }
                
                //draw the pies TAB2
                if (this.href.indexOf('#users')>0){
                  byUserPIE();
                  //any other chart for 2nd tab.
                  //byUserSoftwaresPIE();
                  //byUserCompaniesPIE();
                }
                
            })

        });
        
        
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(draw_pies);
        
      //triggered only by^
      function draw_pies(){
          byCountryPIE();
          //any other chart for 1st tab.
          //byCountrySoftwaresPIE();
          //byCountryCompaniesPIE();
      }
        
    /////////////////////////////
    //byCountryPIE
    function byCountryPIE() {

		var data = google.visualization.arrayToDataTable(<?= json_encode($countries);?>);
 
        //fix to display the value in legend
        var total = 0;
        for (var i = 0; i < data.getNumberOfRows(); i++) {
                total = total + data.getValue(i, 1);    
        }

        for (var i = 0; i < data.getNumberOfRows(); i++) {
                var label = data.getValue(i, 0);
            var val = data.getValue(i, 1) ;
            var percentual = ((val / total) * 100).toFixed(1); 
            data.setFormattedValue(i, 0, label  + ' - '+val +' ('+ percentual + '%)');    
        }
        //fix to display the value in legend
	

        var options = {
          title: 'Tickets Per Country'
        };


        var chart = new google.visualization.PieChart(document.getElementById('byCountryPIE'));

        chart.draw(data, options);
      }
      
//------------USERS------------
        
    /////////////////////////////
    //byUserPIE
    function byUserPIE() {

		var data = google.visualization.arrayToDataTable(<?= json_encode($users);?>);
 
        //fix to display the value in legend
        var total = 0;
        for (var i = 0; i < data.getNumberOfRows(); i++) {
                total = total + data.getValue(i, 1);    
        }

        for (var i = 0; i < data.getNumberOfRows(); i++) {
                var label = data.getValue(i, 0);
            var val = data.getValue(i, 1) ;
            var percentual = ((val / total) * 100).toFixed(1); 
            data.setFormattedValue(i, 0, label  + ' - '+val +' ('+ percentual + '%)');    
        }
        //fix to display the value in legend
	

        var options = {
          title: 'Tickets Per User'
        };


        var chart = new google.visualization.PieChart(document.getElementById('byUserPIE'));

        chart.draw(data, options);
      }
     
    </script>
  </head>
  <body>
<div class="container-fluid">
    <ul class="nav nav-tabs">
      <li role="presentation" class="active"><a href="#countries" data-toggle="tab">Countries</a></li>        
      <li role="presentation"><a href="#users" data-toggle="tab">Users</a></li>
      <li role="presentation"><a href="#about" data-toggle="tab">About</a></li>
    </ul>

    
    <div class="tab-content">
      <div id="countries" class="tab-pane fade in active">
            <div class="row">
                <div class="col-md-6">
                	<div id="byCountryPIE" style="width: 1000px; height: 800px;"></div>
                </div>

            </div>
      </div>
      <div id="users" class="tab-pane fade">
            <div class="row">
                <div class="col-md-6">
                	<div id="byUserPIE" style="width: 1000px; height: 800px;"></div>
                </div>
            </div>
      </div>
      <div id="about" class="tab-pane fade">
            <div class="row">
                    pipiscrew sample
            </div>
      </div>
    </div>

</div>
  </body>
</html>