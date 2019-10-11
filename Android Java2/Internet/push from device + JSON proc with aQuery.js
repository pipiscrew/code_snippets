//https://code.google.com/p/android-query/


//more misc @:
	//http://code.google.com/p/android-query/
	//https://code.google.com/p/android-query/wiki/AsyncAPI#Http_Headers
	//http://stackoverflow.com/questions/20689426/android-asyncapi-ahax-query-with-custom-http-headers
	//custom http://stackoverflow.com/questions/15322940/android-call-php-with-http-get
	
	private static HttpEntity createStringEntity(JSONObject params) {
		StringEntity se = null;
		try {
			se = new StringEntity(params.toString(), "UTF-8");
			se.setContentType("application/json; charset=UTF-8");
		} catch (UnsupportedEncodingException e) {

		}
		return se;
		}

	public void btnAdd_Click(View v) {
		try {
			JSONObject json = new JSONObject();

			JSONArray arr = new JSONArray();
			JSONObject element = new JSONObject();
			element.put("message", "hell00o!");
			arr.put(element);

			JSONArray arr2 = new JSONArray();
			arr2.put("APA91bFiDbWa0Xo9XlyBMXPahF_PnwSsWwEiRpj1_BRx3ILv1PXA26Ep4M9kjfj4dlGhBZhv9Pp6WPYVV1B3UpHyiFYDqmNdUxogdQ2hRvJNPHNbUpGILWY7VJCbrX-wxqUZg177lx3MeZW8q_56hkh1zk8xySGK0A");

			json.put("data", element);
			json.put("registration_ids", arr2);



			AjaxCallback<JSONObject> cb = new AjaxCallback<JSONObject>() {

			    @Override
			    public void callback(String url, JSONObject html, AjaxStatus status) {        
			    	System.out.println(html);
			    }
			};
			
			AQuery aq = new AQuery(MainActivity88.this);

			cb.header("Authorization", "key=AIzaSyALdfAIOgrbm8qTQ7ulxbqMXMSkpKcICjc");
			cb.header("Content-Type", "application/json; charset=utf-8");

			Map<String, Object> params = new HashMap<String, Object>();
			params.put(AQuery.POST_ENTITY, createStringEntity(json));

			cb.params(params);

			aq.ajax("https://android.googleapis.com/gcm/send",JSONObject.class, cb);

		} catch (Exception e) {

			System.out.println(e);
		}
	}