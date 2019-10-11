//http://damianflannery.wordpress.com/2010/09/28/android-webview-with-https-loadurl-shows-blankempty-page///

engine = (WebView) findViewById(R.id.my_webview);
engine.setWebViewClient(new WebViewClient() {
 public void onReceivedSslError (WebView view, SslErrorHandler handler, SslError error) {
 handler.proceed() ;
 }
}