Type=Activity
Version=1.90
FullScreen=False
IncludeTitle=True
@EndOfDesignText@
'Activity module
Sub Process_Globals
	'These global variables will be declared once when the application starts.
	'These variables can be accessed from all modules.

End Sub

Sub Globals
	'These global variables will be redeclared each time the activity is created.
	'These variables can only be accessed from this module.
	
	Dim lstv As ListView
	Dim cmbLanguage As Spinner
	Dim selectedID As Int 

	Dim img As ImageView
	Dim txtDescription As EditText
	
	Dim LanguagesID As List
End Sub

Sub Activity_Create(FirstTime As Boolean)
	Activity.LoadLayout("categories")
	selectedID=-1 
	If FillLanguages Then FillList
	ClearGUI
End Sub

'--------------------------------FILL LANGUAGES SPINNER
Sub FillLanguages As Boolean 
	Dim SQLReader As Cursor
	Dim i As Int

	SQLReader = General.ExecuteQuery("SELECT [TgUniqueField],[Description] from Languages order by TgUniqueField") 'aka Select TOP 1

	If SQLReader <> Null Then 
		'store on list the IDs
		
		If LanguagesID.IsInitialized=False Then	LanguagesID.Initialize

		LanguagesID.Clear
		cmbLanguage.Clear
			
		For i= 0 To SQLReader.RowCount-1
			SQLReader.Position = i
			
			LanguagesID.Add(SQLReader.GetString("TgUniqueField"))
			
			'fill SPINNER with DESCR
			cmbLanguage.Add(SQLReader.GetString("Description"))
			
			'fill LIST with ID
			'LanguagesID.Add(SQLReader.GetString("TgUniqueField"))
		Next 
		
		SQLReader.Close
	End If 
	
	'if there is no languages then exit user.
	If i =0 Then
		Msgbox("Παρακαλώ εισάγετε γλώσσες!",General.APPTITTLE)
		Activity.Finish
		Return False 
	Else 
		Return True  
	End If 
End Sub 

'--------------------------------FILL LISTVIEW
Sub FillList
	Dim Buffer() As Byte 
	Dim SQLReader As Cursor
	Dim i As Int
	
	SQLReader = General.ExecuteQuery("SELECT TgUniqueField,Lang1GR,Lang2ENG,picture from categories order by Lang1GR") 'aka Select TOP 1
	
	If SQLReader <> Null Then 
		
		For i= 0 To SQLReader.RowCount-1
			SQLReader.Position = i
			Buffer = SQLReader.GetBlob("Picture")

			Try 
				If Buffer = Null Then 
					lstv.AddSingleLine2(SQLReader.GetString("Description") & " " & SQLReader.GetString("Price"),SQLReader.GetInt("TgUniqueField"))
				Else
					lstv.AddTwoLinesAndBitmap2(SQLReader.GetString("Lang1GR"),SQLReader.GetString("Lang2ENG"),General.GetBitmapFromByteArray(Buffer),SQLReader.GetInt("TgUniqueField"))
				End If 
			Catch 
				Msgbox ("Couldnt add to listview","ERROR")
			End Try 
		Next 
		
		SQLReader.Close
	End If 
End Sub 

'--------------------------------UPDATE BUTTON
Sub btnSAVE_Click
	txtDescription.Text=txtDescription.Text.Trim
	
	If cmbLanguage.SelectedItem = "Greek"  AND txtDescription.Text.Length = 0 Then 
		Msgbox("Παρακαλώ εισάγετε 'Περιγραφή'",General.APPTITTLE)
		Return 
	End If 
	
	If img.Bitmap=Null Then 
		img.Bitmap = General.GetBitmapFromFile(File.DirAssets,"questionmark.jpg")
	End If
	
	If selectedID=-1 Then 
		'''''''''''''''''''''''''''''''''''''ADD NEW 
  		Dim recDetails As List 
		recDetails.Initialize

		recDetails.Add(LanguagesID.Get(cmbLanguage.SelectedIndex))  'language ID, already store when spinner filled, so
																	'the spinner index is equal to LanguagesID list
		recDetails.Add(General.GetByteFromBitmap(img.Bitmap))
		recDetails.Add(txtDescription.Text)

		
		General.SQL1.ExecNonQuery2("INSERT INTO  Categories (" & _
									" [LanguageID]," & _
									" [Picture]," & _
									" [" &  FindColumnNameByLanguageID & "]) VALUES (?,?,?)",recDetails)
	
		ClearGUI
		lstv.Clear() 'clear lstv
		FillList 'fill list 
	Else
		'''''''''''''''''''''''''''''''''''''UPDATE 
		Dim res As Int
		res= Msgbox2("Επιθυμείτε ενημέρωση εγγραφής ;",General.APPTITTLE ,"Ναί","Ακύρωση","Όχι",Null)
		
		If res<> DialogResponse.POSITIVE Then 
			Return 
		End If 
		
		'''''''''''''''''''''''''''''''''''''update
		Dim recDetailsUPD As List 
		recDetailsUPD.Initialize
		recDetailsUPD.Add(txtDescription.Text)
		recDetailsUPD.Add(General.GetByteFromBitmap(img.Bitmap))

		General.SQL1.ExecNonQuery2("UPDATE Categories SET " & _
		FindColumnNameByLanguageID & "=?,Picture=? WHERE TgUniqueField=" & lstv.GetItem(selectedID),recDetailsUPD)	
	
		If cmbLanguage.SelectedItem = "Greek" Then 
			Activity.Title = txtDescription.Text 
		End If 
		
		'==========show the updated to list 
		lstv.Clear() 'clear lstv
		FillList 'fill list 
		
		If cmbLanguage.SelectedItem = "Greek" Then 'clear gui because the listview items filled by order by Lang1GR
			ClearGUI
		Else
			lstv.SetSelection(selectedID) 'go to specific position 
		End If 
		
		
		
		
	End If 

End Sub

'--------------------------------DELETE BUTTON
Sub btnDEL_Click
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
		
		If General.ExecNonQuery("delete from Categories where TgUniqueField=" & REC_ID) Then 
			lstv.RemoveAt(selectedID)
			ClearGUI
		End If 
	Catch
	End Try 
End Sub

'--------------------------------BACK BUTTON
Sub btnBack_Click
	Activity.Finish
End Sub


'--------------------------------ADD BUTTON
Sub btnADD_Click
	ClearGUI
End Sub


'--------------------------------CLEAR CONTROLS 
Sub ClearGUI 
	Activity.Title = "Νέα Κατηγορία"
	selectedID=-1
	txtDescription.Text = ""
	cmbLanguage.SelectedIndex = 0
	cmbLanguage.Enabled =False 
	img.Bitmap = General.GetBitmapFromFile(File.DirAssets,"questionmark.jpg")
End Sub 


'--------------------------------FIND DB COLUMN NAME, DEPEND ON SPINNER SELECTED LANGUAGE
Sub FindColumnNameByLanguageID()
	Dim i As Int
	i= LanguagesID.Get(cmbLanguage.SelectedIndex)

	Select i
	Case 1
		Return "Lang1GR"
	Case 2 
		Return "Lang2ENG"
	Case 3
		Return "Lang3ITAL"
	Case 4
		Return "Lang4FR"
	Case 5
		Return "Lang5RUSS"
	Case 6
		Return "Lang6GERM"
	Case 7
		Return "Lang7SERV"
	Case 8
		Return "Lang8CHIN"
	End Select 
End Sub 


'--------------------------------BROWSE FOR IMAGE
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


'--------------------------------LISTVIEW CLICK
Sub lstv_ItemClick (Position As Int, Value As Object)
	Dim SQLReader As Cursor
	Dim i As Int
	Dim selectedLanguage As String 
	Dim DBDescr As String 
	selectedLanguage = FindColumnNameByLanguageID
	SQLReader = General.SQL1.ExecQuery("select Picture," & selectedLanguage & ",Lang1GR from Categories where TgUniqueField =" & lstv.GetItem(Position))
	
	If SQLReader <> Null Then 
		
		SQLReader.Position = 0
		
		selectedID = Position
		
		'----ADD  ITEM  TEXT  TO  ACTIVITY BAR
		DBDescr = SQLReader.GetString("Lang1GR")
		If DBDescr = Null Then 
			Activity.Title = ""
		Else 
			Activity.Title = DBDescr
		End If
		'----ADD  ITEM  TEXT  TO  ACTIVITY BAR
		
		DBDescr = SQLReader.GetString(selectedLanguage)
		
		If DBDescr = Null Then 
			txtDescription.Text = ""
		Else 
			txtDescription.Text = DBDescr
		End If 
		'cmbLanguage.SelectedIndex=0
		
		Dim buffer() As Byte
		buffer = SQLReader.GetBlob("Picture")
		
		img.Bitmap = General.GetBitmapFromByteArray(buffer)
		
		SQLReader.Close 
		
		cmbLanguage.Enabled = True
	Else 
		Msgbox("Couldnt find the specified record!","ERROR")
	End If 
End Sub


'--------------------------------SPINNER CLICK
Sub cmbLanguage_ItemClick (Position As Int, Value As Object)
	If selectedID > -1 Then 
		Dim LngText As String 
		LngText = General.SQL1.ExecQuerySingleResult("SELECT " & FindColumnNameByLanguageID & " FROM CATEGORIES WHERE TgUniqueField=" & lstv.GetItem(selectedID))
		
		If LngText = Null Then
			txtDescription.Text = ""
		Else
			txtDescription.Text = LngText 
		End If 
	Else 
		txtDescription.Text = ""
	End If 
End Sub



************************************************************************************
GENERAL.BAS
************************************************************************************

'Code module
'Subs in this code module will be accessible from all modules.
Sub Process_Globals
	'These global variables will be declared once when the application starts.
	'These variables can be accessed from all modules.
	Dim SQL1 As SQL
	Dim APPTITTLE As String 

	'for general Lists use
	Type Element (ItemName As String, Val As String)
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
