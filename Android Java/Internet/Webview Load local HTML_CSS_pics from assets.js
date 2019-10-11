In my PRJ/assets folder I have

icons-18-black.png
icons-18-white.png
icons-36-black.png
icons-36-white.png
jquery.mobile-1.1.1.css
web_container.html

//jquery.mobile-1.1.1.css
the icons*.png referenced on CSS file 
as 
background-image: url(file:///android_asset/icons-36-white.png);
	
//web_container.html
on main html the CSS referenced as
        <link href="file:///android_asset/jquery.mobile-1.1.1.css" rel="stylesheet">
	
the html contains a string that will gonna be replaced by 
dynamic HTML.

<body>%@</body>

in code now :
			WebView wb = (WebView) findViewById(R.id.webView1);

			//to make faster the render hide the control.
			wb.setVisibility(View.INVISIBLE);
			
			String html = General.readFileFromAssets(getBaseContext(), "web_container.html"); 
			html=html.replace("%@", settings.JSONItem);
			wb.loadDataWithBaseURL("", html, "text/html", "utf-8", "");
			
			wb.setVisibility(View.VISIBLE);