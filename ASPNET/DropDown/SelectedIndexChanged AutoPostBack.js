/*
For normal client controls (such as a list control with AutoPostBack set to false), when a user chooses an item in the list, the browser does not communicate with the server. There's no network traffic and no delay for your user before they see the results of the choice, but there's also no opportunity to do anything in your server code, like calculate dependent values. If you want to do anything to the screen in response to the choice, you have to use a client-side script.

When AutoPostBack is set to true, selecting an item in the list sends a message to the server (via an HTTP POST). ASP.NET then executes whatever code you have attached to the list's changed event, rebuilds the page, and sends the revised page to the client.
*/

<asp:UpdatePanel ID="upProfessors" UpdateMode="Conditional" runat="server">
    <Triggers>
        <asp:AsyncPostBackTrigger ControlID="ddlSections" EventName="SelectedIndexChanged" />
        <asp:AsyncPostBackTrigger ControlID="ddlInstruments" EventName="SelectedIndexChanged" />
        <asp:AsyncPostBackTrigger ControlID="ddlConservatories" EventName="SelectedIndexChanged" />
    </Triggers>
    
	<ContentTemplate>
		<div class="feature_sec7 two Teachers" style="padding-top: 20px !important;">
		    <div class="container">
		        <div class="one_third" style="margin-right: 2%; text-align: left;">
		            <%= SiteSession.LanguageId == 1 ? "Τομέας" : "Section" %><br />
		            <br />
		            <asp:DropDownList ID="ddlSections" CssClass="slcStyle2 trigger-loader" AutoPostBack="true" OnSelectedIndexChanged="ddlSections_SelectedIndexChanged" runat="server"></asp:DropDownList>
		        </div>
		        <div class="one_third" style="margin-right: 2%; text-align: left;">
		            <%= SiteSession.LanguageId == 1 ? "Μάθημα" : "Course" %><br />
		            <br />
		            <asp:DropDownList ID="ddlInstruments" CssClass="slcStyle2 trigger-loader" AutoPostBack="true" OnSelectedIndexChanged="ddlInstruments_SelectedIndexChanged" runat="server"></asp:DropDownList>
		        </div>
		        <div class="one_third" style="margin-right: 2%; text-align: left;">
		            <%= SiteSession.LanguageId == 1 ? "Πόλη" : "City" %><br />
		            <br />
		            <asp:DropDownList ID="ddlConservatories" CssClass="slcStyle2 trigger-loader" AutoPostBack="true" OnSelectedIndexChanged="ddlConservatories_SelectedIndexChanged" runat="server"></asp:DropDownList>
		        </div>
		  </div>
	
	    <asp:ListView runat="server" ID="listViewProfessors" OnPagePropertiesChanging="listViewProfessors_PagePropertiesChanging" OnItemDataBound="listViewProfessors_ItemDataBound" ItemPlaceholderID="PlaceHolder1">
	        <LayoutTemplate>
	            <asp:PlaceHolder ID="PlaceHolder1" runat="server" />
	        </LayoutTemplate>
	        <ItemTemplate>
	            <div class="one_fourth">
	                <asp:HyperLink ID="hlnkProfessorImage" runat="server">
	                    <asp:Image ID="imgProfessorImage" CssClass="cirimg" runat="server" />
	                </asp:HyperLink>
	                <div class="cinfo">
	                    <h5>
	                        <asp:Literal ID="ltrlProfessorTitle" runat="server"></asp:Literal></h5>
	                    <em>
	                        <asp:Literal ID="ltrlProfessorinstrumentDesc" runat="server"></asp:Literal></em>
	                    <br />
	                    <br />
	                    <br />
	                    <asp:HyperLink ID="lnkViewBio" CssClass="button1 button blue" runat="server"></asp:HyperLink>
	                </div>
	            </div>
	        </ItemTemplate>
	    </asp:ListView>
	    
		<asp:DataPager runat="server" ID="ProductsDataPager" PageSize="12" PagedControlID="listViewProfessors">
			<Fields>
				<asp:NextPreviousPagerField ShowFirstPageButton="true" FirstPageText="START" ShowNextPageButton="False" PreviousPageText="< Previous" ButtonCssClass="navlinks" />
				<asp:NumericPagerField ButtonType="Link" CurrentPageLabelCssClass="navlinks active" NumericButtonCssClass="navlinks notactive" RenderNonBreakingSpacesBetweenControls="True" Visible="True" />
				<asp:NextPreviousPagerField ShowLastPageButton="true" LastPageImageUrl="END" ShowPreviousPageButton="false" ShowNextPageButton="true" NextPageText="Next >" ButtonCssClass="navlinks" />
			</Fields>
		</asp:DataPager>
	
	</ContentTemplate>
</asp:UpdatePanel>

protected void ddlSections_SelectedIndexChanged(object sender, EventArgs e)
{
}

protected void ddlInstruments_SelectedIndexChanged(object sender, EventArgs e)
{
}

protected void ddlConservatories_SelectedIndexChanged(object sender, EventArgs e)
{	
}