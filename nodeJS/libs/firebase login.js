//https://github.com/firebase/firebase-simple-login/

using :
//https://github.com/firebase/firebase-token-generator-node

//nodeJS
	var FirebaseTokenGenerator = require("firebase-token-generator");
	var tokenGenerator = new FirebaseTokenGenerator("firebase-secret-here");
	var token = tokenGenerator.createToken({"app_user_id": 1234, "isModerator": true });
	 
	var db = new Firebase('https://' + baseURL);
	 
	    db.auth(token, function(error) {
	      if(error) {
	        console.log("Login Failed!", error);
	      } else {
	        console.log("Login Succeeded!");
	      }
	    });
	 
	db = new Firebase('https://' + baseURL + '/debug/');
	
	
//rule
		"debug": {
	            ".read": "auth.isModerator == true",
	            ".write": "auth.isModerator == true",
	             }