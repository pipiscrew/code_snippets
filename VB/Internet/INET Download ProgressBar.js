Private Sub Command1_Click()

    Dim Size As Long, Remaining As Long, FFile As Integer, Chunk() As Byte
     
    Inet1.Execute "http://www.codeguru.com/forum/images/cg-logo.gif", "GET"

    Do While Inet1.StillExecuting
        DoEvents
    Loop

    
    Size = CLng(Inet1.GetHeader("Content-Length"))
    Remaining = Size
    
    ProgressBar1.Max = Size
    

    FFile = FreeFile
    Open "c:\logo.gif" For Binary Access Write As #FFile
    Do Until Remaining = 0
     
        If Remaining > 1024 Then
            Chunk = Inet1.GetChunk(1024, icByteArray)
            Remaining = Remaining - 1024
            ProgressBar1.Value = Size - Remaining
        Else
            Chunk = Inet1.GetChunk(Remaining, icByteArray)
            Remaining = 0
            ProgressBar1.Value = Size
        End If
     
        Put #FFile, , Chunk
     
    Loop
    Close #FFile

    MsgBox "File downloaded"

End Sub
