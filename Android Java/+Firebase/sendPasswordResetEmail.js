		EditText emailCTL = General.getView(this, R.id.txtLEmail);

		String em = emailCTL.getText().toString().trim();

		if (em.length() == 0) {
			complain("Please enter your email!");
			return;
		}

		Firebase ref = new Firebase(Sigl.getInstance().getBaseURL());
		SimpleLogin authClient = new SimpleLogin(ref);

		authClient.sendPasswordResetEmail(em, new SimpleLoginCompletionHandler() {
			public void completed(Error error, boolean success) {
				if (error != null) {
					complain("There was an error processing this request");
				} else if (success) {
					complain("Password reset email sent successfully!\r\nPlease check your email!");
				}
			}
		});