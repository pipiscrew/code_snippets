//http://codehill.com/2009/01/reading-excel-2003-and-2007-files-using-oledb/


public void OpenExcelFile(bool isOpenXMLFormat)  
{  
    //open the excel file using OLEDB  
    OleDbConnection con;  
  
    if (isOpenXMLFormat)  
        //read a 2007 file  
        connectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" +  
            fileName + ";Extended Properties=\"Excel 8.0;HDR=YES;\"";  
    else  
        //read a 97-2003 file  
        connectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" +  
            fileName + ";Extended Properties=Excel 8.0;";  
  
    con = new OleDbConnection(connectionString);  
    con.Open();  
  
    //get all the available sheets  
    System.Data.DataTable dataSet = con.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);  
  
    //get the number of sheets in the file  
    workSheetNames = new String[dataSet.Rows.Count];  
    int i = 0;  
    foreach (DataRow row in dataSet.Rows)  
    {  
        //insert the sheet's name in the current element of the array  
        //and remove the $ sign at the end  
        workSheetNames[i] = row["TABLE_NAME"].ToString().Trim(new[] { '$' });  
        i++;  
    }  
  
    if (con != null)  
    {  
        con.Close();  
        con.Dispose();  
    }  
  
    if (dataSet != null)  
        dataSet.Dispose();  
}  