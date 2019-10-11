	request({
		method : 'PUT',
		uri : 'https://api.random.org/json-rpc/1/invoke',
		headers : {
			'content-type' : 'application/json-rpc'
		},
		body : JSON.stringify({
			"jsonrpc" : "2.0",
			"method" : "generateSignedIntegers",
			"params" : {
				"apiKey" : "a2dad32f-ceba-4a19-a324-aed3974dafee", //todo change with purchase, this is yotag.yg@gmail API key
				"n" : competition_winnersNumber,
				"min" : 1,
				"max" : bidsCount,
				"replacement" : false, //by default true - the resulting numbers may contain duplicate values
				"base" : 10
			},
			"id" : 14215333 //A request identifier that allows the client to match responses to request. The service will return this unchanged in its response.
		})
	}, function(error, response, body) {

		var info;

		if (body != null)
			info = JSON.parse(body);

		randomRESP_STATUSCODE = response.statusCode || null;

		if (info)
		{
			//when contains error array means error!
			if (info.error) {
				randomNums = null;
				randomERROR = 'Error : ' + info.error.code + ' ' + info.error.message;
			} else {

				//check if response is valid
				if (response.statusCode != 200) {
					randomNums = null;
				} else {
					randomNums = info.result.random.data;
				}
			}
		}
		else
		{
			console.log("random.org - body is NULL");
			randomNums = null;
		}

		moveCompetition2ended(comp, bidsCount, randomRESP_STATUSCODE, randomERROR, randomNums)
	})