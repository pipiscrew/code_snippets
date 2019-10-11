DataTable dT = new DataTable();

//@start
	dT.Columns.Add("Country");
	.
	.
	dg.DataSource = dT;
	
//letter @ 
        private void txtCountry_TextChanged(object sender, EventArgs e)
        {
            dT.DefaultView.RowFilter = string.Format("Country LIKE '%{0}%'", txtCity.Text.Replace("'", ""));
        }