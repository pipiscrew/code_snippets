//1st method
    void Page_Load(Object Sender, EventArgs e)
    {
        string conn = System.Configuration.ConfigurationManager.ConnectionStrings["SchoolEntities"].ConnectionString;
        SchoolModel.SchoolEntities env = new SchoolModel.SchoolEntities(conn);
        var queryRet = from p in env.bubbles select p;

        cdcatalog.DataSource = queryRet;
        cdcatalog.DataBind();
    }
    protected void R1_ItemDataBound(object source, RepeaterItemEventArgs e)
    {
        if (e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem)
        {
       		//on every item make a cast? wtF?
            System.Diagnostics.Debug.WriteLine(((IEnumerable)cdcatalog.DataSource).Cast<object>().Count());
            


//2nd stable method
    private long itemCount { get; set; }
    
    void Page_Load(Object Sender, EventArgs e)
    {
        string conn = System.Configuration.ConfigurationManager.ConnectionStrings["SchoolEntities"].ConnectionString;
        SchoolModel.SchoolEntities env = new SchoolModel.SchoolEntities(conn);
        var queryRet = from p in env.bubbles select p;
        
        //Get the count of items in the data source. Subtract 1 for 0 based index.
        itemCount = contacts.Count-1;
        
        cdcatalog.DataSource = queryRet;
        cdcatalog.DataBind();
    }


    protected void R1_ItemDataBound(object source, RepeaterItemEventArgs e)
    {
        if (e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem)
        {
        	//If the item index is not = to the item count of the datasource - 1
            if (e.Item.ItemIndex != itemCount)
                System.Diagnostics.Debug.WriteLine(itemCount);