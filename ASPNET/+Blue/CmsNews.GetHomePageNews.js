<script runat="server">
    private void BuildHomeLeftArticles()
    {
		List<CmsNews> homeLeftArticles = CmsNews.GetHomePageNews("ARTICLES", SiteSession.LanguageId);

		if (homeLeftArticles == null || homeLeftArticles.Count() == 0) return;
		homeLeftArticles = homeLeftArticles.OrderByDescending(x => x.NewsActiveFrom).ThenBy(x => x.NewsOrder).ToList();
		if (homeLeftArticles.Count > 7) homeLeftArticles = homeLeftArticles.Take(7).ToList();

		// List of News
		this.rptrHomeLeftArticles.DataSource = (homeLeftArticles.Count > 1 ? homeLeftArticles.Skip(1) : null);
		this.rptrHomeLeftArticles.DataBind();
    }
</script>
    
<asp:Repeater ID="rptrHomeLeftArticles" runat="server">
    <ItemTemplate>
        <div class="blog_post">
            <asp:HyperLink ID="imgLeftMansoryNews" NavigateUrl='<%# VirtualPathUtility.ToAbsolute("~/") + "Default.aspx?id=" + SiteApplication.NewsDetailsPageType.PageId + "&nId=" + Eval("NewsId") %>' 
                AlternateText='<%# CmsNewsCaption.GetNewsTitle(Container.DataItem as CmsNews, SiteSession.LanguageId) %>' runat="server">
                <div class="mediaholder_image_box">
                    <img src="<%# SiteApplication.ParameterDomainNewsImagesPath + (Container.DataItem as CmsNews).NewsSmallImage %>" />
                </div>
            </asp:HyperLink>
            <div class="blog_title">
                <asp:HyperLink ID="hLnkNewsTitle" NavigateUrl='<%# VirtualPathUtility.ToAbsolute("~/") + "Default.aspx?id=" + SiteApplication.NewsDetailsPageType.PageId + "&nId=" + Eval("NewsId") %>'
                    Text='<%# CmsNewsCaption.GetNewsTitle(Container.DataItem as CmsNews, SiteSession.LanguageId) %>' runat="server"/>
            </div>
            <div class="home_posts_time masonry_posts_no-margin"><%# DateTime.Parse(Eval("NewsActiveFrom").ToString()).ToString("dd MMM, yyyy")%></div>
            <p><%# CmsNewsCaption.GetNewsCaption(Container.DataItem as CmsNews, SiteSession.LanguageId).NewsCaptionSmallDescription %></p>
        </div>
    </ItemTemplate>
</asp:Repeater>