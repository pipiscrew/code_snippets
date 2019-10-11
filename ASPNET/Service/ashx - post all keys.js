//http://www.dotnetperls.com/ashx

//make a bare service that lists only POST variables
<%@ WebHandler Language="C#" Class="Handler" %>

using System;
using System.Web;

public class Handler : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
		if (context.Request.RequestType == "POST")
		{
		    string[] keys = context.Request.Form.AllKeys;
		
		    validate_post(keys);
		
		    for (int i = 0; i < keys.Length; i++)
		    {
		        Response.Write(keys[i] + ": " + Request.Form[keys[i]] + "</br>");
		    }
		}
    }
    
    //
    HttpRequest Request { get { return HttpContext.Current.Request; } }

    HttpResponse Response { get { return HttpContext.Current.Response; } }

    public bool IsReusable { get { return false; } }
}