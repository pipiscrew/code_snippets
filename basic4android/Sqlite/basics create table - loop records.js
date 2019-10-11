Sub Process_Globals
	'These global variables will be declared once when the application starts.
	'These variables can be accessed from all modules.
	Dim SQL1 As SQL
End Sub

'general documentation 
'http://www.basic4ppc.com/android/documentation.html

'must read URLS
'http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/6736-sql-tutorial.html
'http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/8475-dbutils-android-databases-now-simple.html


Sub Activity_Create(FirstTime As Boolean)

	If FirstTime Then 
		'File.DirDefaultExternal = SD card
		'CreateIfNecessary = is True so the file will be created if it doesn't exist
        SQL1.Initialize(File.DirDefaultExternal, "test2.db", True)
		
		CheackAndCreateDatabaseFile
    End If
	
	Activity.LoadLayout("MainActivity")
End Sub

'SQLite AUTOINCREMENT on Primary Key 
'http://stackoverflow.com/questions/631060/can-i-make-a-field-autoincrement-after-made-a-table
'as I saw is AUTOINCREMENT when the field type declared as 'INTEGER PRIMARY KEY'
Sub CheackAndCreateDatabaseFile
	'be default is FALSE
	Dim NotExists As Boolean
	
'############## CONTACTS	
	Try 
		 SQL1.ExecQuerySingleResult("select TgUniqueField from CONTACTS LIMIT 1") 'aka Select TOP 1
	Catch 
		NotExists=True 
	End Try 
	
	If NotExists Then 
		Try 
			ToastMessageShow("Creating CONTACTS table",False )
			SQL1.ExecNonQuery( "CREATE TABLE CONTACTS (Code TEXT, ContactType INT, Name TEXT, TgUniqueField INTEGER PRIMARY KEY);")
			SQL1.ExecNonQuery("INSERT INTO CONTACTS (Name,Code,ContactType) VALUES('Πελάτης Λιανικής', '0001', 0)")
			SQL1.ExecNonQuery("INSERT INTO CONTACTS (Name,Code,ContactType) VALUES('Γενικός Πελ-Προμηθευτής', '0002', 2)")
		Catch 
			Msgbox(LastException,"ERROR")
		End Try 			
	End If 
	
	NotExists=False 
'############## PRODUCTS	
	Try 
		SQL1.ExecQuerySingleResult ("select TgUniqueField from PRODUCTS LIMIT 1") 'aka Select TOP 1
	Catch 
		NotExists=True 
	End Try 
	
	If NotExists Then 
		Try 
			ToastMessageShow("Creating PRODUCTS table",False )
			SQL1.ExecNonQuery("CREATE TABLE PRODUCTS (Code TEXT, Description TEXT, TgUniqueField INTEGER PRIMARY KEY);")
			SQL1.ExecNonQuery("INSERT INTO PRODUCTS (Code,Description) VALUES('0001','LAVAZZA')")
			SQL1.ExecNonQuery("INSERT INTO PRODUCTS (Code,Description) VALUES('0002','LACTA')")
		Catch 
			Msgbox(LastException,"ERROR")
		End Try 			
	End If 
End Sub 

Sub Activity_Resume

End Sub

Sub Activity_Pause (UserClosed As Boolean)

End Sub

Sub btnContacts_Click
	'AUTOINCREMENT verification
	Msgbox(SQL1.ExecQuerySingleResult("select TgUniqueField from PRODUCTS where Description = 'LACTA' "),"Products AUTOINCREMENT verification")
	
	'Loop through recordset
	Dim SQLReader As Cursor
	Dim i As Int
    SQLReader = SQL1.ExecQuery("SELECT TgUniqueField,Code, Name FROM CONTACTS order by Name")

    For i = 0 To SQLReader.RowCount - 1
        SQLReader.Position = i
		
		lstv.AddTwoLines2(SQLReader.GetString("Code"),SQLReader.GetString("Name"),SQLReader.GetString("TgUniqueField"))
    Next
    SQLReader.Close
End Sub