//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/6690-text-files.html#post38928
 Msgbox(File.ReadString(File.DirRootExternal, "String.txt"), "")
 
 //OR
 Sub ReadTextReader
    Dim TextReader1 As TextReader
    TextReader1.Initialize(File.OpenInput(File.DirRootExternal, "Text.txt"))
    Dim line As String
    line = TextReader1.ReadLine    
    Do While line <> Null
        Log(line) 'write the line to LogCat
        line = TextReader1.ReadLine
    Loop
    TextReader1.Close
End Sub