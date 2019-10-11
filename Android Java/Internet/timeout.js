//http://stackoverflow.com/questions/18207265/set-timeout-in-httprequest-android

try{     
    HttpGet httpGet = new HttpGet(url);
    HttpParams httpParameters = new BasicHttpParams();
    // Set the timeout in milliseconds until a connection is established.
    // The default value is zero, that means the timeout is not used. 
    int timeoutConnection = 4000;
    HttpConnectionParams.setConnectionTimeout(httpParameters, timeoutConnection);
    // Set the default socket timeout (SO_TIMEOUT) 
    // in milliseconds which is the timeout for waiting for data.
    int timeoutSocket = 6000;
    HttpConnectionParams.setSoTimeout(httpParameters, timeoutSocket);

    DefaultHttpClient httpClient = new DefaultHttpClient(httpParameters);
    HttpResponse response = httpClient.execute(httpGet);
} catch (ConnectTimeoutException e) {
        //Here Connection TimeOut excepion    
      Toast.makeText(xyz.this, "Your connection timedout", 10000).show();
   }