Private Sub Command2_Click()
    'Outline:       - Asks the user for a file.
    '               - Writes it all to a the file.
    
    Dim FilePath As String
    
    FilePath = InputBox("Enter the path for a text file", _
    "The Two R's")
    'Asks the user for some input via an input box.
    
    Open FilePath For Output As #1
    'Opens the file given by the user (for Output).
    
    Print #1, Text1.Text
    'Writes the data into the file number #1
    
    Close #1
End Sub