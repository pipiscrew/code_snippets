//http://pastebin.com/BLZS197w
//Export to new Excel file - needs activation of extra
insert into OPENROWSET('Microsoft.Jet.OLEDB.4.0',
    'Excel 8.0;Database=D:testing.xls;',
    'SELECT * FROM [SheetName$]') select * from ACCOUNT_TRANSACTIONS
    
//needs activation of extra
//procedure    
//http://stackoverflow.com/questions/9086880/t-sql-export-to-new-excel-file


//http://www.codeproject.com/Articles/204562/Small-Research-on-Exporting-Data-to-Excel
//http://support.microsoft.com/kb/257819 
//A caution about editing Excel data with ADO: When you insert text data into Excel with ADO, the text value is preceded with
//a single quote. This may cause problems later in working with the new data.
Export(General.Conne.GetDATATABLE("select [TRANS_DATE],[REASON],[CHARGE],[FIX_CALC],[CHARGE_DIFF],[COMMENTS] from [ACCOUNT_TRANSACTIONS]"), "d:\\test.xls", "wow");

        public static void Export(DataTable dt, string filepath, string tablename)
        {
            //excel 2003
            string connString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" +
                   filepath + ";Extended Properties=Excel 8.0;";
            //Excel 2007
            //string connString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + 
            //       filepath + ";Extended Properties=Excel 12.0 Xml;";
            try
            {
                using (OleDbConnection con = new OleDbConnection(connString))
                {
                    con.Open();
                    StringBuilder strSQL = new StringBuilder();
                    strSQL.Append("CREATE TABLE ").Append("[" + tablename + "]");
                    strSQL.Append("(");
                    for (int i = 0; i < dt.Columns.Count; i++)
                    {
                        strSQL.Append("[" + dt.Columns[i].ColumnName + "] text,");
                    }
                    strSQL = strSQL.Remove(strSQL.Length - 1, 1);
                    strSQL.Append(")");

                    OleDbCommand cmd = new OleDbCommand(strSQL.ToString(), con);
                    cmd.ExecuteNonQuery();

                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        //clear 
                        strSQL.Length = 0;
                        strSQL.Capacity = 0;

                        StringBuilder strfield = new StringBuilder();
                        StringBuilder strvalue = new StringBuilder();
                        for (int j = 0; j < dt.Columns.Count; j++)
                        {
                            strfield.Append("[" + dt.Columns[j].ColumnName + "]");
                            strvalue.Append("'" + dt.Rows[i][j].ToString() + "'");
                            if (j != dt.Columns.Count - 1)
                            {
                                strfield.Append(",");
                                strvalue.Append(",");
                            }
                            else
                            {
                            }
                        }
                        cmd.CommandText = strSQL.Append(" insert into [" + tablename + "]( ")
                            .Append(strfield.ToString())
                            .Append(") values (").Append(strvalue).Append(")").ToString();
                        cmd.ExecuteNonQuery();
                    }
                    con.Close();
                }
                Console.WriteLine("OK");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }