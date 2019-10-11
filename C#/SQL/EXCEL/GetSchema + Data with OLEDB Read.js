//http://social.msdn.microsoft.com/Forums/en-US/vsto/thread/5658bb03-80c0-40ac-a2e9-4a75e905e38f/
static void Main(string[] args)
{
    string fileName = AppDomain.CurrentDomain.BaseDirectory + "TestExcel.xls";
    using (OleDbConnection con =
         new OleDbConnection(@"Provider=Microsoft.Jet.OLEDB.4.0;Data Source='" + fileName + @"';Extended Properties=""Excel 8.0;HDR=Yes;IMEX=1"";"))
    {
        con.Open();
        DataTable schema = con.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);
        OleDbDataAdapter da = new OleDbDataAdapter("select * from [" + schema.Rows[0]["TABLE_NAME"].ToString()  + "$]", con);
        DataTable dt = new DataTable();               
        da.Fill(dt);
        con.Close();
    }
}

//can read dates 
//can read decimals