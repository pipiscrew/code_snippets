//http://stackoverflow.com/questions/1944656/android-global-variable
//http://www.developerphil.com/dont-store-data-in-the-application-object/

//application class (Dynomite.java)
	public class Dynomite extends Application {
	
		private SocialAuthAdapter adapter;
	
		private int loginWay = -1; // 0-Firebase 1-FB -2GOO -3TW
		private String baseURL;
		private Boolean isConnected = false;
		private Boolean isAuthenticated = false;
		private int screen52heigthDP;
		private int screen52widthPX;
		private String userID = null;
		private String userCOUNTRY = null;
		private String userCOUNTRYcurrSign = null;
		private String userMAIL = null;
		private String userLOCALE = null;
		private String device_REG_ID = null;
	
		@Override
		public void onCreate() {
			super.onCreate();
		}
	
		public String getUserLOCALE() {
			return userLOCALE;
		}
	
		public void setUserLOCALE(String userLOCALE) {
			this.userLOCALE = userLOCALE;
		}
	
		public SocialAuthAdapter getAdapter() {
			return adapter;
		}
	
		public void setAdapter(SocialAuthAdapter adapter) {
			this.adapter = adapter;
		}
	
		public int getLoginWay() {
			return loginWay;
		}
	
		public void setLoginWay(int loginWay) {
			this.loginWay = loginWay;
		}
	
		public String getBaseURL() {
			return baseURL;
		}
	
		public void setBaseURL(String baseURL) {
			this.baseURL = baseURL;
		}
	
		public Boolean getIsConnected() {
			return isConnected;
		}
	
		public void setIsConnected(Boolean isConnected) {
			this.isConnected = isConnected;
		}
	
		public Boolean getIsAuthenticated() {
			return isAuthenticated;
		}
	
		public void setIsAuthenticated(Boolean isAuthenticated) {
			this.isAuthenticated = isAuthenticated;
		}
	
		public int getScreen52heigthDP() {
			return screen52heigthDP;
		}
	
		public void setScreen52heigthDP(int screen52heigthDP) {
			this.screen52heigthDP = screen52heigthDP;
		}
	
		public int getScreen52widthPX() {
			return screen52widthPX;
		}
	
		public void setScreen52widthPX(int screen52widthPX) {
			this.screen52widthPX = screen52widthPX;
		}
	
		public String getUserID() {
			return userID;
		}
	
		public void setUserID(String userID) {
			this.userID = userID;
		}
	
		public String getUserCOUNTRY() {
			return userCOUNTRY;
		}
	
		public void setUserCOUNTRY(String userCOUNTRY) {
			this.userCOUNTRY = userCOUNTRY;
		}
	
		public String getUserCOUNTRYcurrSign() {
			return userCOUNTRYcurrSign;
		}
	
		public void setUserCOUNTRYcurrSign(String userCOUNTRYcurrSign) {
			this.userCOUNTRYcurrSign = userCOUNTRYcurrSign;
		}
	
		public String getUserMAIL() {
			return userMAIL;
		}
	
		public void setUserMAIL(String userMAIL) {
			this.userMAIL = userMAIL;
		}
	
		public String getDevice_REG_ID() {
			return device_REG_ID;
		}
	
		public void setDevice_REG_ID(String device_REG_ID) {
			this.device_REG_ID = device_REG_ID;
		}
	
	}

//define it @ manifest as 
    <application
        android:name=".Dynomite"
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme" >
        

//on activity use :
((Dynomite) this.getApplication()).getBaseURL()
((Dynomite) this.getApplication()).setLoginWay(0);

//on activity callbacks
((Dynomite) getApplicationContext()).setUserMAIL(email);


//on adapter and other classes
 private static Context context;
	context.getApplicationContext()