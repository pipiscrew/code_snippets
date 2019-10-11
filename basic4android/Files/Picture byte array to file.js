Sub WritePictureFileFromBytes(picBuffer() As Byte, folder As String , filename As String) As Boolean 
	Try 
		Dim out As OutputStream
		Dim Bitmap1 As Bitmap

		out = File.OpenOutput(folder,filename,False)
		Bitmap1 = GetBitmapFromByteArray(picBuffer)
		Bitmap1.WriteToStream(out,100,"PNG")
		out.Close 
		
		Return True 
	Catch 
		Return False
	End Try
End Sub 