Dim SQL1 As SQL
Dim Buffer() As Byte 
Dim SQLReader As Cursor
SQLReader = SQL1.ExecQuery("select picture from languages where TgUniqueField=1") 'aka Select TOP 1

SQLReader.Position = 0
Buffer = SQLReader.GetBlob("Picture")

Dim InputStream1 As InputStream
InputStream1.InitializeFromBytesArray(Buffer, 0, Buffer.Length)

Dim Bitmap1 As Bitmap
Bitmap1.Initialize2(InputStream1)

ImageView1.Bitmap = Bitmap1
InputStream1.Close
SQLReader.Close

'//or as funtion 


Sub CreateGUI
	Dim Buffer() As Byte 
	Dim SQLReader As Cursor
	SQLReader = Main.SQL1.ExecQuery("select picture from languages order by TgUniqueField") 'aka Select TOP 1
	
	SQLReader.Position = 0
	Buffer = SQLReader.GetBlob("Picture")
	
	image1.Bitmap = GetBitmapFromBLOB(Buffer)
	
	SQLReader.Position = 1
	Buffer = SQLReader.GetBlob("Picture")
	image2.Bitmap = GetBitmapFromBLOB(Buffer)
	
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