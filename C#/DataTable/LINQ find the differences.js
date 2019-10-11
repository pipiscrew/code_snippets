DataTable dt = General.ImportDelimitedFile(data[i], "~", false);

var dt_recs = dt.AsEnumerable().GroupBy(row => row.Field<string>("no1")).ToList();


//export the differences
DataTable dt_invoices = General.db_ers.GetDATATABLE("select DISTINCT order_no from table where HEADERREF between " + dt_recs[0].Key + " and " + dt_recs[dt_recs.Count - 1].Key);
var dt_invoices_dbase = dt_invoices.AsEnumerable().GroupBy(row => row.Field<string>("order_no")).ToList();

//this is!
var difference = dt_recs.Where(f => !dt_invoices_dbase.Any(a => a.Key == f.Key));

//Console.WriteLine(difference.Count().ToString());
foreach (var item in difference)
{
    tw_inv_dbase.WriteLine(item.Key);
}