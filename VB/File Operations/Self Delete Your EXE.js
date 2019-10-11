Private Sub Form_Terminate() 
    Dim myEXE, outEX As String
    myEXE = App.Path & "\" & App.EXEName & ".exe"
    mybat = App.Path & "\go.bat"
    Open mybat For Output As #1
    Print #1, "del " & App.EXEName & ".exe"
    Print #1, "del go.bat"
    Close #1
    Shell mybat, vbNormalFocus
End Sub
