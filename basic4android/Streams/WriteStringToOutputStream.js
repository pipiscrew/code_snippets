//http://www.basic4ppc.com/android/help/randomaccessfile.html#compressedstreams

Dim out As OutputStream
out = compress.WrapOutputStream(out, "gzip")
WriteStringToStream(out, s)

Sub WriteStringToStream(Out As OutputStream, s As String)
    Dim t As TextWriter
    t.Initialize(Out)
    t.Write(s)
    t.Close 'Closes the internal stream as well
End Sub 