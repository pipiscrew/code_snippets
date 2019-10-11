//RandomAccessFile lib needed
Sub WriteAllBytes(folder As String , filename As String,buffer as Byte()) as Boolean
	Try 
		Dim raf As RandomAccessFile
	    raf.Initialize(folder, filename, False)
		raf.WriteBytes(buffer,0,buffer.Length,0)
		raf.Close
		
		Return True
	Catch 
		Return False
	End Try 
End Sub 

//when 
IsInitialize not exist - CurrentPosition=0 nothing wrote