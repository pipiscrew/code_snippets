Private Sub Command1_Click()
    Inet1.URL = "http://www.blue-whitegt.com"
    Inet1.Execute "http://www.blue-whitegt.com/browse.php", "POST", "", _
        "Content-Type: application/x-www-form-urlencoded"
        
    Do
        DoEvents
    Loop While Inet1.StillExecuting
    
    MsgBox "Pasre the data after PHP GET complete!" & vbCrLf & vbCrLf & "Code escape from dudesLand", vbExclamation, "Athens, GREECE"
End Sub

Private Sub Inet1_StateChanged(ByVal State As Integer)

Select Case State

Case 12
    Dim vtData As Variant
    Dim strData As String
    Dim bDone As Boolean
    bDone = False
    
    ' Get first chunk.
    vtData = Inet1.GetChunk(1024, icString)
    DoEvents
    
    Do While Not bDone
       strData = strData & vtData
       ' Get next chunk.
       vtData = Inet1.GetChunk(1024, icString)
       DoEvents
    
       If Len(vtData) = 0 Then
          bDone = True
       End If
    Loop
    
    Text1.Text = strData

End Select
End Sub
