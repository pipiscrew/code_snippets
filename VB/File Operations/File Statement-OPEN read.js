Private Sub Command1_Click()
    'Outline:       - Asks the user for a file.
    '               - Reads all the data into Text1.
    
    Dim FilePath As String
    Dim Data As String
    
    FilePath = InputBox("Enter the path for a text file", "The Two R's", _
    "C:\WINDOWS\WINNEWS.TXT")
    'Asks the user for some input via an input box.
    
    Open FilePath For Input As #1
    'Opens the file given by the user.
    
    Do Until EOF(1)
    'Does this loop until End Of File(EOF) for file number 1.
        Line Input #1, Data
        'Read one line and puts it into the varible Data.
        Text1.Text = Text1.Text & vbCrLf & Data
        'Adds the read line into Text1.
        MsgBox EOF(1)
    Loop
    
    Close #1
    'Closes this file.
End Sub


'mia kai 3w :)
Private Function BinaryRead(ByRef sFileName As String) As String
    Dim fh As Integer
    fh = FreeFile
    
    Open sFileName For Binary As #fh
    BinaryRead = Input$(LOF(fh), fh)
    Close #fh
End Function