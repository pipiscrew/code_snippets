Sub Globals
	'These global variables will be redeclared each time the activity is created.
	'These variables can only be accessed from this module.

	Dim btnUpdate As Button
	Dim btnBack As Button
	Dim image1 As ImageView
	Dim image2 As ImageView
	Dim image3 As ImageView
	Dim image4 As ImageView
	Dim image5 As ImageView
	Dim image6 As ImageView
	Dim lstv As ListView
	
	Dim SelectedID As Int
	Dim chkEnabled As CheckBox
	Dim txtDescr As EditText
End Sub

Sub Activity_Create(FirstTime As Boolean)
	If FirstTime Then 
		'CreateGUI isnt right place
	Else
		'Msgbox("no firsttime","df")
	End If 
	
	Activity.LoadLayout("languages")
	FillList 'always after loadlayout
End Sub

Sub Activity_Resume
	
End Sub

Sub FillList
	Dim Buffer() As Byte 
	Dim SQLReader As Cursor
	Dim i As Int
	
	SQLReader = General.ExecuteQuery("select TgUniqueField,Description,IsEnabled,picture from languages order by TgUniqueField") 'aka Select TOP 1
	
	If SQLReader <> Null Then 
		For i= 0 To SQLReader.RowCount-1
			SQLReader.Position = i
			Buffer = SQLReader.GetBlob("Picture")
			lstv.AddTwoLinesAndBitmap2(SQLReader.GetString("Description"),SQLReader.GetString("IsEnabled"),General.GetBitmapFromBLOB(Buffer),SQLReader.GetInt("TgUniqueField"))
		Next 
	
		SQLReader.Close
	End If 
End Sub 

Sub Activity_Pause (UserClosed As Boolean)

End Sub



Sub btnUpdate_Click
	If SelectedID =0 Then
		Msgbox("Παρακαλώ επιλέξτε κάποια γλώσσα!",General.APPTITTLE)
		Return 
	End If 

	Dim IsEnabled As Int
	
	If chkEnabled.Checked Then 
		IsEnabled=1
	Else
		IsEnabled=0
	End If 
	
General.ExecNonQuery("UPDATE Languages " & _
"SET" & _
" [IsEnabled] = " & IsEnabled  & "," & _
" [Description] = '" & txtDescr.Text  & "' where TgUniqueField=" & lstv.GetItem(SelectedID))

	lstv.Clear()
	FillList
	lstv.SetSelection(SelectedID)
End Sub

Sub btnBack_Click
	Activity.Finish
End Sub

Sub lstv_ItemClick (Position As Int, Value As Object)
	Dim SQLReader As Cursor
	Dim i As Int
	
	SQLReader = General.SQL1.ExecQuery("select TgUniqueField,Description,IsEnabled from languages where TgUniqueField =" & lstv.GetItem(Position)) 'aka Select TOP 1
	
	If SQLReader <> Null Then 
	
		SQLReader.Position = 0
		
		SelectedID= Position 'SQLReader.GetInt("TgUniqueField")
		txtDescr.Text = SQLReader.GetString("Description")
		
		If SQLReader.GetInt("IsEnabled") = 1 Then 
			chkEnabled.Checked = True 
		Else 
			chkEnabled.Checked = False 
		End If 
		
		SQLReader.Close 
		
	End If 
End Sub


'>>>>>>>GENERAL module
Sub Process_Globals
	'These global variables will be declared once when the application starts.
	'These variables can be accessed from all modules.
	Dim SQL1 As SQL
	Dim APPTITTLE As String 	
End Sub


Sub ExecNonQuery(SQLStatement As String) As Boolean 
	Try
		SQL1.ExecNonQuery(SQLStatement)
		Return True 
	Catch 
		Msgbox(LastException.Message,"ERROR")
		
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

Sub GetBitmapFromBLOB(picBuffer() As Byte ) As Bitmap
	Dim InputStream1 As InputStream
	InputStream1.InitializeFromBytesArray(picBuffer, 0, picBuffer.Length)

	Dim Bitmap1 As Bitmap
	Bitmap1.Initialize2(InputStream1)

	InputStream1.Close
	
	Return Bitmap1
End Sub 