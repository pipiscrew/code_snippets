//assume you have 
//activity_splash in layout folder 
//and you have set the background image
public class Splash extends Activity {

	// ===========================================================
	// Fields
	// ===========================================================

	private final int SPLASH_DISPLAY_LENGHT = 2000;

	// ===========================================================
	// "Constructors"
	// ===========================================================

	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle icicle) {
		super.onCreate(icicle);
		// setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
		setContentView(R.layout.activity_splash);

		/*
		 * New Handler to start the Menu-Activity and close this Splash-Screen
		 * after some seconds.
		 */
		new Handler().postDelayed(new Runnable() {
			@Override
			public void run() {
				/* Create an Intent that will start the Menu-Activity. */
				Intent mainIntent = new Intent(Splash.this, MainActivity.class);
				startActivity(mainIntent);
				finish();
			}
		}, SPLASH_DISPLAY_LENGHT);
	}

}
