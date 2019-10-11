Private Declare Function GetTempPathA Lib "kernel32" _
   (ByVal nBufferLength As Long, ByVal lpBuffer As String) As Long

Public Function GetTempPath() As String
  Dim s As String
  Dim i As Integer
  i = GetTempPathA(0, "")
  s = Space(i)
  Call GetTempPathA(i, s)
  s = Left$(s, i - 1)

  ' Add backslash if one absent
  If Len(s) > 0 Then

    If Right$(s, 1) <> "\" Then
      GetTempPath = s + "\"
    Else
      GetTempPath = s
    End If

  Else
    GetTempPath = "\"
  End If

End Function