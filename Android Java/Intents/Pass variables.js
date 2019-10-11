//parent call
						Intent intent = new Intent(getBaseContext(), StyleWEB.class);
						intent.putExtra("title", detail.getTitle());
						intent.putExtra("pageColor", detail.getPageColor());
						intent.putExtra("html", detail.getHtml());
						startActivity(intent);
						
//StyleWEB
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.style_web);

		String title = "";
		String html = "";
		int pgColor = 0;
		int titlebarGradient = 0;

		Bundle extras = getIntent().getExtras();
		if (extras != null) {
			title = extras.getString("title");
			pgColor = extras.getInt("pageColor");
			html = extras.getString("html");

			// used only from Specials activity, otherwise is 0
			titlebarGradient = extras.getInt("titlebarGradient");
		}
		
--

//http://stackoverflow.com/questions/2091465/how-do-i-pass-data-between-activities-in-android
In your current Activity, create a new Intent:

	Intent i = new Intent(getApplicationContext(), NewActivity.class);
	i.putExtra("new_variable_name","value");
	startActivity(i);

Then in the new Activity, retrieve those values:

	Bundle extras = getIntent().getExtras();
	if (extras != null) {
	    String value = extras.getString("new_variable_name");
	}
