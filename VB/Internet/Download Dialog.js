The DoFileDownload function opens a download dialog

Private Declare Function DoFileDownload Lib "shdocvw.dll" (ByVal lpszFile As String) As Long
Private Sub Form_Load()
'KPD-Team 2000
'URL: http://www.allapi.net/
'E-Mail: KPDTeam@Allapi.net
DoFileDownload StrConv("http://www.allapi.net/", vbUnicode)
End Sub

