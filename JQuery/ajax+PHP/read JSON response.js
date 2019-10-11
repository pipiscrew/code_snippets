	function push2android(title, deviceID) {
		//the the push!
		request({
			method : 'POST',
			uri : 'http://contests4causes.com/sponsorsDEV/pushANDROID.php',
			headers : {
				'content-type' : 'application/json'
			},
			form : {
				"message" : title,
				"registrationIDs" : deviceID 
			}

		}, function(error, response, body) {
			var info = JSON.parse(body);

			if (info.success && info.success!=null){
				
				//write log to dbase
				var dbSaveAndroid = new Firebase('http://' + baseURLC + '/competitions/' + comp_id + '/bids/' + user_id + '/send_push_android');
				dbSaveAndroid.set(info.success);
				
			}
		});
	}