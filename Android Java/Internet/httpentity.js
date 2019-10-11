	 List<NameValuePair> pairs = new ArrayList<NameValuePair>();
    pairs.add(new BasicNameValuePair("message","hello from nodeJS"));
    pairs.add(new BasicNameValuePair("registration_ids", "APA91bFiDbWa0Xo9XlyBMXPahF_PnwSsWwEiRpj1_BRx3ILv1PXA26Ep4M9kjfj4dlGhBZhv9Pp6WPYVV1B3UpHyiFYDqmNdUxogdQ2hRvJNPHNbUpGILWY7VJCbrX-wxqUZg177lx3MeZW8q_56hkh1zk8xySGK0A"));
       
    HttpEntity entity = null;
	try {
		entity = new UrlEncodedFormEntity(pairs, "UTF-8");
	} catch (UnsupportedEncodingException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	