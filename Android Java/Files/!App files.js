ContextWrapper.getFilesDir()
	/data/data/<homeAppDir>/files
	
	
String d=getBaseContext().getApplicationInfo().dataDir;
	/data/data/<homeAppDir>/
	
	
	
^^
It returns the path to files folder inside  Android/data/data/your_package/ on your SD card.\
 It is used to store any required files for your app (e.g. images downloaded from web or cache files).
 Once the app is uninstalled, any data stored in this folder is gone too.

getExternalStorageDirectory()
It returns the root path to your SD card (e.g mnt/sdcard/). If you save data on this path and uninstall
the app, that data won't be lost.

more @ http://developer.android.com/reference/android/content/ContextWrapper.html#getExternalFilesDir(java.lang.String)