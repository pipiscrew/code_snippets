Private Sub Command2_Click()
On Error Resume Next

    With ComDLG
        .Flags = &H4& Or &H2 Or &H1000
        .InitDir = "C:\Program Files"
        .FileName = ""
        .DialogTitle = "Open..."
        .Filter = "(Executable *.exe;*.com)|*.exe;*.com"
        .ShowOpen
    End With

    If Err.Number = cdlCancel Then
        Exit Sub
    ElseIf Err.Number <> 0 Then
        Exit Sub
    End If
    
    Text1(1).Text = ComDLG.FileName
End Sub

<>

Public Function CommonDialogBox(ComDLG As CommonDialog, TitleName As Boolean, FilterMask$) As String
On Error Resume Next
    ComDLG.CancelError = True

    With ComDLG
        .Flags = &H4& Or &H2& Or &H1000
        .InitDir = "C:"
        .FileName = ""
        .DialogTitle = IIf(TitleName = True, "Save as...", "Open...")
        .Filter = FilterMask
        If TitleName = True Then .ShowSave Else .ShowOpen
    End With

    If Err.Number = cdlCancel Then
        Exit Function
    ElseIf Err.Number <> 0 Then
        Exit Function
    End If
    
    CommonDialogBox = ComDLG.FileName
End Function

and ::
If Dir(fileChoos) = vbNullString Then MsgBox "File doesn't exist!", vbCritical, aPtitle: Exit Sub