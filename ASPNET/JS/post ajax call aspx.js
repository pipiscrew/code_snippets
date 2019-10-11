<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication1.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script type='text/javascript' src='//code.jquery.com/jquery-1.11.0.min.js'></script>
    <title></title>

		<script type="text/javascript">

		    $(function () {

		        //button click
		        $('#btn').on('click', function (e) {
		            $.ajax({
		                type: "POST",
		                url: "WebForm2.aspx/SendMessage", //"Handler1.ashx/SendMessage", //
		                //data: "{subject:'x',message:'y,messageId:'q',pupilId:'a'}",
		                contentType: "application/json; charset=utf-8",
		                dataType: "json",
		                success: function (msg) {
		                    alert(msg);
		                    // Do something interesting here.
		                }
		            });
		        });

		    });
		</script>
</head>
<body>
		<button id="btn">
			Push Me
		</button>
		
		<br><div id="myDIV"></div><br>
</body>
</html>



//WebForm2.aspx
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication1
{
    public partial class WebForm2 : System.Web.UI.Page
    {
        [WebMethod(EnableSession = false)]
        public static string SendMessage()
        {
            return "Hello: " + DateTime.Now.Millisecond;
        }
    }
}