Private Declare Function GetShortPathName Lib "kernel32" Alias _
    "GetShortPathNameA" (ByVal lpszLongPath As String, _
    ByVal lpszShortPath As String, ByVal cchBuffer As Long) As Long

' Convert a long filename into the short 8.3 format
' if the file doesn't exist, return a null string

Function GetShortFileName(ByVal LongFileName As String) As String
    Dim buffer As String, length As Long
    ' Prepare the receiving buffer
    buffer = Space$(300)
    length = GetShortPathName(LongFileName, buffer, Len(buffer))
    ' if return value was non-zero, estract the result
    ' else, it returns a null string (probably
    GetShortFileName = Left$(buffer, length)
 End Function
