foreach (string item in lst.CheckedItems)
{
	MessageBox.Show(item);
}

foreach (int x in chklstTerms.CheckedIndices) 
{ 
	chklstTerms.Items[x].ToString()); 
}






//if we have use datasource to fill 
chlCompanies.DataSource = dsCompanies.Tables[0];
chlCompanies.DisplayMember = "CompanyName";
chlCompanies.ValueMember = "ID";

//then 
foreach(DataRowView drv in checkedListBox1.CheckedItems)
{
    s += drv[0].ToString()+",";
}


