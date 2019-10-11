Solution 1 :
The following solution assumes that in manifest file you always set android:debuggable=true while developing and android:debuggable=false for application release (all done automatically by IDE, developer doesnt have to do anything).
public static boolean isDebug(Context c) {
    try {
        PackageManager pm = c.getPackageManager();
        PackageInfo pi = pm.getPackageInfo(c.getPackageName(), 0);
 
        return ((pi.applicationInfo.flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0);
    } catch (Exception e) {
        return false;
    }
}

Solution 2 (http://developer.android.com/tools/sdk/tools-notes.html) :
SDK Tools, Revision 17 (March 2012) writes : Builds now generate a class called BuildConfig containing a DEBUG constant that is automatically set according to your build type. You can check the (BuildConfig.DEBUG) constant in your code to run debug-only functions.
if (BuildConfig.DEBUG)
    mes(LoginActivity.this, "DEBUG");
else
    mes(LoginActivity.this, "RELEASE");
    

-----------------------------------------------------
Check debug flag:
boolean debug =
    (activity.getApplicationInfo().flags &
     ApplicationInfo.FLAG_DEBUGGABLE) != 0;


//example 
//http://stackoverflow.com/questions/3029819/android-automatically-choose-debug-release-maps-api-key/3828864/
public boolean isDebugBuild() throws Exception
{
   PackageManager pm = _context.getPackageManager();
   PackageInfo pi = pm.getPackageInfo(_context.getPackageName(), 0);

   return ((pi.applicationInfo.flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0);
}


//http://stackoverflow.com/questions/1743683/distinguishing-development-mode-and-release-mode-environment-settings-on-android
PackageInfo packageInfo = ... // get package info for your context
int flags = packageInfo.applicationInfo.flags; 
if ((flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0) {
    // development mode
} else {
    // release mode
}


//avoid context through :
PackageInfo packageInfo = getPackageManager().getPackageInfo(getPackageName(), 0);