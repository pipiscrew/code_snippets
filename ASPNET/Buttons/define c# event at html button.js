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

<button runat="server" onServerClick="savebtn_Click">HTML Test</button>