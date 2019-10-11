    public String login(String url) throws ClientProtocolException, IOException {
        HttpPost post = new HttpPost(url);
 
        ArrayList pa = new ArrayList();
        pa.add( new BasicNameValuePair( "username", "admin"));
        pa.add( new BasicNameValuePair( "password", "admin"));
        post.setEntity( new UrlEncodedFormEntity(pa, "UTF-8"));
 
        HttpResponse res = client.execute(post);
 
        BufferedReader br = new BufferedReader(new InputStreamReader(res.getEntity().getContent()));
        String data = "";
        String line = "";
        while ((line = br.readLine()) != null) {
             data = data + line;
        }
        return data;
    }