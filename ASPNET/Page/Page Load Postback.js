<%@ Page Language="C#" %>
 
<script runat="server">
     
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack)
        {
            this.myDIV.InnerText = "is postback";
        }
        else
        {
            this.myDIV.InnerText = "first land";
        }
    }
     
    protected void savebtn_Click(object sender, EventArgs e)
    {
        System.Diagnostics.Debug.WriteLine("this is a test");
    }
     
</script>

<asp:Button ID="savebtn" runat="server" Text="my aspx button" OnClick="savebtn_Click" style="display: none"  />
//or
<button runat="server" onServerClick="savebtn_Click">HTML Test</button>