//http://www.androidsnippets.com/get-the-phones-last-known-location-using-locationmanager

private double[] getGPS() {
        LocationManager lm = (LocationManager) getSystemService(Context.LOCATION_SERVICE);  
        List<String> providers = lm.getProviders(true);

        /* Loop over the array backwards, and if you get an accurate location, then break out the loop*/
        Location l = null;
        
        for (int i=providers.size()-1; i>=0; i--) {
                l = lm.getLastKnownLocation(providers.get(i));
                if (l != null) break;
        }
        
        double[] gps = new double[2];
        if (l != null) {
                gps[0] = l.getLatitude();
                gps[1] = l.getLongitude();
        }
        return gps;
}


//get country ISO
//http://stackoverflow.com/questions/3659809/where-am-i-get-country
				TelephonyManager tm = (TelephonyManager) getSystemService(Context.TELEPHONY_SERVICE);
				String countryCode = tm.getSimCountryIso();
				Toast.makeText(getApplicationContext(), countryCode, 2).show();
				
				
//on CDMA devices no working^^
/**
 * Get ISO 3166-1 alpha-2 country code for this device (or null if not available)
 * @param context Context reference to get the TelephonyManager instance from
 * @return country code or null
 */
public static String getUserCountry(Context context) {
    try {
        final TelephonyManager tm = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
        final String simCountry = tm.getSimCountryIso();
        if (simCountry != null && simCountry.length() == 2) { // SIM country code is available
            return simCountry.toLowerCase(Locale.US);
        }
        else if (tm.getPhoneType() != TelephonyManager.PHONE_TYPE_CDMA) { // device is not 3G (would be unreliable)
            String networkCountry = tm.getNetworkCountryIso();
            if (networkCountry != null && networkCountry.length() == 2) { // network country code is available
                return networkCountry.toLowerCase(Locale.US);
            }
        }
    }
    catch (Exception e) { }
    return null;
}