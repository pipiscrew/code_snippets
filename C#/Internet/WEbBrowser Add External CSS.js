//http://dumpcoding.blogspot.gr/2011/05/add-css-file-to-browser-control-in.html?m=1

mshtml.HTMLDocument CurrentDocument = (mshtml.HTMLDocument)WebBrowser1.Document.DomDocument;

mshtml.IHTMLStyleSheet styleSheet = CurrentDocument.createStyleSheet("", 0);

StreamReader streamReader = new StreamReader("browser.css"); //browser.css is Stylesheet file.. @"..\browser.css"
string text = streamReader.ReadToEnd();
streamReader.Close();
styleSheet.cssText = text;