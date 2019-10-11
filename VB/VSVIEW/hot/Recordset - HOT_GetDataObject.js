Dim rsConn As ADODB.Connection
Dim rs As ADODB.Recordset

Set rsConn = HOT_GetConnectionObject(gsSQLServer, gsDatabase, "Αθλητές", gsUsername, gsPassword, HOT_Client, adModeRead)


//SQL statement
Set rs = HOT_GetDataObject(rsConn, "select * from VU_Αθλητέςwhere ÁÌ=23930", HOT_SQLStatement)

or

//from view 
Set rs = HOT_GetDataObject(rsConn, "VU_Αθλητές where ÁÌ=23930", HOT_Table)

or

//stored procedure
Set rs = HOT_GetDataObject(rsConn, "sp_GP_Συμμετοχές_DEL", HOT_StoredProc, Array("7687")) 