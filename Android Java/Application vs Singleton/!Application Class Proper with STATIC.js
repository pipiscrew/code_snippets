package x;

import android.app.Application;

public class Dynomite extends Application {
	//private SocialAuthAdapter adapter;
	static int loginWay = -1; // 0-Firebase 1-FB -2GOO -3TW
	static String PHP_baseURL = "http://x.eu.x.x.name-x.x/";
	static String API_baseURL = "http://x.eu.x.x-x.x/";
	static Boolean isConnected = false;
	static Boolean isAuthenticated = false;
	
	final String AES_SecretKey_PHP = "1234560789123456";
	final String AES_IV_PHP = "1234560789123456"; 
	
	@Override
	public void onCreate() {
		super.onCreate();
	}
	
}


//fragment
client.post(c,  Dynomite.PHP_baseURL + "test.php", clparam,  new AsyncHttpResponseHandler() {