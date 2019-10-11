Dim rsConn As ADODB.Connection

Set rsConn = HOT_GetConnectionObject(gsSQLServer, gsDatabase, "Αθλητές", gsUsername, gsPassword, HOT_Client, adModeRead) 