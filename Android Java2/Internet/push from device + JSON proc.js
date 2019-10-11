//http://stackoverflow.com/questions/14119410/json-not-working-with-httppost-probably-around-setentity
	
	public static HttpUriRequest createPostForJSONObject(JSONObject params, String url) {
	    HttpPost post = new HttpPost(url);
	    post.setEntity(createStringEntity(params));
	    return post;
	}

	private static HttpEntity createStringEntity(JSONObject params) {
	    StringEntity se = null;
	    try {
	        se = new StringEntity(params.toString(), "UTF-8");
	        se.setContentType("application/json; charset=UTF-8");
	    } catch (UnsupportedEncodingException e) {

	    }
	    return se;
	}
	
	public void btnAdd_Click(View v){
		StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
		StrictMode.setThreadPolicy(policy);
		
		 try {
            JSONObject json = new JSONObject();
            

            JSONArray arr = new JSONArray();
            JSONObject element = new JSONObject();
			element.put("message","hell00o!");
            arr.put(element);


            JSONArray arr2 = new JSONArray();
            arr2.put("APA91bFiDbWa0Xo9XlyBMXPahF_PnwSsWwEiRpj1_BRx3ILv1PXA26Ep4M9kjfj4dlGhBZhv9Pp6WPYVV1B3UpHyiFYDqmNdUxogdQ2hRvJNPHNbUpGILWY7VJCbrX-wxqUZg177lx3MeZW8q_56hkh1zk8xySGK0A");
            
            
            json.put("data", element);
            json.put("registration_ids", arr2);
            
  		  HttpClient httpClient = new DefaultHttpClient();
  		    try {
  		          HttpPost post = (HttpPost) createPostForJSONObject(json, "https://android.googleapis.com/gcm/send");
  		        post.setHeader("Authorization", "key=AIzaSyALdfAIOgrbm8qTQ7ulxbqMXMSkpKcICjc");
  		          HttpResponse response = httpClient.execute(post);
  		          
  		        InputStream in = response.getEntity().getContent(); //Get the data in the entity                      
                String ja = convertStreamToString(in);       
                System.out.println(ja);
                
  		          // DO YOUR THING
  		    } catch (Exception e) {
  		         // HANDLE EXCEPTION
  		      System.out.println(e);
  		    }
  		    
		 } catch (JSONException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
        }