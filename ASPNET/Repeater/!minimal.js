                                <asp:Repeater ID="rptrMainMenu" runat="server">
                                    <HeaderTemplate>
                                        <ul class="nav navbar-nav">
                                    </HeaderTemplate>
                                    <ItemTemplate>
                                        <li class="list-group-item">
//Here keep the proper CSS class when the category has subcategories.  
                                            <a id='<%# "hLnkCategory_" + (Container.ItemIndex) %>' class='dropdown-toggle <%# (Container.DataItem as CatalogNode).Nodes.Any(nn => nn.Active) ? "" : " no-children" %>' data-toggle="dropdown">
                                                <%# Helpers.ToGreekUpper(Helpers.GetCatalogNodeTitle(Container.DataItem as CatalogNode, SiteSession.LanguageId).ToUpper()) %>
                                                <span class="caret"></span>
                                            </a>
                                        </li>
                                    </ItemTemplate>
                                    <FooterTemplate>
                                        </ul>
                                    </FooterTemplate>
                                </asp:Repeater>


//ex2
<script runat="server">
        List<CatalogNode> menuCategories = null;
        if (Session["MenuCategories"] == null)
        {
            menuCategories = SiteApplication.TopLevelCatalogs.OrderBy(n => n.Order).ToList();
            Session["MenuCategories"] = menuCategories;
        }
        else
            menuCategories = Session["MenuCategories"] as List<CatalogNode>;
            
        this.rptrSearchCategoriesCombo.DataSource = menuCategories;
        this.rptrSearchCategoriesCombo.DataBind();
</script>

        <asp:Repeater ID="rptrSearchCategoriesCombo" runat="server">
            <ItemTemplate>
                <div class="category-entry" data-id="<%# (Container.DataItem as CatalogNode).Id %>">
                    <%# Helpers.ToGreekUpper(Helpers.GetCatalogNodeTitle(Container.DataItem as CatalogNode, SiteSession.LanguageId).ToUpper()) %>
                </div>
            </ItemTemplate>
        </asp:Repeater>