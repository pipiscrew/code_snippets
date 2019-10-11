'Constants for vFlags
    'Only return computers. If the user selects anything
    'other than a computer, the OK button is greyed out.
    Private Const BIF_BROWSEFORCOMPUTER = &H1000
    'Only return printers.'If the user selects anything
    'other than a printer, the OK button is greyed out.
    Private Const BIF_BROWSEFORPRINTER = &H2000
    'Display files as well as folders.
    Private Const BIF_BROWSEINCLUDEFILES = &H4000
    'Do not include network folders below the domain level.
    Private Const BIF_DONTGOBELOWDOMAIN = &H2
    'Include an edit control so the user can type the name
    'of an item.
    Private Const BIF_EDITBOX = &H10
    'Only return file system ancestors. If the user selects
    'anything other than a file system ancestor, the OK
    'button is greyed out.
    Private Const BIF_RETURNFSANCESTORS = &H8
    'Only return file system directories. If the user
    'selects folders that are not part of the file system,
    'the OK button is greyed out.
    Private Const BIF_RETURNONLYFSDIRS = &H1
    'Include a status area in the dialog box. 'The callback
    'function can set the status text by sending messages
    'to the dialog box.
    ''Private Const BIF_STATUSTEXT = &H4
    'Use the new user-interface. 'Setting this flag provides
    'the user with a larger dialog box that can be resized.
    'It has several new capabilities including: drag and
    'drop capability within the dialog box, reordering,
    'context menus, new folders, delete, and other context
    'menu commands. To use this flag, you must call
    'OleInitialize or CoInitialize before calling
    'SHBrowseForFolder.
    Private Const BIF_USENEWUI = &H40
    'If the user types an invalid name into the edit box,
    'the browse dialog will call the application's
    'BrowseCallbackProc with the BFFM_VALIDATEFAILED
    'message. This flag is ignored if BIF_EDITBOX is not
    'specified.
    ''Private Const BIF_VALIDATE = &H20

Public Const MAX_PATH = 260

Private Type BROWSEINFO
    hWndOwner      As Long
    pIDLRoot       As Long
    pszDisplayName As Long
    lpszTitle      As Long
    ulFlags        As Long
    lpfnCallback   As Long
    lParam         As Long
    iImage         As Long
End Type

Private Declare Function SHGetPathFromIDList Lib "shell32.dll" _
    Alias "SHGetPathFromIDListA" (ByVal pidl As Long, _
    ByVal pszPath As String) As Long
Private Declare Function SHBrowseForFolder Lib "shell32.dll" _
    Alias "SHBrowseForFolderA" (lpBrowseInfo As BROWSEINFO) As Long
Private Declare Function lstrcat Lib "kernel32" _
    Alias "lstrcatA" (ByVal lpString1 As String, _
    ByVal lpString2 As String) As Long
Private Declare Function OleInitialize Lib "ole32.dll" _
    (lp As Any) As Long
Private Declare Sub OleUninitialize Lib "ole32" ()

Public Function GetFolder(sTitle As String, Optional vFlags As Variant) As String
  Dim lpIDList As Long
  Dim sBuffer As String
  Dim BInfo As BROWSEINFO
  
  If IsMissing(vFlags) Then vFlags = BIF_RETURNONLYFSDIRS + _
    BIF_DONTGOBELOWDOMAIN + BIF_EDITBOX + BIF_USENEWUI
  
  'Initialize Drag & Drop capabilities in the dialog.
  Call OleInitialize(ByVal 0&)
  
  With BInfo
    .hWndOwner = Access.hWndAccessApp
    .lpszTitle = lstrcat(sTitle, "")
    .ulFlags = vFlags
  End With
  
  lpIDList = SHBrowseForFolder(BInfo)
  
  If (lpIDList) Then
    sBuffer = Space(MAX_PATH)
    SHGetPathFromIDList lpIDList, sBuffer
    sBuffer = Left(sBuffer, InStr(sBuffer, vbNullChar) - 1)
    
    If sBuffer <> "" Then GetFolder = sBuffer
  End If
  
  Call OleUninitialize
End Function
