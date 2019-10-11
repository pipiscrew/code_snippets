<%@ Page Language="C#" %>

<script runat="server">
    
    protected void savebtn_Click(object sender, EventArgs e)
    {
        myDIV.InnerText = "this is a test";
        System.Diagnostics.Debug.WriteLine("this is a test");
    }
    
</script>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
    <script type="text/javascript">


        $(function () {

            //button click
            $('#btn').on('click', function (e) {
                e.preventDefault();

                $("#savebtn").click();

                $("#myDIV").html("ERROR");
            });

        });
    </script>
</head>

<body>
    <button id="btn" class="btn-primary">
        Push Me
    </button>



<form id="form1" runat="server">
 <asp:ScriptManager EnablePartialRendering="true" runat="server" />

    <asp:UpdatePanel UpdateMode="Conditional" runat="server">
        <Triggers>
            <asp:AsyncPostBackTrigger ControlID="savebtn" />
        </Triggers>
        <ContentTemplate>

        <br>
        <div id="myDIV" runat="server"></div>
        <br>

         <asp:Button ID="savebtn" runat="server" Text="my aspx button" OnClick="savebtn_Click" style="display: none"  />
        </ContentTemplate>
    </asp:UpdatePanel>

</form>
</body>
</html>