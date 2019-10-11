	var timelinePoints = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + recID + "/votes");
	
	timelinePoints.on('value', function(timelinePoints2) {
	
	//for each timeline POINT
	timelinePoints2.forEach(function(pointDetails) {
		console.log(pointDetails.name()); //print the key node
	});
	
	});