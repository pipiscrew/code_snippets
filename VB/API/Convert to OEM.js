Private Declare Function CharToOem Lib "user32" Alias "CharToOemA" (ByVal lpszSrc As String, ByVal lpszDst As String) As Long

Function ConvToOEM(sq As String) As String
On Error GoTo errH
  Dim Temp As String
  If sq = "" Then Exit Function
 
  Temp = Space(Len(sq) + 1)
  CharToOem sq, Temp
  ConvToOEM= Replace(Trim(Temp), Chr(0), "")
  Exit Function
errH:
  MsgBox err.Description
End Function



Private Declare Sub OemToChar Lib "user32" Alias "OemToCharA" (ByVal StrFrom As String, ByVal StrTo As String)

Private Declare Sub CharToOem Lib "user32" Alias "CharToOemA" (ByVal StrFrom As String, ByVal StrTo As String)

http://codepedia.com/mb/vba/264347/264347/how-to-convert-an-ansi-string-to-oem-and-reverse/?S=B10000