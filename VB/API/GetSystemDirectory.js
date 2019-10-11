Private Declare Function GetSystemDirectory Lib "kernel32" Alias _
"GetSystemDirectoryA" (ByVal lpBuffer As String, ByVal uSize As Long) As Long


Private Function GetSystemFolder() As String

   Dim s As String
   Dim r As Long

   r = GetSystemDirectory(s, Len(s))
   If r > Len(s) Then
      s = Space(r)
      r = GetSystemDirectory(s, Len(s))
   End If
   s = Left$(s, r)

   If Right(s, 1) = "\" Then
      GetSystemFolder = Left(s, Len(s) - 1)
   Else
      GetSystemFolder = s
   End If

End Function

Private Sub Command1_Click()
MsgBox GetSystemFolder
End Sub
