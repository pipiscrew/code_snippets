//http://www.pipiscrew.com/2014/12/php-httppost-minimal/

        String URL = "http://x.com/sign_up.php";
        
		ArrayList<NameValuePair> nameValuePairs = new ArrayList<NameValuePair>();

		nameValuePairs.add(new BasicNameValuePair("email",email));
		nameValuePairs.add(new BasicNameValuePair("password", pass));
		
        HttpClient httpClient = new DefaultHttpClient();
        
        HttpPost post =  new HttpPost(URL); 
        post.setEntity(new UrlEncodedFormEntity(nameValuePairs));

        try {
    		HttpResponse response = httpClient.execute(post);
    		
    		String responseString = EntityUtils.toString(response.getEntity());
            Log.w("test", responseString);
        } catch (IOException e) {
            e.printStackTrace();
        }