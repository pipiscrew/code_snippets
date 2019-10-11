'ExtractRes Usage: If ExtractRes(101,tmpDIR & "\path\test.dat",["CUSTOM"]) = True then Msgbox("Extracted File")
Private Function ExtractRes(ID As Integer, strOutput As String, Optional strType As String = "CUSTOM") As Boolean
    On Error GoTo Err
    
    Dim strBuffer() As Byte
    Dim F As Integer
    
    strBuffer = LoadResData(ID, strType) 'Load Data into a Byte Array "strBuffer()"
    F = FreeFile 'Get a free Filesystem pipe
    
    Open strOutput For Binary As #F 'Open file, if dont exist it create it
        Put #F, , strBuffer 'Put the data into the file
    Close #F 'Close file, pipe is free again
    
    ExtractRes = True 'Return true, extracted
    Exit Function 'Exit since it worked
Err:
    ExtractRes = False 'Return False, failed extracting
End Function