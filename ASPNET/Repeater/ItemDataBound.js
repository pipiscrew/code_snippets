<script language="C#" runat="server">
    void Page_Load(Object Sender, EventArgs e)
    {
    	//linq
        WebApplication1.DataClasses1DataContext db = new WebApplication1.DataClasses1DataContext();

        WebApplication1.customer customer = new WebApplication1.customer();

        cdcatalog.DataSource = from p in db.customers select p;
        cdcatalog.DataBind();
    }

    protected void R1_ItemDataBound(object source, RepeaterItemEventArgs e)
    {
            // This event is raised for the header, the footer, separators, and items.

            // Execute the following logic for Items and Alternating Items.
            if (e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem)
            {
                System.Diagnostics.Debug.WriteLine((e.Item.DataItem as WebApplication1.customer).cust_name);
                    
                if (e.Item.ToString() == "Good")
                {
                    ((Label)e.Item.FindControl("RatingLabel")).Text = "<b>***Good***</b>";
                }
            }
        }
</script>

//you use eval or Container.DataItem
    <asp:Repeater id="cdcatalog" OnItemDataBound="R1_ItemDataBound" runat="server">
         <ItemTemplate>
            <li>
                <%# Eval("cust_name") %> - <%# (Container.DataItem as WebApplication1.customer).cust_address %>
            </li>
        </ItemTemplate>
    </asp:Repeater>