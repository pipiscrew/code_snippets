Sub Process_Globals
    Dim Socket1 As Socket
End Sub

Sub Globals

End Sub 

Sub Activity_Create(FirstTime As Boolean)
    Socket1.Initialize("Socket1")
    Socket1.Connect("nist1-ny.ustiming.org" , 13, 20000)
End Sub

Sub Socket1_Connected (Successful As Boolean)
    If Successful = False Then
        Msgbox(LastException.Message, "Error connecting")
        Return
    End If
    Dim tr As TextReader
    tr.Initialize(Socket1.InputStream)
    Dim sb As StringBuilder
    sb.Initialize
    sb.Append(tr.ReadLine) 'read at least one line
    Do While tr.Ready
        sb.Append(CRLF).Append(tr.ReadLine)
    Loop
    Msgbox("Time received: " & CRLF & sb.ToString, "")
    Socket1.Close
End Sub