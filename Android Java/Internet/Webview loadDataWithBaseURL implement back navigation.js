public class Home extends Activity {

	// history
	private ArrayList<Integer> history;
	int menuIndex = 1;

	// class
	JSONParser cm = null;
	tabVARS settings;

	WebViewClient localrequestListener = new WebViewClient() {
		// you tell the webclient you want to catch when a url is about to load
		@Override
		public boolean shouldOverrideUrlLoading(WebView view, String url) {
			if (url.startsWith("local-request:")) {
				int tmp;
				String tmpSTR = url.substring(url.indexOf(":") + 1);

				if (General.isInteger(tmpSTR))
					tmp = Integer.parseInt(tmpSTR);
				else
					tmp = 1;

				showCatalogItem(tmp, true);
			}

			return true;
		}
	};

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.style_web);
		this.history = new ArrayList<Integer>();

			// get the default menu (first)
			if (General.isInteger(settings.getIdstart()))
				menuIndex = Integer.parseInt(settings.getIdstart());

			// webview HTML
			WebView wb = (WebView) findViewById(R.id.webView1);

			// set listener
			wb.setWebViewClient(localrequestListener);

			// to make faster the render hide the control.
			wb.setVisibility(View.INVISIBLE);

			String html = General.readFileFromAssets(getBaseContext(), "web_container.html");
			html = html.replace("%@", settings.JSONchildren.get(menuIndex).getHtml());
			wb.loadDataWithBaseURL("", html, "text/html", "utf-8", "");

			wb.setVisibility(View.VISIBLE);
		} else {
			// webview HTML
			WebView wb = (WebView) findViewById(R.id.webView1);
			wb.loadData("<b>Internal error!</b>", "text/html", null);
		}
	}

	private void showCatalogItem(int index, boolean logMove) {
		if (settings != null) {
			// add to history
			if (logMove)
				history.add(menuIndex);

			menuIndex = index;

			// webview HTML
			WebView wb = (WebView) findViewById(R.id.webView1);

			// wb.setWebViewClient(localrequestListener);

			// to make faster the render hide the control.
			wb.setVisibility(View.INVISIBLE);

			String html = General.readFileFromAssets(getBaseContext(), "web_container.html");
			html = html.replace("%@", settings.JSONchildren.get(menuIndex).getHtml());
			wb.loadDataWithBaseURL("", html, "text/html", "utf-8", "");

			wb.setVisibility(View.VISIBLE);
		} else {
			// webview HTML
			WebView wb = (WebView) findViewById(R.id.webView1);
			wb.loadData("<b>Internal error!</b>", "text/html", null);
		}
	}

	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {
		if ((keyCode == KeyEvent.KEYCODE_BACK) && history.size() > 0) {

			int tmp = history.get(history.size() - 1);
			history.remove(history.size() - 1);

			showCatalogItem(tmp, false);

			return true;
		} else {
			return super.onKeyDown(keyCode, event);
		}
	}

}
