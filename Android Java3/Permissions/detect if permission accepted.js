//https://stackoverflow.com/a/35187818/1320686

/*
-First you should always be targeting the latest sdk version (24 now)
and second since you are only targeting sdk 15 you do not need
to ask for runtime permissions but a user on Android 6.0 and above
can always disable that permission, so you have to ask it also at runtime.
add permission to manifest file
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />


-for devices running Android 6.0 and above, you must request permission at RunTime
as the following example
*/ 

import android.Manifest;
import android.app.Activity;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;

public class MyActivity extends Activity implements  ActivityCompat.OnRequestPermissionsResultCallback {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        boolean permissionGranted = ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED;

        if(permissionGranted) {
            // {Some Code}
        } else {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, 200);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        switch (requestCode) {
            case 200: {
                if(grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    // {Some Code}
                }
            }
        }
    }
}

//if you get 
//Cannot Resolve Symbol ACCESS_FINE_LOCATION

//since sometimes it uses class manifest, make sure that using 
import android.Manifest; 