//http://stackoverflow.com/questions/3250034/android-webview-intercept-clicks

public class Home extends Activity {

	//class
	JSONParser cm = null;
	int menuIndex = 1;
	tabVARS settings;
	
	WebViewClient localrequestListener = new WebViewClient(){
	    // you tell the webclient you want to catch when a url is about to load
	    @Override
	    public boolean shouldOverrideUrlLoading(WebView  view, String  url){
	    	 if( url.startsWith("local-request:") ){
		        	int tmp;
		        	String tmpSTR=url.substring(url.indexOf(":")+1); 
		        	
		        	if (General.isInteger(tmpSTR))
		        		tmp=Integer.parseInt(tmpSTR);
		        	else
		        		tmp=1;
		        	
		        	showCatalogItem(tmp);
		        }
	    	 
	        return true;
	    }
	    // here you execute an action when the URL you want is about to load
//	    @Override
//	    public void onLoadResource(WebView  view, String  url){
//	    }
	};
	
	
	
//on create
			WebView wb = (WebView) findViewById(R.id.webView1);
			
			wb.setWebViewClient(localrequestListener);