Public Function Split(ByVal TextToSplit As String, Optional Delimiter As String = " ") As Variant 
     
    If TextToSplit = "" Then Exit Function 
     
    Dim TempStr As String, tempArr() As String 
    Dim x As Long 
     
    On Error Resume Next 
     
    If Delimiter <> "" Then 
        Do 
            x = InStr(TextToSplit, Delimiter) 
            If x <> 0 Then 
                TempStr = Left(TextToSplit, x - 1) 
                TextToSplit = Right(TextToSplit, Len(TextToSplit) - x + 1 - Len(Delimiter)) 
                 
                ReDim Preserve tempArr(UBound(tempArr) + 1) 
                If Err Then ReDim tempArr(0): Err = 0 
                tempArr(UBound(tempArr)) = TempStr 
                 
            End If 
        Loop While x <> 0 
    End If 
     
    If TextToSplit <> "" Then 
     
        ReDim Preserve tempArr(UBound(tempArr) + 1) 
        If Err Then ReDim tempArr(0) 
        tempArr(UBound(tempArr)) = TextToSplit 
     
    End If 
     
    Split = tempArr() 
End Function 