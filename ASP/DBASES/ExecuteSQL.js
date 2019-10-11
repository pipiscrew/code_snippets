Public function ExecuteSQL(sql) 
                Set objConn = Server.CreateObject("ADODB.Connection")
                objConn.ConnectionString =  "PROVIDER=Microsoft.Jet.OLEDB.4.0;Data Source=" & Server.MapPath("myASPdbase.mdb")
                objConn.mode=3 '3 = adModeReadWrite
                objConn.Open        
    objConn.Execute(sql)
end function