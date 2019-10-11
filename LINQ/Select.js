//get an enumerable
IEnumerable<DataRow> dt = db.GetDATATABLE("select * from [CMS_Tablets] order by [Tablet_Title]").AsEnumerable();
 
var products =
       from cust in dt 
       orderby cust.Field<string>("Tablet_Title") descending
       select cust;
 
//count items 
txt_count.Text = products.Count().ToString();
 
//foreach item, print "Tablet_Title" field
foreach (DataRow w in products)
{
    textBox1.Text += w["Tablet_Title"] + "\r\n";
}