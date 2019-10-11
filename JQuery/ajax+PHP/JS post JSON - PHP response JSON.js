//http://api.jquery.com/jquery.ajax/

	$.ajax({
		  type: "POST",
		  dataType : 'json', 
		  url: "helper.php",
		  data: {
            "compID" : "<?php echo $_GET["id"]?>",
            "userID" : fb_user,
            "valID" : "<?php echo intval((strtotime(date("Y-m-d H:i")." UTC")-69) * 2) ?>",
            "isIphone" : -1,
            "isInform":"0"
        	},
		  
		  success : function(e) {
		  	console.log("success", e);
	           var r = data.recs;
	
	           if (r==undefined)
	           {
	               alert("error : no record");
	               return;
	           }   
	           
				if (r.length==0)
				{
					console.log("no recs");
					return;
				}					 					
           
		  },							  
		  done : function(e) {
		    console.log( "done",e );
		  },
		  fail : function(e) {
		    console.log( "error",e );
		  },
		  always : function(e) {
		    console.log( "complete",e );
		  }
	});
	
//because the dataType is JSON, to read te request must be JSON otherwise not
//even enters, aka on PHP
echo json_encode("test");