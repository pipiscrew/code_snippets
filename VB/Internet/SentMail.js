Private Declare Function ShellExecute Lib "Shell32.dll" _
Alias "ShellExecuteA" (ByVal hwnd As Long, ByVal lpOperation As String, _
ByVal lpFile As String, ByVal lpParameters As String, ByVal lpDirectory As String, _
ByVal nShowCmd As Long) As Long

Private Sub SentMail(recipient$, Optional subject As String = "", Optional messy As String = "" _
                                        , Optional bcc As String = "", Optional cc As String = "")
Dim HLink$

HLink = "mailto:" & recipient & "?" & "cc=" & cc & "&" & "bcc=" & bcc & "&"
HLink = HLink & "subject=" & subject & "&"
HLink = HLink & "body=" & messy

ShellExecute 0&, vbNullString, HLink, vbNullString, vbNullString, vbNormalFocus
End Sub

