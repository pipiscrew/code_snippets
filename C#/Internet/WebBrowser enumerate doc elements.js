///http://stackoverflow.com/a/14681398
//http://deltahacker.gr/ftiakste-to-diko-sas-robot/

foreach (HtmlElement HtmlElement1 in webBrowser1.Document.Body.All)
    {
    if (HtmlElement1.GetAttribute("value") == "Log in")
        {
        HtmlElement1.InvokeMember("click");
        break;
        }
    }