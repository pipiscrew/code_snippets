//https://github.com/firebase/firebase-token-generator-java
//https://github.com/firebase/firebase-token-generator-php
//https://www.firebase.com/docs/security/custom-login.html


		private AuthListener ath;

		//token retrieved from firebase owner panel > Auth > Firebase Secrets
		TokenGenerator tokenGenerator = new TokenGenerator(
				"L6pZod3BKGbBqMv7FgknDuiXbfnfs4f7hHce5FLi");
		TokenOptions tokenOptions = new TokenOptions();
		tokenOptions.setAdmin(true);
		String token = tokenGenerator.createToken(null, tokenOptions);
		System.out.println(token);
		//

		ath = new AuthListener() {

			@Override
			public void onAuthError(FirebaseError arg0) {
				// TODO Auto-generated method stub
				writeLog("onAuthError");
			}

			@Override
			public void onAuthRevoked(FirebaseError arg0) {
				// TODO Auto-generated method stub
				writeLog("onAuthRevoked");
			}

			@Override
			public void onAuthSuccess(Object arg0) {
				// TODO Auto-generated method stub
				writeLog("onAuthSuccess");
			}
		};

		julieRef = new Firebase("https://testarea.firebaseio.com/users/julie/");
		julieRef.auth(token, ath);
		
/////////by page sample without listener

		julieRef.auth(token, new Firebase.AuthListener() {
			
			@Override
			public void onAuthSuccess(Object arg0) {
				// TODO Auto-generated method stub
				writeLog("onAuthSuccess");
			}
			
			@Override
			public void onAuthRevoked(FirebaseError arg0) {
				// TODO Auto-generated method stub
				writeLog("onAuthRevoked");
			}
			
			@Override
			public void onAuthError(FirebaseError arg0) {
				// TODO Auto-generated method stub
				writeLog("onAuthError");
			  }
		});