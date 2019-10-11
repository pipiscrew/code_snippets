//http://stackoverflow.com/a/6629103

The following solution worked for me:

//Client Side:
        $.ajax({
            type: "POST",
            url: "handler.ashx",
            data: { firstName: 'stack', lastName: 'overflow' },
            // DO NOT SET CONTENT TYPE to json
            // contentType: "application/json; charset=utf-8", 
            // DataType needs to stay, otherwise the response object
            // will be treated as a single string
            dataType: "json",
            success: function (response) {
                alert(response.d);
            }
        });
        
//Server Side .ashx
    using System;
    using System.Web;
    using Newtonsoft.Json;

    public class Handler : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";

            string myName = context.Request.Form["firstName"];

            // simulate Microsoft XSS protection
            var wrapper = new { d = myName };
            context.Response.Write(JsonConvert.SerializeObject(wrapper));
        }

        public bool IsReusable
        {
           get
           {
                return false;
           }
        }
    }