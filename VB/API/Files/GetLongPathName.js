Private Declare Function GetLongPathName Lib "kernel32" Alias _
                        "GetLongPathNameA" (ByVal lpszShortPath As  _
                        String, _
                         ByVal lpszLongPath As String, _
                         ByVal cchBuffer As Long) As Long

Private Function LongPathName(ByVal ShortName As String) As String
   
    Dim n As Long
    Dim Buffer As String
    
    n = 260
    Buffer = String$(n, 0)
    n = GetLongPathName(ShortName, Buffer, n)
    If n > 0 Then
        LongPathName = Left$(Buffer, n)
    End If
    
End Function