<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
	
<script type='text/javascript' src='//code.jquery.com/jquery-1.11.0.min.js'></script>
<script type='text/javascript' src='//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'></script>

		<script type="text/javascript">
	
			$(function() {
				
				//button click
				$('#btn').on('click', function(e) {
					
					if ($("#txt_how_many").val().length == 0 || 
					$("#txt_min").val().length == 0 ||
					$("#txt_max").val().length == 0)
					{alert( "Please fill textboxes!");
					return;
					}
					//window.open("http://www.random.org/integers/?num=" + $("#txt_how_many").val() + "&min=" + $("#txt_min").val() + "&max=" + $("#txt_max").val() + "&col=1&base=10&format=plain&rnd=new")
					
		 			$.ajax({
		                url: 'https://api.random.org/json-rpc/1/invoke',
		                dataType : 'json',
		                contentType: "application/json-rpc", 
		                type: 'POST',
		                data:  JSON.stringify({
		                    "jsonrpc": "2.0",
		                    "method": "generateSignedIntegers",
		                    "params": {
		                        "apiKey": "x-x-x-8b27-x", //get yours http://api.random.org/api-keys/beta
		                        "n": $("#txt_how_many").val(),
		                        "min": $("#txt_min").val(),
		                        "max":  $("#txt_max").val(),
								"replacement" : false, //by default true - the resulting numbers may contain duplicate values
								"base" : 10
		                    },
		                    "id": 14215333
		                    })
		                

		            })
		            .done(function (data, status, request)
		            {
		            	console.log(data);
		            	if (data.error)
		            	{
		            		alert(data.error.message);
		            	}
		            	
		            	if (data)
		            		if (data.result)
		            			if (data.result.random)
			            		{
			            			var nos = data.result.random.data;
			            			//console.log(nos);
			            			var outp = "";
			            			for(var no in nos)
			            			{
			            				outp += nos[no] + "<br>";
			            				//console.log(nos[no]);
			            			}
			            			
			            			$("#myDIV").html(outp);
			            		}

		            })
		            .fail(function (request, status, error)
		            {
		                alert("Failed " + error);
		            });
				
				
			});
			
		});
		</script>
	</head>
	
	<body>
		
		<div style="margin: 0 auto;width:500px">
			  <div class="form-group">
			    <label>Generate Numbers : </label>
			    <input class="form-control" id="txt_how_many" placeholder="Maximum Number">
			  </div>
			  
			  <div class="form-group">
			    <label>Minimum Number : </label>
			    <input class="form-control" id="txt_min" value="1" placeholder="Minimum Number">
			  </div>
			  
			  <div class="form-group">
			    <label for="exampleInputEmail1">Maximum Number : </label>
			    <input class="form-control" id="txt_max" placeholder="Maximum Number">
			  </div>
			  
			  
				<button id="btn">
					Generate
				</button>

				<br><div id="myDIV" style="text-align: center"></div><br>
		</div>
	</body>
</html>
