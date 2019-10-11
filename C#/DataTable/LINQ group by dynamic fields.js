//group by a dynamic field
var countries = from r in dT.AsEnumerable()
                group r by r.Field<string>("country") into grp
                select new
                {
                    country = grp.Key,
                    total = grp.Count()
                };
                
//group by a two dynamic fields
var resolve = from r in dT.AsEnumerable()
              //where r.Field<string>("country") == item.country
              group r by new { country = r.Field<string>("country"), resolve = r.Field<string>("fieldb") } into fieldb_grp
              select new
              {
                  country = fieldb_grp.Key.country,
                  fieldb_status = fieldb_grp.Key.resolve,
                  total = fieldb_grp.Count()
                  // resolve = resolve_grp.Key.resolve
              };
              

//create a new Datatable and store information
DataTable dt_respond = new DataTable();
dt_respond.Columns.Add("Country");
dt_respond.Columns.Add("Call");
dt_respond.Columns.Add("Mail");
dt_respond.Columns.Add("Total");

foreach (var item in countries)
{
    ////////////////////
    ////////dt_resolve
    int str_Call = 0;
    var res_Call = resolve.Where(x => x.country == item.country && x.resolve_status == "Call").FirstOrDefault();
    if (res_Call != null)
        str_Call = res_Call.resolve_counter;

    int str_Mail = 0;
    var res_Mail = resolve.Where(x => x.country == item.country && x.resolve_status == "Mail").FirstOrDefault();
    if (res_Mail != null)
        str_Mail = res_Mail.resolve_counter;


    dt_resolve.Rows.Add(new string[] { item.country, str_Call.ToString(), str_Mail.ToString(), item.grandtotal.ToString() });
}