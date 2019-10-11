//http://forums.asp.net/t/1260300.aspx
//https://dzone.com/articles/paging-listview-using

<script runat="server">
    List<Customers> activeCustomers = null;
     
    protected void Page_Init(object sender, EventArgs e)
    {
         
        using (CustomersContext context = new CustomersContext(General.ConnectionString))
        {
            // get sections 
            activeCustomers = sections.Where(i => i.IsActive).ToList();
        }
 
    }
 
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            BindListView();
        }
    }
</script>

<asp:ListView runat="server" ID="lstv" OnPagePropertiesChanging="lstv_PagePropertiesChanging" OnItemDataBound="lstv_ItemDataBound" ItemPlaceholderID="PlaceHolder1">
	<LayoutTemplate>
		<asp:PlaceHolder ID="PlaceHolder1" runat="server" />
	</LayoutTemplate>
	<ItemTemplate>
		<div class="one_fourth">
			<asp:HyperLink ID="hlnkClientImage" runat="server">
				<asp:Image ID="imgClientImage" CssClass="cirimg" runat="server" />
			</asp:HyperLink>
			<div class="cinfo">
				<h5>
					<asp:Literal ID="ltrlClientTitle" runat="server"></asp:Literal></h5>
				<em>
					<asp:Literal ID="ltrlClientDesc" runat="server"></asp:Literal></em>
				<br />
				<br />
				<br />
				<asp:HyperLink ID="lnkViewBio" CssClass="button1 button blue" runat="server"></asp:HyperLink>
			</div>
		</div>
	</ItemTemplate>
</asp:ListView>
<div>
	<div class="pagination center">
		<% var test = SiteSession.LanguageId == 1 ? "Προηγούμενο" : "Επόμενο"; %>
		<asp:DataPager runat="server" ID="ProductsDataPager" PageSize="12" PagedControlID="lstv">
			<Fields>
				<asp:NextPreviousPagerField ShowFirstPageButton="true" FirstPageText="START" ShowNextPageButton="False" PreviousPageText="< Previous" ButtonCssClass="navlinks" />
				<asp:NumericPagerField ButtonType="Link" CurrentPageLabelCssClass="navlinks active" NumericButtonCssClass="navlinks notactive" RenderNonBreakingSpacesBetweenControls="True" Visible="True" />
				<asp:NextPreviousPagerField ShowLastPageButton="true" LastPageImageUrl="END" ShowPreviousPageButton="false" ShowNextPageButton="true" NextPageText="Next >" ButtonCssClass="navlinks" />
			</Fields>
		</asp:DataPager>
	</div>
</div>

protected void lstv_PagePropertiesChanging(object sender, PagePropertiesChangingEventArgs e)
{
    this.ProductsDataPager.SetPageProperties(e.StartRowIndex, e.MaximumRows, false);
     
    // Rebind the ListView1  
    BindListView(); 
}
 
public void BindListView()
{
    lstv.DataSource = activeCustomers;
    lstv.DataBind();
}