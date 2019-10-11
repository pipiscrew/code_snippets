'http://www.basic4ppc.com/forum/basic4android-updates-questions/13933-camera-sql-blobs-images.html
'no tested

Sub Camera1_PictureTaken (Data() As Byte)
camera1.StartPreview
Dim out As OutputStream
out = File.OpenOutput(File.DirDefaultExternal, a & ".jpg", False)
out.WriteBytes(data, 0, data.Length)
out.Close

Dim InputStream1 As InputStream
InputStream1 = File.OpenInput(File.DirDefaultExternal, a & ".jpg")
Dim OutputStream1 As OutputStream
OutputStream1.InitializeToBytesArray(1000)

File.Copy2(InputStream1, OutputStream1)
Dim Buffer() As Byte
Buffer = OutputStream1.ToBytesArray
'insert record
SQL1.ExecNonQuery2("INSERT INTO xxx VALUES(?, ?, ?, ?)", _
Array As Object(aa.Text, bb.Text, cc.Text, edtLocation.Text, ,(Buffer)))
End Sub

Sub btnSubmit_Click
camera1.TakePicture
End Sub