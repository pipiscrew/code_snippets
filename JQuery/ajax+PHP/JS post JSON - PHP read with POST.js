//JS
//send JSON
			function sendAndroidPUSHpostPHP(message, mobileIDs) {
				$.ajax({
					url : 'pushANDROID.php',
					dataType : 'json',
					type : 'POST',
					data : {
						"registrationIDs" : mobileIDs,
						"message" : message
					},
		            success : function(data) {
		                $.each(data, function(key, val) {
		                    	console.log(key + ' - ' + val);
		                });
					}
				});
			}
		
		
		
//PHP
//read JSON as normal with POST
	if($_SERVER["HTTP_REFERER"] != "http://lamp.t-c.gr/contest_admin/portal.html"){
		echo json_encode(null);
		return;
	}
	
	if(!isset($_POST["message"]) || !isset($_POST["registrationIDs"])){
		echo json_encode(null);
		return;
	}
	
	//Google Cloud Server-API key
	$apiKey = "AIzaSyAoy5QhNiKL-03HLEiyj1_l9Aim3I2Gmps";
	
	//Google GCM Server
	$url = 'https://android.googleapis.com/gcm/send';
	
	//message to be send
	$message = $_POST['message'];
	
	//device IDs
	$devices = $_POST['registrationIDs'];
	
	
//more @ 
//http://stackoverflow.com/questions/7313173/ajax-post-json-and-php-how-do-i-do-it