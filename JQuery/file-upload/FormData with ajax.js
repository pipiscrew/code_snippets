//http://stackoverflow.com/a/8244082/1320686

	var fd = new FormData();    
	fd.append( 'file', input.files[0] );
	
	$.ajax({
	  url: 'http://example.com/script.php',
	  data: fd,
	  processData: false,
	  contentType: false,
	  type: 'POST',
	  success: function(data){
	    alert(data);
	  }
	});