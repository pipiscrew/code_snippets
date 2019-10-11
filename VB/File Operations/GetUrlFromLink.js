Private Declare Function GetPrivateProfileString Lib "kernel32" Alias "GetPrivateProfileStringA" (ByVal lpApplicationName As String, ByVal lpKeyName As String, ByVal lpDefault As String, ByVal lpReturnedString As String, ByVal nSize As Long, ByVal lpFileName As String) As Long

Public Function GetUrlFromLink(sFilename As String) As String
    Const BUFSIZE = 1024&
    Dim lRet As Long
    Dim sBuf As String
      
    sBuf = String(BUFSIZE + 2, 0)
    lRet = GetPrivateProfileString("InternetShortcut", "URL", "", sBuf, BUFSIZE, sFilename)
    If lRet > 0& Then GetUrlFromLink = Left$(sBuf, lRet)
End Function
