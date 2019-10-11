Dim conn_mdb As New System.Data.OleDb.OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=c:\test.mdb") 
        conn_mdb.Open() 
 
        Dim da_mdb As New System.Data.OleDb.OleDbDataAdapter("Select * from test", conn_mdb) 
 
        Dim ds As New System.Data.DataSet 
 
        da_mdb.Fill(ds) 
 
        conn_mdb.Close() 
 
     
Dim conn_sdf As New System.Data.SqlServerCe.SqlCeConnection("data source=c:\test.sdf") 
        Dim da_sdf As New System.Data.SqlServerCe.SqlCeDataAdapter("Select * from test", conn_sdf) 
 
 
        da_sdf.Update(ds) 
 
        conn_sdf.Close()