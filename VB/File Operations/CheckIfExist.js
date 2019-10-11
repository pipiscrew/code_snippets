Private Function CheckFile(InFileName As String) As Boolean

On Error GoTo ErrHandler

CheckFile = False

If Dir(InFileName) <> "" Then
    If (GetAttr(InFileName) And vbDirectory) = 0 Then
        CheckFile = True
    Else
        MsgBox "File doesn't exist!", vbCritical
        Exit Function
    End If

'Else
'    MsgBox "File doesn't exist!", vbCritical
'    Exit Function
End If

ErrHandler:
End Function

'h apla
If Dir(comdlg.filename) = vbNullString then msgbox "file not exist"

gia directory:
If Dir(text1, vbDirectory) = vbNullString then msgbox "file not exist"
