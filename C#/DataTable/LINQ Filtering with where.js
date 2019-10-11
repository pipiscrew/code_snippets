
DataTable tbl_N = conn.GetDATATABLE("select * from tbl where convert (varchar(10),addedDate,120)= '" + DateTime.Today.ToString("yyyy-MM-dd") + "' and processed ='N'");
var tbl = tbl_N.AsEnumerable().
Where(row => row.Field<string>("fieldA") != null && row.Field<string>("fieldA") == "soccer" && string.IsNullOrEmpty(row.Field<string>("fieldB"))).ToList();

            foreach (DataRow item in tbl_N_Phrama_Count)
       {
       not_proceed+=item["Document Number"] + ", ";
       }
       
//plain count
int tbl_N_Phrama_Count= tbl_N.AsEnumerable().
Count(row => row.Field<string>("fieldA") != null && row.Field<string>("fieldA") == "soccer" && string.IsNullOrEmpty(row.Field<string>("fieldB")));

