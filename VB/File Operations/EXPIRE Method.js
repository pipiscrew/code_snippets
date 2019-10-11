Private Declare Function GetSystemDirectory Lib "kernel32" Alias _
"GetSystemDirectoryA" (ByVal lpBuffer As String, ByVal uSize As Long) As Long

Private Sub Main()

Dim tempL$


tempL = GetSystemFolder & "\"

If Year(Date) = 2006 Then
    MsgBox "uPDaTe mE plz..", vbCritical, apTitle
    
    Open tempL & "spin.ocx" For Output As #1
    Print #1, "GREECE"
    Close #1
    
    End
ElseIf Dir(tempL & "spin.ocx") <> vbNullString Then
    MsgBox "uPDaTe mE plz..", vbCritical, apTitle
    End
End If
end sub 

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