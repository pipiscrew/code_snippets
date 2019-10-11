Option Explicit

Private Type BROWSEINFO
  hOwner As Long
  pidlRoot As Long
  pszDisplayName As String
  lpszTitle As String
  ulFlags As Long
  lpfn As Long
  lParam As Long
  iImage As Long
End Type

Private Declare Function SHBrowseForFolder Lib "shell32" _
   Alias "SHBrowseForFolderA" _
   (lpBrowseInfo As BROWSEINFO) As Long

Private Declare Function SHGetPathFromIDList Lib "shell32" _
   Alias "SHGetPathFromIDListA" _
   (ByVal pidl As Long, _
   ByVal pszPath As String) As Long
   
Private Declare Function SHSimpleIDListFromPath Lib _
   "shell32" Alias "#162" _
   (ByVal szPath As String) As Long

Private Declare Sub CoTaskMemFree Lib "ole32" (ByVal pv As Long)

Private Sub Command2_Click()
Dim spath As String

Text2.Text = BrowseForFolderByPIDL(Text2.Text)
End Sub

Private Function BrowseForFolderByPIDL(sSelPath As String) As String

   Dim BI As BROWSEINFO
   Dim pidl As Long
   Dim spath As String * 260
     
   With BI
      .hOwner = Me.hWnd
      .pidlRoot = 0
      .lpszTitle = "Pre-selecting a folder using the folder's pidl."
      .lpfn = FARPROC(AddressOf BrowseCallbackProc)
      .lParam = SHSimpleIDListFromPath(StrConv(sSelPath, vbUnicode))
   End With
  
   pidl = SHBrowseForFolder(BI)
  
   If pidl Then
      If SHGetPathFromIDList(pidl, spath) Then
         BrowseForFolderByPIDL = Left$(spath, InStr(spath, vbNullChar) - 1)
      Else
         BrowseForFolderByPIDL = ""
      End If
     
     'free the pidl from SHBrowseForFolder call
      Call CoTaskMemFree(pidl)
   Else
      BrowseForFolderByPIDL = ""
   End If
  
 'free the pidl (lparam) from GetPIDLFromPath call
   Call CoTaskMemFree(BI.lParam)
  
End Function


Private Function FARPROC(pfn As Long) As Long
  'A dummy procedure that receives and returns
  'the value of the AddressOf operator.
 
  FARPROC = pfn
End Function


'******************************************
' module
'******************************************

Option Explicit

Private Declare Function SendMessage Lib "user32" _
   Alias "SendMessageA" _
   (ByVal hWnd As Long, _
   ByVal wMsg As Long, _
   ByVal wParam As Long, _
   lParam As Any) As Long
   
Private Const WM_USER = &H400
Private Const BFFM_INITIALIZED = 1

Private Const BFFM_SETSELECTIONA As Long = (WM_USER + 102)
          

Public Function BrowseCallbackProc(ByVal hWnd As Long, _
                                   ByVal uMsg As Long, _
                                   ByVal lParam As Long, _
                                   ByVal lpData As Long) As Long
 
   Select Case uMsg
      Case BFFM_INITIALIZED
      
         Call SendMessage(hWnd, BFFM_SETSELECTIONA, _
                          0&, ByVal lpData)
                          
         Case Else:
         
   End Select

End Function

