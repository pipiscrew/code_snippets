//http://stackoverflow.com/questions/13598472/activity-closes-when-there-is-no-internet-connection

<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>

    public static boolean checkNetworkConnection(Context context)
    {
        final ConnectivityManager connMgr = (ConnectivityManager)context.getSystemService(Context.CONNECTIVITY_SERVICE);

        final android.net.NetworkInfo wifi =connMgr.getNetworkInfo(ConnectivityManager.TYPE_WIFI);
        final android.net.NetworkInfo mobile =connMgr.getNetworkInfo(ConnectivityManager.TYPE_MOBILE);

        if(wifi.isConnected()||mobile.isConnected())
            return true;
        else
            return false;
    }
    
    
    //with show alertdialog when is no connection
	public boolean checkNetworkConnection(Context c, boolean showWarning) {
		try {
			final ConnectivityManager connMgr = (ConnectivityManager) c.getSystemService(Context.CONNECTIVITY_SERVICE);

			final android.net.NetworkInfo wifi = connMgr.getNetworkInfo(ConnectivityManager.TYPE_WIFI);
			final android.net.NetworkInfo mobile = connMgr.getNetworkInfo(ConnectivityManager.TYPE_MOBILE);

			if (wifi.isConnected() || mobile.isConnected())
				return true;
			else {
				if (showWarning) {
					String error = "No network found please retry or check network settings.";
					AlertDialog.Builder alertbox = new AlertDialog.Builder(c);
					alertbox.setMessage(error);
					alertbox.setNeutralButton("Ok", new DialogInterface.OnClickListener() {
						public void onClick(DialogInterface arg0, int arg1) {
							System.exit(0);
						}
					});

					alertbox.show();
				}
				// show the alert box

			}
			return false;
		} catch (Exception e) {
			System.out.println(e.toString());
			return false;
		}
	}
	
//method2
        public static boolean haveInternet(Context context)
        {
        ConnectivityManager connectivityManager = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo info = connectivityManager.getActiveNetworkInfo();
                
                if (info==null || !info.isConnected())
                {
                        return false;
                }
                
                if (info.isRoaming())
                {
                        return true;
                }
                
                return true;
        }