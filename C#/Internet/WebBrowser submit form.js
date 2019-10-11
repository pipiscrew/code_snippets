//http://stackoverflow.com/questions/2299273/how-do-i-submit-a-form-inside-a-webbrowser-control

//If you know the page has a single form:
foreach (HtmlElement form in webBrowser1.Document.Forms)
    form.InvokeMember("submit");

//If you know the ID of the form you would like to submit:
HtmlElement form = webBrowser1.Document.GetElementById("FormID");
if (form != null)
    form.InvokeMember("submit");
    
    
//for ASP.NET works only 
 //http://stackoverflow.com/a/9117535
            //submit
            HtmlElement loBtn = webBrowser1.Document.GetElementById("ctl00_ContentPlaceHolder1_btnSearch");
            loBtn.InvokeMember("click");