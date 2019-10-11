//http://www.dotnetperls.com/ashx

//make a bare service that lists only POST variables
<%@ WebHandler Language="C#" Class="Handler" %>

using System;
using System.Web;

public class Handler : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        if (Request.RequestType == "GET")
        {
            foreach (String key in Request.QueryString.AllKeys)
            {
                Response.Write(key + " : " + Request.QueryString[key] + "</br>");
            }
        }
    }
    
    //
    HttpRequest Request { get { return HttpContext.Current.Request; } }

    HttpResponse Response { get { return HttpContext.Current.Response; } }

    public bool IsReusable { get { return false; } }
}