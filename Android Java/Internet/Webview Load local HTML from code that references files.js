<html>
    <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
        <link href="jquery.mobile-1.1.1.css" rel="stylesheet">
        <style type="text/css" media="screen">
            body{
                margin: 0px;
                width:100%%;
                word-wrap:break-word;
                font-family: Helvetica,Arial,sans-serif;
            }
            p {
                padding:3px;
            }
        </style>
    </head>
<body>
<div align="center">Go here and apply online:</div><div align="center">
<a href="http://www.kfcjobs.com.au">www.kfcjobs.com.au</a></div><div align="center">
<img src="http://www.essentialapps.com.au/AppData/AU/002/0000006/images/Jobs%201%20%28320%29.jpg" width="320" height="462"/>
</body>
</html>

static final String appURL = "http://www.essentialapps.com.au/AppData/AU/002/0000006/";
serverJSON.replace(General.appURL + "images",
								"file://" + General.appExPath(getBaseContext())

//settings.JSONItem = "file://" + General.appExPath(getBaseContext()) + "test.jpg")

	public static String  appExPath (Context baseContext)
	{
		return Environment.getExternalStorageDirectory() 
                + "/Android/Data/" 
                + baseContext.getPackageName() 
                + "/files";
	}
	
	
	
			//webview HTML
			WebView wb = (WebView) findViewById(R.id.webView1);

			//to make faster the render hide the control.
			wb.setVisibility(View.INVISIBLE);
			//wb.loadData(settings.JSONItem, "text/html", null);
			wb.loadDataWithBaseURL("", settings.JSONItem, "text/html", "utf-8", "");
			wb.setVisibility(View.VISIBLE);
			}
			else
			{
				//webview HTML
				WebView wb = (WebView) findViewById(R.id.webView1);
				wb.loadData("<b>Internal error!</b>", "text/html", null);
			}