//http://stackoverflow.com/questions/3312643/android-webview-utf-8-not-showing
//http://stackoverflow.com/questions/4933069/android-webview-with-garbled-utf-8-characters


//warning with .loadData is not working!!
				WebView wb = (WebView) findViewById(R.id.txtCAUSEcomp);
				wb.loadDataWithBaseURL(null,"<FONT COLOR='#009BBF'>ΔΙΑΓΩΝΙΣΜΟΙ</FONT> ΣΥΜΜΕΤΕΧΕΙ ΤΟ " + arg0.child("title").getValue().toString(), "text/html", "UTF-8", null);