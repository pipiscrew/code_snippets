//on activity
getString(R.string.baseURL)

//in adapter
private Context c;
c.getResources().getString(R.string.baseURL)


//in application class
//http://stackoverflow.com/a/32564488
public class Dynomite extends Application {
 	 static String PHP_baseURL = null; 
	 static String API_baseURL = null; 
	 static String AES_SecretKey_PHP = null;
	 static String AES_IV_PHP = null;
	 
	 
	@Override
	public void onCreate() {
		super.onCreate();

		PHP_baseURL = getApplicationContext().getResources().getString(R.string.php_server);
		API_baseURL  = getApplicationContext().getResources().getString(R.string.asp_server);
		
		AES_SecretKey_PHP = getApplicationContext().getResources().getString(R.string.aes_secretkey_php);
		AES_IV_PHP = getApplicationContext().getResources().getString(R.string.aes_iv_php);
		
		
		
		//init here to exist for ever - futher validation on General.get_pref
		userSettings=getSharedPreferences("appdetails", 0);
		
		Dynomite.user_mail = userSettings.getString("mail", "");
		Dynomite.user_password = userSettings.getString("password", "");
	}