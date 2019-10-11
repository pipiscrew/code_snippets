the tag 
    <application
        android:icon="@drawable/android_app_icon"
        
in AndroidManifest.xml

        
	means will check for android_app_icon.* (png/jpg tested)
	
	in 
	ProjectFolder\res\drawable-mdpi
	ProjectFolder\res\drawable-hdpi
	
	
the tag
    <application
		android:label="@string/app_name" >
		
	means that will take the string variable name app_name from
	ProjectFolder\res\values\styles.xml
	
Screens
  <supports-screens android:largeScreens="false"
                    android:normalScreens="true"
                    android:smallScreens="false" />
                    
                    
NotitleBAR
    <application
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@android:style/Theme.NoTitleBar" >
        
Hidden Keyboard
        	<activity android:label="@string/app_name" android:name=".SelectBookmarkGroupActivity" android:windowSoftInputMode="stateAlwaysHidden" />