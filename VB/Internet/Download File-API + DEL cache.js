''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Copyright &copy;1996-2005 VBnet, Randy Birch, All Rights Reserved.
' Some pages may also contain other copyrights by the author.
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Distribution: You can freely use this code in your own
'               applications, but you may not reproduce
'               or publish this code on any web site,
'               online service, or distribute as source
'               on any media without express permission.
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Private Declare Function URLDownloadToFile Lib "urlmon" _
   Alias "URLDownloadToFileA" _
  (ByVal pCaller As Long, _
   ByVal szURL As String, _
   ByVal szFileName As String, _
   ByVal dwReserved As Long, _
   ByVal lpfnCB As Long) As Long
   
Private Declare Function DeleteUrlCacheEntry Lib "Wininet.dll" _
   Alias "DeleteUrlCacheEntryA" _
  (ByVal lpszUrlName As String) As Long
   
Private Const ERROR_SUCCESS As Long = 0
Private Const BINDF_GETNEWESTVERSION As Long = &H10
Private Const INTERNET_FLAG_RELOAD As Long = &H80000000


Private Sub Form_Load()

   Command1.Caption = "Download File"
   Command2.Caption = "Clear Cache && Download"
   
End Sub

   
Private Sub Command1_Click()

   Dim sSourceUrl As String
   Dim sLocalFile As String
   Dim hfile As Long
   
   sSourceUrl = "http://vbnet.mvps.org/code/faq/fileloadtext.htm"
   sLocalFile = "c:\deleteme.htm"
   
   Label1.Caption = sSourceUrl
   Label2.Caption = sLocalFile
   
   If DownloadFile(sSourceUrl, sLocalFile) Then
   
      hfile = FreeFile
      Open sLocalFile For Input As #hfile
         Text1.Text = Input$(LOF(hfile), hfile)
      Close #hfile
      
   End If

End Sub


Private Sub Command2_Click()

   Dim sSourceUrl As String
   Dim sLocalFile As String
   Dim hfile As Long
   
   sSourceUrl = "http://vbnet.mvps.org/code/faq/fileloadtext.htm"
   sLocalFile = "c:\deleteme.htm"
   
   Label1.Caption = sSourceUrl
   Label2.Caption = sLocalFile
   
  'Attempt to delete any cached version of
  'the file. Since we're only interested in
  'nuking the file, the routine is called as
  'a sub. If the return value is requires
  '(calling as a function), DeleteUrlCacheEntry
  'returns 1 if successful, or 0 otherwise, e.g.
  '  If DeleteUrlCacheEntry(sourceUrl) = 1 Then
  '     Debug.Print "cached file found and deleted"
  '  Else
  '     Debug.Print "no cached file for " & sourceUrl
  '  End If
  'Note that the Remote URL is passed as this is the
  'name the cached file is known by. This does NOT
  'delete the file from the Remote server.
   Call DeleteUrlCacheEntry(sSourceUrl)

   If DownloadFile(sSourceUrl, sLocalFile) = True Then

         hfile = FreeFile
         Open sLocalFile For Input As #hfile
            Text1.Text = Input$(LOF(hfile), hfile)
         Close #hfile

   End If
   
End Sub


Private Function DownloadFile(sSourceUrl As String, _
                              sLocalFile As String) As Boolean
  
  'Download the file. BINDF_GETNEWESTVERSION forces
  'the API to download from the specified source.
  'Passing 0& as dwReserved causes the locally-cached
  'copy to be downloaded, if available. If the API
  'returns ERROR_SUCCESS (0), DownloadFile returns True.
   DownloadFile = URLDownloadToFile(0&, _
                                    sSourceUrl, _
                                    sLocalFile, _
                                    BINDF_GETNEWESTVERSION, _
                                    0&) = ERROR_SUCCESS
   
End Function


