		// allow internet calls from main thread
		StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
		StrictMode.setThreadPolicy(policy);
		

		String userCountry = null;
		String userIP="";
		try {
			// ask webservice
			String webServiceJSON = new URLReader().getResponse("http://ipinfo.io/json");

			if (webServiceJSON != null) {
				JSONObject jObject = new JSONObject(webServiceJSON);
				userCountry = jObject.getString("country");
				userIP = jObject.getString("ip");
			}

			if (userCountry == null) {
				//todo:
				// ask SIMCard!
//				userCountry=getTelephoneServiceCountry();
			}

		} catch (Exception ex) {
			userCountry = null;
		}
		
		
//there is also
//gotten from firebase https://www.firebase.com/test.html
http://webutils.flourishworks.com/req



