//http://stackoverflow.com/questions/11411009/delete-margins-in-webview

wbD.loadDataWithBaseURL(null,"<body style='margin:0;padding:0;'>" + arg0.child("descr").getValue().toString() + "</body>", "text/html", "UTF-8", null);