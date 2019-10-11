Private Sub cmdShowFileSize_Click()
Dim strOldFile As String
Dim strOldSize As String
Dim strMyDir As String
Dim strMyFile As String

'Update the following with your directory and file
'info or use App.Path. This sample does not include
'error checking.

strMyDir = "c:\windows\desktop"
strMyFile = "readme.txt"

  strOldFile = strMyDir & "\" & strMyFile
  strOldSize = FileLen(strOldFile)
  
  lblFileSize.Caption = "The file " & strOldFile & " is " & _
  Format(strOldSize, "#,##0") & " bytes in size."

End Sub

'simple
Format(FileLen("C:\takis.exe"), "#,##0") & " bytes"