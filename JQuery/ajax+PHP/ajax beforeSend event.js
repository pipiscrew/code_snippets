//http://phppot.com/php/ajax-pagination-with-php/

	$.ajax({
		url: url,
		type: "GET",
		data:  {rowcount:$("#rowcount").val(),"pagination_setting":$("#pagination-setting").val()},
		beforeSend: function(){$("#overlay").show();},
		success: function(data){
		$("#pagination-result").html(data);
			setInterval(function() {$("#overlay").hide(); },500);
		},
		error: function() 
		{} 	        
   });