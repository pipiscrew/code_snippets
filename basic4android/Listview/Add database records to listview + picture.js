Sub CreateGUI
	Dim Buffer() As Byte 
	Dim SQLReader As Cursor
	Dim i As Int
	
	SQLReader = Main.SQL1.ExecQuery("select TgUniqueField,Description,IsEnabled,picture from languages order by TgUniqueField") 'aka Select TOP 1
	
	For i= 0 To SQLReader.RowCount-1
		SQLReader.Position = i
		Buffer = SQLReader.GetBlob("Picture")
		lstv.AddTwoLinesAndBitmap2(SQLReader.GetString("Description"),SQLReader.GetString("IsEnabled"),GetBitmapFromBLOB(Buffer),SQLReader.GetInt("TgUniqueField"))
	Next 
	
	SQLReader.Close
End Sub 

Sub GetBitmapFromBLOB(picBuffer() As Byte ) As Bitmap
	Dim InputStream1 As InputStream
	InputStream1.InitializeFromBytesArray(picBuffer, 0, picBuffer.Length)

	Dim Bitmap1 As Bitmap
	Bitmap1.Initialize2(InputStream1)

	InputStream1.Close
	
	Return Bitmap1
End Sub 