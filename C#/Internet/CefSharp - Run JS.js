//http://github.com/cefsharp/CefSharp/wiki/Frequently-asked-questions#CallJS



//How do you call a Javascript methods from .NET?
var script = string.Format("document.body.style.background = '{0}'", colors[color_index++]);
if (color_index >= colors.Length)
{
    color_index = 0;
}

webBrowser.ExecuteScriptAsync(script);



//How do you call a Javascript method that return a result?
// Get Document Height
var task = webBrowser.EvaluateScriptAsync("(function() { var body = document.body, html = document.documentElement; return  Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ); })();");

task.ContinueWith(t =>
{
    if (!t.IsFaulted)
    {
        var response = t.Result;
        EvaluateJavaScriptResult = response.Success ? (response.Result ?? "null") : response.Message;
    }
}, TaskScheduler.FromCurrentSynchronizationContext());