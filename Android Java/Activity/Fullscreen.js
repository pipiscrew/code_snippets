@ values/styles.xml
    <!-- Application theme. -->
    <style name="AppTheme" parent="AppBaseTheme">

        <!-- All customizations that are NOT specific to a particular API-level can go here. -->
        <item name="android:windowNoTitle">true</item>
        <item name="android:windowFullscreen">true</item>
    </style>
    
    
    
///
		public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		// setContentView(R.layout.tabbar_layout);

		// full screen
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

		setContentView(R.layout.tabbar_layout);
                                
                                
OR

//http://www.androidsnippets.com/how-to-make-an-activity-fullscreen
protected void setFullScreen(Context currContext) {
 ((Activity) currContext).requestWindowFeature(Windows.FEATURE_NO_TITLE);
 ((Activity) currContext).getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN); 
 }
 
OR

//Alternatively you can add

android:theme="@android:style/Theme.NoTitleBar.Fullscreen"

//to AndroidManifest.xml