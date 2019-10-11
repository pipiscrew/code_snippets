//https://www.firebase.com/docs/security/simple-login-java-twitter.html
//setup twitter as https://www.firebase.com/docs/security/simple-login-twitter.html

//settings @twitter API
Access level Read-only (modify app permissions)
Callback URL https://auth.firebase.com/auth/twitter/callback
Sign in with Twitter Yes


	public SocialAuthAdapter adapter;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		adapter = new SocialAuthAdapter(new ResponseListener());

		adapter.addProvider(Provider.TWITTER, R.drawable.twitter);
		try {
			adapter.addConfig(Provider.TWITTER, "i5I1KM5nDEe5bBKCCjxfeg", "V8Av1dxfXsdeGbIxTYWg4TcRaDJ9aQ6GeZDFLfW71E", null);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			mes("adapter.addConfig ERROR " +e.getMessage());
		}
		
		//no needed
		//adapter.addCallBack(Provider.TWITTER, "https://auth.firebase.com/auth/twitter/callback");
	}

	public void btnLogin_Click(View view) {
		adapter.authorize(MainActivity.this, Provider.TWITTER);
	}
	
	public void btnLoginOUT_Click(View view) {
		try {
			adapter.signOut(MainActivity.this,org.brickred.socialauth.android.SocialAuthAdapter.Provider.TWITTER.toString());
			mes("logged out");
		} catch (Exception e) {
			mes("login first");
		}
	}

	private final class ResponseListener implements DialogListener {

		@Override
		public void onComplete(Bundle arg0) {
			String token = adapter.getCurrentProvider().getAccessGrant().getKey();
			
			mes("TWITTER accessToken :" + token);

			Profile x = adapter.getUserProfile();
			if (x != null) {
				Firebase ref = new Firebase("https://contests.firebaseio.com/");
				SimpleLogin authClient = new SimpleLogin(ref);
				
				authClient.loginWithTwitter(adapter.getCurrentProvider().getAccessGrant().getKey(), adapter.getCurrentProvider().getAccessGrant().getSecret(), Long.parseLong(x.getValidatedId()) , new SimpleLoginAuthenticatedHandler() {

					@Override
					public void authenticated(Error arg0, User arg1) {
						if (arg0 == null)
							mes("fb.TWITTER user logged in! UserID : " + arg1.getUserId());
						else
							mes("fb.TWITTER *ERROR*" + arg0.toString());
					}

				});
			}
			else 
				mes("adapter.getUserProfile is NULL ");
		}

		@Override
		public void onBack() {
			// TODO Auto-generated method stub

		}

		@Override
		public void onCancel() {
			// TODO Auto-generated method stub
			Log.e("onCancel","");
			
		}

		@Override
		public void onError(SocialAuthError arg0) {
			// TODO Auto-generated method stub
			Log.e("onError" , arg0.getMessage());

		}

	}

	void mes(String message) {
		AlertDialog.Builder bld = new AlertDialog.Builder(this);
		bld.setMessage(message);
		bld.setNeutralButton("OK", null);
		Log.d("MESSAGE", "Showing alert dialog: " + message);
		bld.create().show();
	}