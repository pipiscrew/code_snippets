'Activity module
Sub Process_Globals
	'These global variables will be declared once when the application starts.
	'These variables can be accessed from all modules.

End Sub

Sub Globals
	'These global variables will be redeclared each time the activity is created.
	'These variables can only be accessed from this module.

	Dim btnDELETE As Button
	Dim btnNEW As Button
	Dim btnUPDATE As Button
	Dim lstv As ListView
	Dim btnBACK As Button
	Dim img As ImageView
	Dim txtDESCR As EditText
	
	Dim selectedID As Int 
	Dim OpenDialog As FileDialog
	
End Sub

Sub Activity_Create(FirstTime As Boolean)
	Activity.LoadLayout("categories")
	selectedID=-1 
	FillList
End Sub

Sub FillList
	Dim Buffer() As Byte 
	Dim SQLReader As Cursor
	Dim i As Int
	
	SQLReader = General.ExecuteQuery("SELECT [TgUniqueField],[Description],[Picture] from Categories where LanguageID=" & General.SelectedLanguageID) 'aka Select TOP 1
	
	If SQLReader <> Null Then 
		For i= 0 To SQLReader.RowCount-1
			SQLReader.Position = i
			Buffer = SQLReader.GetBlob("Picture")

			Try 
				If Buffer = Null Then 
					lstv.AddSingleLine2(SQLReader.GetString("Description"),SQLReader.GetInt("TgUniqueField"))
				Else
					lstv.AddTwoLinesAndBitmap2(SQLReader.GetString("Description"),"descr",General.GetBitmapFromByteArray(Buffer),SQLReader.GetInt("TgUniqueField"))
				End If 
			Catch 
				Msgbox ("Couldnt add to listview","ERROR")
			End Try 
		Next 
		
		SQLReader.Close
	End If 
End Sub 

Sub btnUPDATE_Click
	txtDESCR.Text=txtDESCR.Text.Trim
	
	If txtDESCR.Text.Length = 0 Then 
		Msgbox("Παρακαλώ εισάγετε 'Περιγραφή'",General.APPTITTLE)
		Return 
	End If 

	If img.Bitmap=Null Then 
		img.Bitmap = General.GetBitmapFromFile(File.DirAssets,"questionmark.jpg")
	End If
	
	If selectedID=-1 Then 
		'''''''''''''''''''''''''''''''''''''add new 
  		Dim recDetails As List 
		recDetails.Initialize
		recDetails.Add(General.SelectedLanguageID)
		recDetails.Add(txtDESCR.Text )
		recDetails.Add(General.GetByteFromBitmap(img.Bitmap))

		
		General.SQL1.ExecNonQuery2("INSERT INTO  Categories (" & _
			"[LanguageID]," & _
			"[Description]," & _
			"[Picture]) VALUES (?,?,?)",recDetails)
	
		ClearGUI
		lstv.Clear() 'clear lstv
		FillList 'fill list 
	Else
		Dim res As Int
		res= Msgbox2("Επιθυμείτε ενημέρωση εγγραφής ;",General.APPTITTLE ,"Ναί","Ακύρωση","Όχι",Null)
		
		If res<> DialogResponse.POSITIVE Then 
			Return 
		End If 
		
		'''''''''''''''''''''''''''''''''''''update
		Dim recDetailsUPD As List 
		recDetailsUPD.Initialize
		recDetailsUPD.Add(txtDESCR.Text )
		recDetailsUPD.Add(General.GetByteFromBitmap(img.Bitmap))

		General.SQL1.ExecNonQuery2("UPDATE  Categories SET " & _
		"Description=?,Picture=? WHERE TgUniqueField=" & lstv.GetItem(selectedID),recDetailsUPD)	
	
		'==========show the updated to list 
		lstv.Clear() 'clear lstv
		FillList 'fill list 
		lstv.SetSelection(selectedID) 'go to specific position 
	End If 
End Sub

Sub btnNEW_Click
	ClearGUI
End Sub

Sub ClearGUI 
	selectedID=-1
	txtDESCR.Text = ""
	img.Bitmap = General.GetBitmapFromFile(File.DirAssets,"questionmark.jpg")
End Sub 

Sub btnDELETE_Click
	If selectedID=-1 Then
		Msgbox("Παρακαλώ επιλέξτε εγγραφή",General.APPTITTLE)
		Return
	Else
		Dim res As Int
		res= Msgbox2("Επιθυμείτε διαγραφή εγγραφής ;",General.APPTITTLE ,"Ναί","Ακύρωση","Όχι",Null)
		
		If res <> DialogResponse.POSITIVE Then 
			Return 
		End If 
	End If
	
	
	Dim REC_ID As Int 
	Try 
		REC_ID = lstv.GetItem(selectedID)
		
		'FK error
		If General.ExecNonQuery("delete from Categories where TgUniqueField=" & REC_ID) Then 
			lstv.RemoveAt(selectedID)
			ClearGUI
		End If 
	Catch
	End Try 
End Sub

Sub lstv_ItemClick (Position As Int, Value As Object)
	Dim SQLReader As Cursor
	Dim i As Int
	
	SQLReader = General.SQL1.ExecQuery("select Description,Picture from categories where TgUniqueField =" & lstv.GetItem(Position))
	
	If SQLReader <> Null Then 
	
		SQLReader.Position = 0
		
		selectedID= Position 'SQLReader.GetInt("TgUniqueField")
		txtDESCR.Text = SQLReader.GetString("Description")
		
		Dim buffer() As Byte
		buffer = SQLReader.GetBlob("Picture")
		
		img.Bitmap = General.GetBitmapFromByteArray(buffer)
		
		SQLReader.Close 
	Else 
		Msgbox("Couldnt find the specified record!","ERROR")
	End If 
End Sub

Sub btnBACK_Click
	Activity.Finish
End Sub

Sub img_Click
	Dim fd As FileDialog
	Dim ret As Int 
	
	fd.FilePath = File.DirRootExternal ' also sets ChosenName to an emtpy string
	
	fd.FileFilter = ".jpg,.png"
	
	ret = fd.Show("Anima - Επιλογή εικόνας", "Επιβεβαίωση","Ακύρωση","Διαγραφή", Null)	
	
	If ret = -1 Then  'user pressed Επιβεβαίωση
		ToastMessageShow(ret & " : Path : " & fd.FilePath & CRLF & "File : " & fd.ChosenName, False)	
		
		Dim InputStream1 As InputStream
		
		InputStream1 = File.OpenInput(fd.FilePath,fd.ChosenName)
		
		img.Bitmap =  General.GetBitmapFromInputStream(InputStream1)
		
		InputStream1.Close
	Else If  ret = -2 Then  'user pressed Διαγραφή
	   img.Bitmap =  General.GetBitmapFromFile(File.DirAssets,"questionmark.jpg")
	End If 
End Sub

//GENERAL CLASS
'Code module
'Subs in this code module will be accessible from all modules.
Sub Process_Globals
	'These global variables will be declared once when the application starts.
	'These variables can be accessed from all modules.
	Dim SQL1 As SQL
	Dim APPTITTLE As String 
	Dim SelectedLanguageID As Int 
'						1-GREEK
'						2-ENGLISH
'						3-ITALIAN
'						4-FRANCE
'						5-RUSSIAN
'						6-GERMAN
'						7-SERVIAN
'						8-CHINESE
End Sub


Sub ExecNonQuery(SQLStatement As String) As Boolean 
	Try
		SQL1.ExecNonQuery(SQLStatement)
		Return True 
	Catch 
		If LastException.Message.ToLowerCase().Contains("sqliteconstraintexception") Then
			Msgbox("Υπάρχουν εγγραφές που είναι συνδεμένες, δεν γίνεται να διαγράψετε.","ERROR")
		Else
			Msgbox(LastException.Message,"ERROR")
		End If 
		
		Return False 
	End Try
End Sub  

Sub ExecuteQuery(SQLStatement As String) As Cursor
	Try
		Return SQL1.ExecQuery(SQLStatement)
	Catch 
		Msgbox(LastException.Message,"ERROR")
		
		Return Null
	End Try
End Sub 

Sub ExecuteScalar(SQLStatement As String) As String
	Try
		Return SQL1.ExecQuerySingleResult(SQLStatement)
	Catch 
		Msgbox(LastException.Message,"ERROR")
		
		Return Null
	End Try
End Sub 


'Reads a byte array and return the bitmap of.
Sub GetBitmapFromByteArray(picBuffer() As Byte ) As Bitmap
	Try 
		Dim InputStream1 As InputStream
		InputStream1.InitializeFromBytesArray(picBuffer, 0, picBuffer.Length)

		Dim Bitmap1 As Bitmap
		Bitmap1.Initialize2(InputStream1)

		InputStream1.Close
		
		Return Bitmap1
	Catch 
		Return Null 
	End Try 
End Sub 

'Reads the given InputStream and return the bitmap of.
Sub GetBitmapFromInputStream(picBuffer As InputStream) As Bitmap
	Try 
		Dim Bitmap1 As Bitmap
		Bitmap1.Initialize2(picBuffer)

		picBuffer.Close
		
		Return Bitmap1
	Catch 
		Return Null 
	End Try 
End Sub 

'Reads a file and return the bitmap of.
Sub GetBitmapFromFile(folder As String , filename As String) As Bitmap
	Try 
		Dim in As InputStream
		Dim Bitmap1 As Bitmap
		in = File.OpenInput(folder,filename)
		
		Bitmap1 = GetBitmapFromInputStream(in)
		in.Close
		
		Return Bitmap1
	Catch 
		Return Null 
	End Try 
End Sub 

'Reads bitmap (aka Imageview.Bitmap) and export it to byte array.
Sub GetByteFromBitmap(img As Bitmap) As Byte()
	Try 
		Dim out As OutputStream
		Dim data() As Byte
		
		out.InitializeToBytesArray(1)
		
		img.WriteToStream(out,100,"PNG")
		
		data = out.ToBytesArray
		
		out.Close
		out.Flush
		Return data 
	Catch 
		Return Null 
	End Try 
End Sub 

'Reads a file to byte array.
Sub ReadAllBytes(folder As String , filename As String ) As Byte()
	Try 
		Dim in As InputStream
		in = File.OpenInput(folder,filename)
		Dim out As OutputStream
		out.InitializeToBytesArray(1)
		File.Copy2(in, out) '<---- This does the actual copying

		Dim data() As Byte
		data = out.ToBytesArray
		
		out.Close
		in.Close 
		out.Flush
		
		Return data 
	Catch 
		Return Null 
	End Try 
End Sub 
