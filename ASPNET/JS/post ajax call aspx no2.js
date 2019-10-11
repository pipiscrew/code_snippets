//http://www.aspsnippets.com/Articles/Calling-ASPNet-WebMethod-using-jQuery-AJAX.aspx


//test.html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>
<script type = "text/javascript">
function ShowCurrentTime() {
    $.ajax({
        type: "POST",
        url: "CS.aspx/GetCurrentTime",
        data: '{name: "' + $("#<%=txtUserName.ClientID%>")[0].value + '" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccess,
        failure: function(response) {
            alert(response.d);
        }
    });
}
function OnSuccess(response) {
    alert(response.d);
}
</script>
 
<div>
Your Name :
<asp:TextBox ID="txtUserName" runat="server"></asp:TextBox>
<input id="btnGetTime" type="button" value="Show Current Time"
    onclick = "ShowCurrentTime()" />
</div>

//CS.aspx
[System.Web.Services.WebMethod]
public static string GetCurrentTime(string name)
{
    return "Hello " + name + Environment.NewLine + "The Current Time is: "
        + DateTime.Now.ToString();
}
By: costas|