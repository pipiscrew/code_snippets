Private Declare Function URLDownloadToFile Lib "urlmon" Alias _ 
    "URLDownloadToFileA" (ByVal pCaller As Long, _
    ByVal szURL As String, _
    ByVal szFileName As String, _
    ByVal dwReserved As Long, _
    ByVal lpfnCB As Long) As Long


Public Function DownloadFile(URL As String, _
    LocalFilename As String) As Boolean
    Dim lngRetVal As Long
    lngRetVal = URLDownloadToFile(0, URL, LocalFilename, 0, 0)
    If lngRetVal = 0 Then DownloadFile = True
End Function
ret = DownloadFile("http://www.URL Of The File", _
"c:\Which Dir To Save The File To.jpg, exe etc.")
