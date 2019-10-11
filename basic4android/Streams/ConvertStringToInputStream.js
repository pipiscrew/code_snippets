//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/6866-xml-parsing-xmlsax-library-7.html
Sub ConvertStringToInputStream(s As String) As InputStream
    Dim in As InputStream
    Dim b() As Byte
    b = s.GetBytes("UTF8")
    in.InitializeFromBytesArray(b, 0, b.Length)
    Return in
End Sub