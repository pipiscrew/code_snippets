//https://developer.android.com/tools/publishing/versioning.html
?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
      package="com.example.package.name"
      android:versionCode="2"
      android:versionName="1.1">
    <application android:icon="@drawable/icon" android:label="@string/app_name">
        ...
    </application>
</manifest>
In this example, note that android:versionCode value indicates that the current .apk contains 
the second release of the application code, which corresponds to a minor follow-on release, 
as shown by the android:versionName string.





//sucks @

<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.tc.contests"
    android:versionCode="134"
    android:versionName="1.34" >
    
    private static int getAppVersion(Context context) {
        try {
            PackageInfo packageInfo = context.getPackageManager()
                    .getPackageInfo(context.getPackageName(), 0);
            return packageInfo.versionCode;
        } catch (NameNotFoundException e) {
            // should never happen
            throw new RuntimeException("Could not get package name: " + e);
        }
    }