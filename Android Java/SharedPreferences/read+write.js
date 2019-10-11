//http://stackoverflow.com/questions/5950043/how-to-use-getsharedpreferences-in-android

//stored into data/data/com.xx.xx
public class MainActivity extends Activity {

	private SharedPreferences uSettings;
	private String iVersion;
	private String iProject;
	private String iCompiled;
    private String iBombdate;
    
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		 setContentView(R.layout.activity_main);

		 //read settings
		uSettings = getSharedPreferences("appdetails", MODE_PRIVATE);
		 
	    iVersion = uSettings.getString("version" , "");
	    iProject = uSettings.getString("project" , "");
	    iCompiled= uSettings.getString("generated" , "");
	    iBombdate = uSettings.getString("bombdate" , "");
	    
	    
//on another method
		 SharedPreferences.Editor uSettingsEdit; 
		 uSettingsEdit = uSettings.edit(); //use the public uSettings
		 
		 uSettingsEdit.putString("version", version);
		 uSettingsEdit.putString("project", project);
		 uSettingsEdit.putString("generated", generated);
		 uSettingsEdit.putString("bombdate", bombDate);					                    
		 uSettingsEdit.commit();
		 
		 
/////2nd example

//First of all save user info like uname & password in SharedPreferences with this code.
SharedPreferences settings = getSharedPreferences("UserInfo", 0);
SharedPreferences.Editor editor = settings.edit();
editor.putString("Username",txtUname.getText().toString());
editor.putString("Password",txtPWD.getText().toString());
editor.commit();


//and then get SharedPreferences from below code
SharedPreferences settings = getSharedPreferences("UserInfo", 0);
txtUname.setText(settings.getString("Username", "").toString());
txtPWD.setText(settings.getString("Password", "").toString());