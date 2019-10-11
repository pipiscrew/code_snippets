//http://viralpatel.net/blogs/android-internet-connection-status-network-change/
//https://github.com/viralpatel/android-network-change-detect-example

//xml
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />



//NetworkUtil.java
package net.viralpatel.network;
 
import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
 
public class NetworkUtil {
     
    public static int TYPE_WIFI = 1;
    public static int TYPE_MOBILE = 2;
    public static int TYPE_NOT_CONNECTED = 0;
     
     
    public static int getConnectivityStatus(Context context) {
        ConnectivityManager cm = (ConnectivityManager) context
                .getSystemService(Context.CONNECTIVITY_SERVICE);
 
        NetworkInfo activeNetwork = cm.getActiveNetworkInfo();
        if (null != activeNetwork) {
            if(activeNetwork.getType() == ConnectivityManager.TYPE_WIFI)
                return TYPE_WIFI;
             
            if(activeNetwork.getType() == ConnectivityManager.TYPE_MOBILE)
                return TYPE_MOBILE;
        } 
        return TYPE_NOT_CONNECTED;
    }
     
    public static String getConnectivityStatusString(Context context) {
        int conn = NetworkUtil.getConnectivityStatus(context);
        String status = null;
        if (conn == NetworkUtil.TYPE_WIFI) {
            status = "Wifi enabled";
        } else if (conn == NetworkUtil.TYPE_MOBILE) {
            status = "Mobile data enabled";
        } else if (conn == NetworkUtil.TYPE_NOT_CONNECTED) {
            status = "Not connected to Internet";
        }
        return status;
    }
}


//NetworkChangeReceiver.java
package net.viralpatel.network;
 
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;
 
public class NetworkChangeReceiver extends BroadcastReceiver {
 
    @Override
    public void onReceive(final Context context, final Intent intent) {
 
        String status = NetworkUtil.getConnectivityStatusString(context);
 
        Toast.makeText(context, status, Toast.LENGTH_LONG).show();
    }
}

//AndroidMenifest
<application  ...>
     ...
        <receiver
            android:name="net.viralpatel.network.NetworkChangeReceiver"
            android:label="NetworkChangeReceiver" >
            <intent-filter>
                <action android:name="android.net.conn.CONNECTIVITY_CHANGE" />
                <action android:name="android.net.wifi.WIFI_STATE_CHANGED" />
            </intent-filter>
        </receiver>
      ...
</application>