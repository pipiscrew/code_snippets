
    <%--------------------------
    --[start] categories--
    --------------------------%>
    <asp:Repeater ID="rptrMainMenu" runat="server">
        <HeaderTemplate>
            <ul class="nav navbar-nav">
        </HeaderTemplate>
        <ItemTemplate>
            <li <%# ((Container.DataItem as CatalogNode).Nodes.Any(nn => nn.Active) ? " class=\"dropdown\"" : "") %> >
                <a id='<%# "hLnkCategory_" + (Container.ItemIndex) %>' class='dropdown-toggle' data-toggle="dropdown">
                    <%# Helpers.ToGreekUpper(Helpers.GetCatalogNodeTitle(Container.DataItem as CatalogNode, SiteSession.LanguageId).ToUpper()) %> 
                    <%# ((Container.DataItem as CatalogNode).Nodes.Any(nn => nn.Active) ? " <span class=\"caret\"></span>" : "") %> 
                </a>

                <%--------------------------
                  --[start] sub categories--
                  --------------------------%>
                <asp:Repeater ID="rptrSubcategories" DataSource='<%# (Container.DataItem as CatalogNode).Nodes.Where(nn => nn.Active).ToList() %>'
                                Visible='<%# (Container.DataItem as CatalogNode).Nodes.Any(nn => nn.Active) %>' OnItemDataBound="rptrSubcategories_ItemDataBound" runat="server">
                    <HeaderTemplate>
                        <ul class="dropdown-menu">
                    </HeaderTemplate>
                    <ItemTemplate>
                        <li>
                            <a id='<%# "hLnkSubCategory_" + (Container.Parent.Parent as RepeaterItem).ItemIndex.ToString() + Container.ItemIndex.ToString()  %>'
					            href="<%# Helpers.GetCategoryUrl(Container.DataItem as CatalogNode) %>">
				            <span><%# Helpers.GetCatalogNodeTitle(Container.DataItem as CatalogNode, SiteSession.LanguageId) %></span>
                            </a>
                        </li>
                    </ItemTemplate>
                    <FooterTemplate>
                        </ul>
                    </FooterTemplate>
                </asp:Repeater>

                <%--------------------------
                  --[end] sub categories--
                  --------------------------%>

            </li>
        </ItemTemplate>
        <FooterTemplate>
            </ul>
        </FooterTemplate>
    </asp:Repeater>
    <%--------------------------
    --[end] categories--
    --------------------------%>