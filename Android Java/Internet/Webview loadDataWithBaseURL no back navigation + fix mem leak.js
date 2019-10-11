//https://code.google.com/p/android/issues/detail?id=4401
I noticed a major memory leak when loading many large pages with loadData, because the data: 
urls are stored in history. Switching to loadDataWithBaseURL(url,data,"text/html","UTF-8",url) 
fixes the memory leak and high cpu usage from using URLEncoder, however, you cant use
 the default back and forward feature of the WebView.
 I got around this by using my own back and forward stacks in code.