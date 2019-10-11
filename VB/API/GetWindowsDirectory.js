Private Declare Function GetWindowsDirectory Lib "kernel32" Alias _
"GetWindowsDirectoryA" (ByVal lpBuffer As String, ByVal uSize As Long) As Long

Private Function GetWindowsFolder() As String

   Dim s As String
   Dim r As Long

   r = GetWindowsDirectory(s, Len(s))
   If r > Len(s) Then
      s = Space(r)
      r = GetWindowsDirectory(s, Len(s))
   End If
   s = Left$(s, r)

   If Right(s, 1) = "\" Then
      GetWindowsFolder = Left(s, Len(s) - 1)
   Else
      GetWindowsFolder = s
   End If

End Function


Private Sub Command1_Click()
MsgBox GetWindowsFolder
End Sub