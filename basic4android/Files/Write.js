//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/6690-text-files.html#post38928

//write string 
out = File.OpenOutput(File.DirRootExternal, "test.txt", False)
WriteStringToStream(out, s)

Sub WriteStringToStream(Out As OutputStream, s As String)
    Dim t As TextWriter
    t.Initialize(Out)
    t.Write(s)
    t.Close 'Closes the internal stream as well
End Sub 

//OR
Sub WriteTextWriter
    Dim TextWriter1 As TextWriter
    TextWriter1.Initialize(File.OpenOutput(File.DirRootExternal, "Text.txt", False))
    For i = 1 To 10
        TextWriter1.WriteLine("Line" & i)
    Next
    TextWriter1.Close
End Sub



//write list
File.WriteList(File.DirRootExternal, "List.txt", List1)




//compressed
//http://www.basic4ppc.com/android/help/randomaccessfile.html#compressedstreams
    Dim out As OutputStream
    Dim s As String
    Dim compress As CompressedStreams
    s = sb.ToString
    
    'Write the string with gzip compression.
    out = File.OpenOutput(File.DirRootExternal, "test.gz", False)
    out = compress.WrapOutputStream(out, "gzip")
    WriteStringToStream(out, s)
    
    'Write the string with zlib compression
    out = File.OpenOutput(File.DirRootExternal, "test.zlib", False)
    out = compress.WrapOutputStream(out, "zlib")
    WriteStringToStream(out, s)