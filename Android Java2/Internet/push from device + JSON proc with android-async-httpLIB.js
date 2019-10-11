//lib homepage http://loopj.com/android-async-http/
//asynch^ 

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

			AsyncHttpClient client = new AsyncHttpClient();
			//
			client.addHeader("Authorization", "key=AIzaSyALdfAIOgrbm8qTQ7ulxbqMXMSkpKcICjc");
			client.addHeader("Content-Type", "application/json; charset=utf-8");
			//

			RequestParams clparam = new RequestParams();

			client.post(MainActivity88.this, "https://android.googleapis.com/gcm/send", createStringEntity(json), null, new AsyncHttpResponseHandler() {
				@Override
				public void onSuccess(String response) {
					System.out.println(response);
				}
			});
		} catch (Exception e) {

			System.out.println(e);
		}
	}