If Check4Changes = True Then
    If MsgBox("Save Changes to :" & vbCrLf & vbCrLf & data0(DB) & vbCrLf & vbCrLf & "??", vbInformation + vbYesNo) = vbYes Then
        Dim X As MSComctlLib.Button
        Set X = ToolBar1.Buttons("Save")
        Call Toolbar1_ButtonClick(X)
       End If
End If