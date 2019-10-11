//http://www.pipiscrew.com/2015/10/asp-net-html-post-to-aspx/

<%@ Page Language="C#" %>
<%@ Import Namespace="System.Drawing" %>
 
<!DOCTYPE html>
<script runat="server">
    protected void Unnamed1_Click(object sender, EventArgs e)
    {

        string conn = System.Configuration.ConfigurationManager.ConnectionStrings["SchoolEntities"].ConnectionString;
        SchoolModel.SchoolEntities env = new SchoolModel.SchoolEntities(conn);
        var queryRet = from p in env.bubbles select p;
        
        foreach (var results in queryRet)
        {
            Console.WriteLine(results.id);
        }

        WebApplication1.DataClasses1DataContext db = new WebApplication1.DataClasses1DataContext();

        WebApplication1.customer customer = new WebApplication1.customer
        {
            cust_name = Request.Form["cust_name"],
            cust_address = Request.Form["cust_address"],
            cust_po = Request.Form["cust_po"],
            site_id = int.Parse(Request.Form["site_id"])
        };

        db.customers.InsertOnSubmit(customer);

        bool status = false;
        try
        {
            db.SubmitChanges();
            status = true;
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
        }

        if (status)
        {
            lbl_status.Text = "saved";
            lbl_status.ForeColor = Color.Red;
        }

        else
            Response.Write("save error!");
 
    }
</script>
 
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <script type='text/javascript' src='assets/jquery-1.11.0.min.js'></script>
    <script src="assets/bootstrap.min.js"></script>
    <link href="assets/bootstrap.min.css" rel="stylesheet">
    <title></title>
</head>
<body>
    <form id="form2" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server">
        </asp:ScriptManager>
        <asp:UpdatePanel ID="UpdatePanel1" UpdateMode="Conditional" runat="server">
            <ContentTemplate>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-4">
                            <% 
                               // WebApplication1.DataClasses1DataContext db = new WebApplication1.DataClasses1DataContext();
 
                               //IEnumerable<WebApplication1.customer> customers = from p in db.customers
                               //                                                  select p;
                            %>
                            <div class="form-group">
                                <label>Name :</label>
                                <input id="cust_name" name="cust_name" type="text" maxlength="50" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label>Address :</label>
                                <input id="cust_address" name="cust_address" type="text" maxlength="50" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label>PO Box :</label>
                                <input id="cust_po" name="cust_po" type="text" maxlength="10" class="form-control" />
                            </div>
 
                            <div class="form-group">
                                <label>Site :</label>
                                <select id="site_id" name="site_id" class="form-control">
                                    <%
                                
                                        
                                        %>
                                </select>
                            </div>
 
                            <asp:Button ID="Button1" class="btn btn-default" Text="Save" runat="server" OnClick="Unnamed1_Click" />
                        </div>
                        <div class="col-md-4">
                            <asp:Label runat="server" ID="lbl_status"/>
                        </div>
                    </div>
                    <%--row--%>
                </div>
                <%--container--%>
            </ContentTemplate>
        </asp:UpdatePanel>
    </form>
</body>
</html>