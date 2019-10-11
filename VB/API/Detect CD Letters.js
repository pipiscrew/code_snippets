Private Declare Function GetDriveType Lib "kernel32" Alias "GetDriveTypeA" (ByVal nDrive As String) As Long


Private Sub Command1_Click()
    Dim x As Integer


    For x = 1 To 26
        If GetDriveType(Chr(64 + x) & ":\") = 5 Then Label1.Caption = Label1.Caption & " " & Chr(64 + x)
    Next x
End Sub
