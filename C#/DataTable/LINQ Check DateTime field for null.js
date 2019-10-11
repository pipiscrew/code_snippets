

//normally
int tbl_N_x_Count= tbl_N.AsEnumerable().
Count(row => row.Field<DateTime>("fieldA") != null && row.Field<DateTime>("fieldA")> DateTime.Now)
//or
int tbl_N_x_Count= tbl_N.AsEnumerable().
Count(row => row.Field<DateTime>("fieldA") != DBNull.Value && row.Field<DateTime>("fieldA")> DateTime.Now)

/////////but nothing works!^^

//use field as object and compare it to plain null!
int tbl_N_x_Count= tbl_N.AsEnumerable().
Count(row => row.Field<object>("fieldA") != null && row.Field<DateTime>("fieldA")> DateTime.Now)