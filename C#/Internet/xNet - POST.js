//https://github.com/X-rus/xNet
//https://habr.com/post/146475/
xNet - class library for .NET Framework

using (var request = new HttpRequest())
{
    var reqParams = new RequestParams();

    reqParams["login"] = "neo";
    reqParams["password"] = "knockknock";

    string content = request.Post(
        "www.whitehouse.gov", reqParams).ToString();
}