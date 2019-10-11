//http://www.kodejava.org/how-do-i-generate-uuid-guid-in-java/

        UUID uuid = UUID.randomUUID();
        String randomUUIDString = uuid.toString();
        
        
//or
import java.util.UUID;

public class UuidGenerator
{
  public static String getUuid()
  {
    return UUID.randomUUID().toString();
  }
}

//all the ways for ID
//http://www.limbaniandroid.com/2013/05/how-to-get-device-unique-id-in-android.html
Ways to get device id in Android
Unique number (IMEI, MEID, ESN, IMSI)
MAC Address
ANDROID_ID


//way1
import android.content.Context;
import android.telephony.TelephonyManager;
 
String imeistring=null;                        
String imsistring=null;
 
    TelephonyManager telephonyManager;                                            
    telephonyManager  = (TelephonyManager)getSystemService(Context.TELEPHONY_SERVICE);
 
    /*
    * getDeviceId() function Returns the unique device ID.
    * for example,the IMEI for GSM and the MEID or ESN for CDMA phones. 
    */                                                               
    imeistring = telephonyManager.getDeviceId();
 
    /*
    * getSubscriberId() function Returns the unique subscriber ID,
    * for example, the IMSI for a GSM phone.
    */
    imsistring = telephonyManager.getSubscriberId();  
    
    
    
//way2
import android.content.Context;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
 
 String macAddress=null;
    WifiManager wifiManager = ( WifiManager ) getSystemService(Context.WIFI_SERVICE);
    WifiInfo wInfo = wifiManager.getConnectionInfo();
    String macAddress = wInfo.getMacAddress();
    if (macAddress != null)
        macAddress = macAddress;