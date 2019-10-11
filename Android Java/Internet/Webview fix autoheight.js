protected void onCreate(Bundle savedInstanceState) {

		//fix for auto height - webviews must set onCreate!
		WebView wbD = (WebView) findViewById(R.id.txtCAUSEdescrLarge);
		wbD.loadDataWithBaseURL(null, "<body style='margin:0;padding:0;'>0</body>", "text/html", "UTF-8", null);
		wbD = (WebView) findViewById(R.id.txtCAUSEcomp);
		wbD.loadDataWithBaseURL(null, "<body style='margin:0;padding:0;'>0</body>", "text/html", "UTF-8", null);
		wbD = (WebView) findViewById(R.id.txtCAUSEmoney);
		wbD.loadDataWithBaseURL(null, "<body style='margin:0;padding:0;'>0</body>", "text/html", "UTF-8", null);
		wbD = (WebView) findViewById(R.id.txtCAUSEbids);
		wbD.loadDataWithBaseURL(null, "<body style='margin:0;padding:0;'>0</body>", "text/html", "UTF-8", null);
		.
		.
		.
		then re-set it!