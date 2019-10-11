/*this widget can be used on two ways :
-by a Page, on basic tab
	a)we point a template that embed a widget like this below
	b)special page YES
	c)Page Type News
	d)The category we would like to show
	e)Appear to menu YES
-by Code
	CmsNews.GetAllActiveNews("ARTICLES", SiteSession.LanguageId);	
*/

http://www.x.gr/Portal/default.aspx?id=107&ncId=8

SiteSession.CurrentNewsCategory.NewsCategoryCode = ncId^

<script runat="server">      
    protected void BindNews()
    {
        List<CmsNews> AllNews = CmsNews.GetAllActiveNews(SiteSession.CurrentNewsCategory.NewsCategoryCode, SiteSession.LanguageId);	
      
        if (AllNews == null || AllNews.Count == 0)
        {
            ltrNoNewsFound.Text = "<div style='display: none; font-family: inherit; font-size: 18px; text-align: center; width: 100%;'>" + SysParameter.GetParameterTextValue1("NONEWSFOUND") + "</div>";
            ltrNoNewsFound.Visible = true;
        }

        this.listViewNews.DataSource = AllNews.OrderByDescending(x => x.NewsActiveFrom).ThenByDescending(o => o.NewsOrder).ToList();
        this.listViewNews.DataBind();
    }

    protected void listViewNews_PagePropertiesChanging(object sender, PagePropertiesChangingEventArgs e)
    {
        BindNews();
    }

    protected void listViewNews_ItemDataBound(object sender, ListViewItemEventArgs e)
    {

        if (e.Item.ItemType != ListViewItemType.DataItem) return;

        CmsNews AllNews = e.Item.DataItem as CmsNews;
        if (AllNews == null) return;

        CmsNewsCaption newsCaption = CmsNewsCaption.GetNewsCaption(AllNews, SiteSession.LanguageId);
        if (newsCaption == null) return;

        HyperLink hLnkNews = (HyperLink)e.Item.FindControl("hLnkNews");
        if (hLnkNews != null)
        {
            hLnkNews.NavigateUrl = Helpers.GetPageUrl(SiteApplication.NewsDetailsPageType.PageId) + "&nid=" + AllNews.NewsId.ToString();
            hLnkNews.Attributes.Add("title", newsCaption.NewsCaptionTitle);
            hLnkNews.ImageUrl = SiteApplication.DomainFileStorageUrl + "/News/" + AllNews.NewsSmallImage;
        }

        HtmlGenericControl spanPostDate = e.Item.FindControl("spanPostDate") as HtmlGenericControl;
        spanPostDate.InnerText = DateTime.Parse(AllNews.NewsActiveFrom.ToString()).ToString("dd MMM, yyyy");

        HyperLink hLnkNewsTitle = (HyperLink)e.Item.FindControl("hLnkNewsTitle");
        if (hLnkNewsTitle != null)
        {
            hLnkNewsTitle.NavigateUrl = Helpers.GetPageUrl(SiteApplication.NewsDetailsPageType.PageId) + "&nid=" + AllNews.NewsId.ToString();
            hLnkNewsTitle.Text = Helpers.ToGreekUpper(newsCaption.NewsCaptionTitle);
            hLnkNewsTitle.Attributes.Add("title", newsCaption.NewsCaptionTitle);
        }

        Literal ltrNewsDescr = (Literal)e.Item.FindControl("ltrNewsDescr");
        if (ltrNewsDescr != null)
        {
            ltrNewsDescr.Text = newsCaption.NewsCaptionSmallDescription;
        }
    }   
</script>


<asp:ListView runat="server" ID="listViewNews"
    OnItemDataBound="listViewNews_ItemDataBound" ItemPlaceholderID="PlaceHolder1" OnPagePropertiesChanging="listViewNews_PagePropertiesChanging">
    <LayoutTemplate>
        <asp:PlaceHolder ID="PlaceHolder1" runat="server" />
    </LayoutTemplate>
    <ItemTemplate>
        <div class="blog_post">
            <div class="row">
                <div class="mediaholder_image_box">
                    <asp:HyperLink ID="hLnkNews" runat="server"></asp:HyperLink>
                </div>
                <h2 class="blog_title">
                    <asp:HyperLink ID="hLnkNewsTitle" runat="server"></asp:HyperLink></h2>
                <div id="spanPostDate" class="home_posts_time masonry_posts_no-margin" runat="server"></div>
                <p>
                    <asp:Literal ID="ltrNewsDescr" runat="server"></asp:Literal></p>
            </div>
        </div>
    </ItemTemplate>
</asp:ListView>