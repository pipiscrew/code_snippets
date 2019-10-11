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