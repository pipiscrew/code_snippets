Private Sub ResizeForm(FrmName As Form, x As Integer, y As Integer, _
    Optional param As Integer)
'// on error resume next is needed because there might be some controls
'// on the form that may not support some of the properties that will be set
    On Error Resume Next

'// validate x and y input values
    If x < 1 Or y < 1 Then
        MsgBox "x and y values must be at least 1"
        Exit Sub
    End If
    
'// check if only controls are to be resized
    If param <> 0 Then GoTo ResizeControls
    
'// resize the form's height, width and font sizes
    With FrmName
        .Height = .Height * y / 100
        .Width = .Width * x / 100
        .Font.Size = .Font.Size * x / 100
    End With
    
    Exit Sub

ResizeControls:
'// loop through all the controls on the form and reposition them
'// relative to the form origin, then resize their height, width and
'// font sizes

Dim i As Integer
    For i = 0 To FrmName.Controls.Count - 1
            FrmName.Controls(i).Left = FrmName.Controls(i).Left * x / 100
            FrmName.Controls(i).Top = FrmName.Controls(i).Top * y / 100
            FrmName.Controls(i).Height = FrmName.Controls(i).Height * y / 100
            FrmName.Controls(i).Width = FrmName.Controls(i).Width * x / 100
    '// note: the control's font will resize only if it is a true-type font
            FrmName.Controls(i).Font.Size = FrmName.Controls(i).Font.Size * x / 100
    Next i
End Sub


End Sub