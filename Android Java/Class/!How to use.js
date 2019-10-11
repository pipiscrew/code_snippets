//we create a class
//we add a static field and get+set procs

	// //////////////////////////////
	private static General cm;

	public static General getGeneralMethods() {
		return cm;
	}

	public static void setGeneralMethods() {
		cm = new General();
	}

	// //////////////////////////////
	
	
//then on any activity we check the static field
public class MainActivity extends Activity {
	General cm = null; //declaration on activity

	//ctor
	public MainActivity() {
		cm = General.getGeneralMethods();
		if (cm == null) {
			General.setGeneralMethods();
			cm = General.getGeneralMethods();
		}
	}
	
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
		isConnected = cm.checkNetworkConnection(this, false);

		if (!isConnected && !General.fileExistance(getBaseContext(), "essential.txt"))
			isConnected = cm.checkNetworkConnection(this, true);
		else {
			String html = General.readRawTextFile(getBaseContext(), R.raw.jquery);

			new asyncTask().execute();
		}
		
	}