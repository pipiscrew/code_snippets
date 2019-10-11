<script language="c#" runat="server">
    private long itemCount { get; set; }
    private List<BikeItem> BrotherPages { get; set; }
    protected void BindSideBarItems()
    {
        this.BrotherPages = SiteApplication.AllActivePagesList.Where(p => p.PageParentId == SiteSession.CurrentPage.PageParentId && p.PageInsideMenu).OrderBy(p => p.PageOrder).ToList();
        if (this.BrotherPages == null)
            this.divSidebarMenu.Visible = false;            
        else
        {
            itemCount = this.BrotherPages.Count() - 1;
            this.rptrSideBarItems.DataSource = this.BrotherPages;
            this.rptrSideBarItems.DataBind();
        }
    }

    protected void rptrSideBarItems_ItemDataBound(object source, RepeaterItemEventArgs e)
    {
        if (e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem)
        {
            ////////////////////////////
            //[start] menu_item wrapper
            var menu_item_wrapper = (e.Item.DataItem as BikeItem);
            
            var ctl = (HtmlGenericControl)e.Item.FindControl("SideBarItems");
            ctl.ID = "SideBarItems" + e.Item.ItemIndex.ToString();
            //ctl.InnerHtml = "test";


            var class_name = (e.Item.ItemIndex + 1 == itemCount && (menu_item_wrapper.PageId) == SiteSession.CurrentPage.PageId) ?
                        "category-current last" : e.Item.ItemIndex + 1 == itemCount ? "category-item last" :
                        (menu_item_wrapper.PageId == SiteSession.CurrentPage.PageId) ? "category-current" : "category-item";

            ctl.Attributes["class"] = class_name;
            //[end] menu_item wrapper
            ////////////////////////////

            //subitems of menu_item
            List<BikeItem> subitems = BikeItem.GetChildPages(menu_item_wrapper.PageId).Where(p => p.PageInsideMenu).ToList();

            string html_content = null;

            if (subitems.Count > 0)
            {
                html_content = BikeItemCaption.GetPageCaptionTitle(menu_item_wrapper.PageId) + "\r\n" + process_menu_item(subitems);
                ctl.InnerHtml = html_content;
                return;
            }
            else
                html_content = BikeItemCaption.GetPageCaptionTitle(menu_item_wrapper.PageId);

            ////////////////////////////
            //[start] menu_item hyperlink
            var menu_item = (HyperLink)e.Item.FindControl("hLnkMenuPage");
            menu_item.NavigateUrl = menu_item_wrapper.PageIsRedirect ? menu_item_wrapper.PageRedirectUrl : (menu_item_wrapper.PageIsLast
                                    || BikeItem.GetChildPages(menu_item_wrapper.PageId).Where(p => p.PageInsideMenu).ToList().Count == 0) ?
                                            VirtualPathUtility.ToAbsolute("~/") + menu_item_wrapper.PageUrl : "javascript:void(0);";

            menu_item.Target = menu_item_wrapper.PageIsRedirect ? "_blank" : "_self";
            menu_item.Text = html_content;
            //[end] menu_item hyperlink            
            ////////////////////////////
        }
    }

    internal string process_menu_item(List<BikeItem> menu_item)
    {
        string html = "";

        foreach (BikeItem item in menu_item)
        {
            html += "<a style='margin-left:10px' href='" + VirtualPathUtility.ToAbsolute("~/") + item.PageUrl + "' target='_blank'>" + BikeItemCaption.GetPageCaptionTitle(item.PageId) + "</a>\r\n";
        }

        return html;
    }
</script>

<% if (!this.Page.IsPostBack) { BindSideBarItems(); } %>
<div id="divSidebarMenu" runat="server">
    <div id="sidebar-menu">
        <asp:Repeater ID="rptrSideBarItems" OnItemDataBound="rptrSideBarItems_ItemDataBound" runat="server">
            <HeaderTemplate>
                <div class="category-root"><a href="#"><%# BikeItemCaption.GetPageCaptionTitle(SiteSession.CurrentPage.PageParentId) %></a></div>
            </HeaderTemplate>
            <ItemTemplate>
                <div id="SideBarItems" clientidmode="static" runat="server">
                    <asp:HyperLink ID="hLnkMenuPage" clientidmode="static" runat="server" /> 
                </div>
            </ItemTemplate>
        </asp:Repeater>
    </div>
</div>