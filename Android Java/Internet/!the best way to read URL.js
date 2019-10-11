//http://www.sitepoint.com/loading-twitter-data-into-android-with-lists/

//only read 
                HttpClient hc = new DefaultHttpClient();
                HttpGet get = new HttpGet("http://pipiscrew.com/notes/utc.php");
                final HttpResponse rp = hc.execute(get);

                if (rp.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {

                            String result = null;

                            result = EntityUtils.toString(rp.getEntity());


//the source
private ArrayList<Tweet> loadTweets(){
        ArrayList<Tweet> tweets = new ArrayList<Tweet>();
        try {
                HttpClient hc = new DefaultHttpClient();
                HttpGet get = new
                HttpGet("http://search.twitter.com/search.json?q=android");
                HttpResponse rp = hc.execute(get);
                if(rp.getStatusLine().getStatusCode() == HttpStatus.SC_OK)
                {
                        String result = EntityUtils.toString(rp.getEntity());
                        JSONObject root = new JSONObject(result);
                        JSONArray sessions = root.getJSONArray("results");
                        for (int i = 0; i < sessions.length(); i++) {
                                JSONObject session = sessions.getJSONObject(i);
                                Tweet tweet = new Tweet();
                                tweet.content = session.getString("text");
                                tweet.author = session.getString("from_user");
                                tweets.add(tweet);
                        }
                }
        } catch (Exception e) {
                Log.e("TwitterFeedActivity", "Error loading JSON", e);
        }
        return tweets;
}