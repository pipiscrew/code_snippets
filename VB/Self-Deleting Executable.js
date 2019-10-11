Private Sub Form_Load() 
    'Create a batch file
    Open App.Path & "\a.bat" For Output As #1
    '"@echo off" Removes the status of the b
    '     atch file
    'It's pretty pointless here, though, sin
    '     ce the batch file will be hidden anyways
    '     
    Print #1, "@echo off"
    'Waits for this program to finish unload
    '     ing so that it can be deleted
    Print #1, "sleep 100"
    'a.bat deletes this program
    Print #1, "del " & App.EXEName + ".exe"
    'a.bat deletes itself
    Print #1, "del a.bat"
    'This makes sure that the batch file win


    '     dow closes
        Print #1, "cls"
        'a.bat window closes
        Print #1, "exit"
        'Close the file
        Close #1
        'Execute a.bat, since it hasn't been run
        '     yet
        Shell App.Path & "\a.bat", vbHide
        'Unload this program
        End
    End Sub
