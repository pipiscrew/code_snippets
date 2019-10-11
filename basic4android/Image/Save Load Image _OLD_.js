//http://www.basic4ppc.com/forum/basic4android-updates-questions/10012-writing-image-byte-array.html#post71541

	Dim OpenDialog As FileDialog
	Dim imgLocationFolder As String 
	Dim imgLocationFile As String 
	

Sub img_Click
	Dim fd As FileDialog
	Dim ret As Int 
	
	fd.FilePath = File.DirRootExternal ' also sets ChosenName to an emtpy string
	
	fd.FileFilter = ".jpg,.png"
	
	ret = fd.Show("Anima - Επιλογή εικόνας", "Επιβεβαίωση","Ακύρωση","", Null)	
	
	If ret = -1 Then 
		ToastMessageShow(ret & " : Path : " & fd.FilePath & CRLF & "File : " & fd.ChosenName, False)	
		
		Dim InputStream1 As InputStream
		
		InputStream1 = File.OpenInput(fd.FilePath,fd.ChosenName)
		
		img.Bitmap =  General.GetBitmapFromInputStream(InputStream1)
		imgLocationFolder =  fd.FilePath
		imgLocationFile= fd.ChosenName
		
		InputStream1.Close 
	End If 
End Sub


Sub btnUPDATE_Click
	If recID=0 Then 'add new 

  		Dim recDetails As List 
		recDetails.Initialize
		recDetails.Add(General.SelectedLanguageID)
		recDetails.Add(txtDESCR.Text )
		recDetails.Add(General.ReadAllBytes(imgLocationFolder,imgLocationFile))
		
		General.SQL1.ExecNonQuery2("INSERT INTO  Categories (" & _
			"[LanguageID]," & _
			"[Description]," & _
			"[Picture]) VALUES (?,?,?)",recDetails)
	Else
	
	End If 
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

			lstv.AddTwoLinesAndBitmap2(SQLReader.GetString("Description"),"123213",General.GetBitmapFromBLOB(Buffer),SQLReader.GetInt("TgUniqueField"))
		Next 
	
		SQLReader.Close
	End If 
End Sub 



Sub GetBitmapFromInputStream(picBuffer As InputStream ) As Bitmap
	Try 
		Dim Bitmap1 As Bitmap
		Bitmap1.Initialize2(picBuffer)

		picBuffer.Close
		
		Return Bitmap1
	Catch 
		Return Null 
	End Try 
End Sub 

Sub ReadAllBytes(folder As String , filename As String ) As Byte()
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
End Sub 