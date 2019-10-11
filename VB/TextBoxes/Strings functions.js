Option Explicit

Public Function StringFormat(ByVal Text As String, ParamArray args()) As String

   Dim RetVal As String
   Dim Counter As Integer

   RetVal = Text

   For Counter = LBound(args) To UBound(args)

       RetVal = Replace(RetVal, "{" & Counter & "}", CStr(args(Counter)))

   Next

   StringFormat = RetVal

End Function

Public Function StringContains(ByVal Text As String, ByVal Value As String) As Boolean
    StringContains = IIf(InStr(Text, Value) = 0, False, True)
End Function

'Determines if a string starts with the same characters as
'Value string
Public Function StringStartsWith(ByVal Text As String, ByVal Value As String, Optional ByVal ComparisonType As VbCompareMethod = vbBinaryCompare) As Boolean

  Dim ComparisonText As String
  Dim ComparisonLen As Long

  ComparisonLen = Len(Value)
  If ComparisonLen > Len(Text) Then Exit Function

  ComparisonText = Left(Text, ComparisonLen)
  StringStartsWith = (StrComp(ComparisonText, Value, ComparisonType) = 0)

End Function

'Determines if a string ends with the same characters as
'Value string
Public Function StringEndsWith(ByVal Text As String, ByVal Value As String, Optional ByVal ComparisonType As VbCompareMethod = vbBinaryCompare) As Boolean

  Dim ComparisonText As String
  Dim ComparisonLen As Long

  ComparisonLen = Len(Value)
  If ComparisonLen > Len(Text) Then Exit Function

  ComparisonText = Right(Text, ComparisonLen)
  StringEndsWith = (StrComp(ComparisonText, Value, ComparisonType) = 0)

End Function


