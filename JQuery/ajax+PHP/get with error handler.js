	$.get( "http://graph.facebook.com/" + page, function( data ) {
		  var likes = parseInt(data.likes);
		  $("[name=tab2_comp"+ no.toString()+"_likes]").val(likes);
		  
		  var tat = parseInt(data.talking_about_count);
		  $("[name=tab2_comp"+ no.toString()+"_tat]").val(tat);
		  
		  var  res =  (tat/likes) * 100;
		  $("[name=tab2_comp"+ no.toString()+"_eng]").val(parseFloat(res).toFixed(2));
		  
		  loading.remove();
	}).fail(function() {
    	alert('please check the Facebook handle'); 
    	loading.remove();
	});