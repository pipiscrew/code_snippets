On Error GoTo MS ' Error control
    Dim vFiles As Variant
    Dim lFile As Long
    With CommonDialog1
        .FileName = "" 'Clear the filename
        .CancelError = True 'Gives an error if cancel is pressed
        .DialogTitle = "Select File(s)..."
        .Flags = cdlOFNAllowMultiselect Or cdlOFNExplorer Or cdlOFNHideReadOnly 'Falgs, allows Multi select, Explorer style and hide the Read only tag
        .Filter = "All files (*.*)|*.*"
        .ShowOpen
        vFiles = Split(.FileName, Chr(0)) 'Splits the filename up in segments
    If UBound(vFiles) = 0 Then ' If there is only 1 file then do this
    List1.AddItem .FileName
    List2.AddItem .FileTitle
    Else
    For lFile = 1 To UBound(vFiles) ' More than 1 file then do this until there are no more files
    List1.AddItem vFiles(0) + "\" & vFiles(lFile)
    List2.AddItem vFiles(lFile)
    Next
    End If
    End With
MS: