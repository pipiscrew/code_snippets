//https://www.firebase.com/docs/security/simple-login-java-overview.html  <--download the lib firebase-simple-login-LATEST.jar
//https://www.firebase.com/docs/security/simple-login-java-email-password.html


		Firebase ref = new Firebase("https://testarea.firebaseio.com/");
		SimpleLogin authClient = new SimpleLogin(ref);
		
		authClient.createUser("email@example.com", "very secret", new SimpleLoginAuthenticatedHandler() {

			@Override
			public void authenticated(
					com.firebase.simplelogin.enums.Error arg0, User arg1) {
				// TODO Auto-generated method stub
				
			}
			});