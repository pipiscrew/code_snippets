//http://code.google.com/apis/ajax/playground/?type=visualization#another_data_view
//http://code.google.com/apis/ajax/playground/?type=visualization#table

		<script type="text/javascript" src="https://www.google.com/jsapi"></script>
		
		<script type="text/javascript">
			google.load("visualization", "1", {
				packages : ["table"]
//				packages : ["corechart","table"] //corechart hen needed also chart
			});
		</script>
		
        var dataTable = google.visualization.arrayToDataTable([
          ['Name',   'Age', 'Instrument', 'Color'],
          ['John',   24,     'Guitar',    'Blue'],
          ['Paul',   52,     'Sitar',     'Red'],
          ['George', 16,     'Guitar',    'Green'],
          ['Ringo',  72,     'Drums',     'White']
        ]);
        
	  var table = new google.visualization.Table(document.getElementById('test'));
	  table.draw(dataTable, null);
	  
	  
	  
	  <div id="test"></div>