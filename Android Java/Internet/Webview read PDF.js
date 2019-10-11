//http://stackoverflow.com/questions/5443137/reading-pdf-files

WebView webview = (WebView) findViewById(R.id.webview);
webview.getSettings().setJavaScriptEnabled(true); 
String pdf = "http://www.adobe.com/devnet/acrobat/pdfs/pdf_open_parameters.pdf";
webview.loadUrl("http://docs.google.com/gview?embedded=true&url=" + pdf);