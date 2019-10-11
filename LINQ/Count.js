var products =
       from cust in dt 
       orderby cust.Field<string>("Tablet_Title") descending
       select cust;
 
//count items 
txt_count.Text = products.Count().ToString();