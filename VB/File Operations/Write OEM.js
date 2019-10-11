Declare Function OemToChar Lib "user32" Alias "OemToCharA" (ByVal lpszSrc As String, ByVal lpszDst As String) As Long
Declare Function CharToOem Lib "user32" Alias "CharToOemA" (ByVal lpszSrc As String, ByVal lpszDst As String) As Long



 Dim fl As FileSystemObject, txSales As TextStream
 Set fl = New Scripting.FileSystemObject

txSales.WriteLine ConvertToDOS(Line)

txSales.Close
Set txSales = Nothing



Public Function ConvertToAscii(Str As String) As String
 On Error Resume Next

 Dim sDest As String

 sDest = String$(Len(Str) + 1, " ")
 Call OemToChar(ByVal Str, ByVal sDest)

 ConvertToAscii = Replace$(sDest, Chr$(0), "")
End Function

Public Function ConvertToDOS(Str As String) As String
 On Error Resume Next

 Dim sDest As String

 sDest = String$(Len(Str) + 1, " ")
 Call CharToOem(ByVal Str, ByVal sDest)
 If Trim$(sDest) <> "" Then ConvertToDOS = Replace$(sDest, Chr$(0), "")
End Function

