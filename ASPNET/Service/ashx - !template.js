//http://www.pipiscrew.com/2016/02/asp-net-create-an-ashx-handler/

//Create an empty web application
//RClick Project > Add New Item > WebForm (delete .designer + .cs files, hold only aspx)
//RClick Project > Add New Item > Generic Handler

//WebForm1.aspx
<%@ Page Language="C#" EnableViewState="false" AutoEventWireup="true" %>

<script src="assets/jquery-1.10.2.min.js"></script>

<script runat="server">
//void Button1_Click(Object sender, EventArgs e)
//{
//    Label1.Text = "Clicked at " + DateTime.Now.ToString();
//}
</script>
<html>
<head>
    <title>PipisCrew Test Area</title>

    <script type="text/javascript">

        $(function () {

            $('#frm').submit(function (e) {
                e.preventDefault();

                var postData = $(this).serializeArray();
                var formURL = $(this).attr("action");

                $.ajax(
                {
                    url: formURL,
                    type: $("#post_type").val(),
                    data: postData,
                    datatype: "json",
                    success: function (data, textStatus, jqXHR) {
                        $("#res_html").html(data);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert("ERROR - connection error");
                    }
                });
            });

        });

    </script>
</head>
<body>
    <form id="frm" action="w.ashx" runat="server">
        <div>
            <input name="page" value="offers" /><br />
            <input name="name" value="PipisCrew" /><br />
            <input name="Blood Type" value="A-" /><br />
            <input name="Married" value="No" /><br />

            <select id="post_type">
                <option>GET</option>
                <option>POST</option>
            </select><br />

            <button type="submit">SUBMIT</button>

        </div>
    </form>

    <div id="res_html" style="background-color:blue;color:white;"></div>


    
</body>
</html>


//w.ashx
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;

namespace WebApplicationASHX
{
    public class w : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {

            //Response.ContentType = "text/html";
            //context.Response.Write("Hello World");

            if (Request.RequestType == "GET")
            {
                foreach (String key in Request.QueryString.AllKeys)
                {
                    Response.Write(key + " : " + Request.QueryString[key] + "</br>");
                }
            }
            else if (context.Request.RequestType == "POST")
            {
                string[] keys = context.Request.Form.AllKeys;

                validate_post(keys);

                for (int i = 0; i < keys.Length; i++)
                {
                    Response.Write(keys[i] + ": " + Request.Form[keys[i]] + "</br>");
                }
            }
        }

        internal void offers(string[] keys)
        {

        }

        internal void validate_post(string[] keys)
        {
            try
            {
                if (keys.Contains("your_key"){
                    Request.Form["your_key"];
                } else 
                	kick_user();
            }
            catch (Exception x)
            {
                Response.Write(x.Message);
                Response.End();
            }
        }

        internal void kick_user()
        {
            //kick with 500
            Response.StatusCode = 500;
            Response.ContentType = "text/plain";
            Response.Write("Server internal error");
            Response.End();
        }

        //
        HttpRequest Request { get { return HttpContext.Current.Request; } }

        HttpResponse Response { get { return HttpContext.Current.Response; } }

        public bool IsReusable { get { return false; } }
    }
}
