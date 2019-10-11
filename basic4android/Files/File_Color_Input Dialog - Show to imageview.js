'REQ extra lib 
'http://www.basic4ppc.com/android/help/dialogs.html#colordialog_show
'http://www.basic4ppc.com/forum/additional-libraries-official-updates/6776-dialogs-library.html#post39303

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
		
		InputStream1.Close 
	End If 
	
	
'general
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