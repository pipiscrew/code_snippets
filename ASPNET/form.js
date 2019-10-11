<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication3.WebForm1"  %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css?parameter=1" rel="stylesheet"/>

<script runat="server">
void Button1_Click(Object sender, EventArgs e)
{
    Label1.Text = "Clicked at " + DateTime.Now.ToString();
}
</script>

    <script type="text/javascript">

		    $(function () {

		        //button click
		        $('#btn').on('click', function (e) {
		            $("#myDIV").html("ERROR 09090909");
		        });

		    });
		</script>
	</head>
	
	<body>
		
  <form id="Form1" runat="server">
    <div>
       <asp:Label id="Label1" 
         runat="server" Text="Label">
       </asp:Label>
       <br />
       <asp:Button id="Button1" 
         runat="server" 
         onclick="Button1_Click" 
         Text="Button">
      </asp:Button>
    </div>
  </form>

		<button id="btn">
			Push Me
		</button>
		
		<br><div id="myDIV"></div><br>
		
		
	</body>
</html>
