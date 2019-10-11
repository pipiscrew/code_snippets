//designer when runat is visible @ code
  <select id="cmb_test" runat="server">

  </select>

//ccide behind
	protected void Page_Load(object sender, EventArgs e)
	{
	    for (int i = 0; i < 101; i++)
	    {
	        cmb_test.Items.Add("test"+i.ToString());
	    }
	    
	}