//http://www.basic4ppc.com/forum/german-tutorials/7461-sql-tutorial.html#post42506

Sub InsertBlob
    'convert the image file to a bytes array
    Dim InputStream1 As InputStream
    InputStream1 = File.OpenInput(File.DirAssets, "smiley.gif")
    Dim OutputStream1 As OutputStream
    OutputStream1.InitializeToBytesArray(1000)
    File.Copy2(InputStream1, OutputStream1)
    Dim Buffer() As Byte 'declares an empty array
    Buffer = OutputStream1.ToBytesArray
    
    'write the image to the database
    SQL1.ExecNonQuery2("INSERT INTO table2 VALUES('smiley', ?)", Array As Object(Buffer))
End Sub