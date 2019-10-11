//1exec
SQL1.BeginTransaction
     SQL1.ExecNonQuery("Pragma foreign_keys=False;Pragma foreign_keys=True;")
SQL1.EndTransaction

//
Sub SQLCreateTable
	SQL1.ExecNonQuery("DROP TABLE IF EXISTS table1")
	SQL1.ExecNonQuery("CREATE TABLE table1 (Code TEXT , First TEXT, Name TEXT)")
	SQLFillTable
End Sub

Sub SQLFillTable
' Fills a SQL data base
	Dim i As Int
	
	SQL1.BeginTransaction
	Try
		For i = 1 To 30
			SQL1.ExecNonQuery2("INSERT INTO table1 VALUES (?, ?, ?)", Array As Object(1000+i, "First"&i, "Name"&i))
		Next
		SQL1.TransactionSuccessful
	Catch
		Log(LastException.Message)
	End Try
	SQL1.EndTransaction
End Sub