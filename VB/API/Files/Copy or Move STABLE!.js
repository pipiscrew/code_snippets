Private Type SHFILEOPSTRUCT
   hWnd        As Long
   wFunc       As Long
   pFrom       As String
   pTo         As String
   fFlags      As Integer
   fAborted    As Boolean
   hNameMaps   As Long
   sProgress   As String
 End Type
  
Private Const FO_MOVE As Long = &H1
Private Const FO_COPY As Long = &H2
Private Const FO_DELETE As Long = &H3
Private Const FO_RENAME As Long = &H4

Private Const FOF_SILENT As Long = &H4
Private Const FOF_RENAMEONCOLLISION As Long = &H8
Private Const FOF_NOCONFIRMATION As Long = &H10
Private Const FOF_SIMPLEPROGRESS As Long = &H100
Private Const FOF_ALLOWUNDO As Long = &H40

Private Declare Function GetTempPath Lib "kernel32" _
     Alias "GetTempPathA" _
    (ByVal nSize As Long, ByVal lpBuffer As String) As Long

Private Declare Function SHFileOperation Lib "shell32" _
    Alias "SHFileOperationA" _
    (lpFileOp As SHFILEOPSTRUCT) As Long
  
Private Declare Function SHGetPathFromIDList Lib "shell32" _
    Alias "SHGetPathFromIDListA" _
    (ByVal pidl As Long, ByVal pszPath As String) As Long
       
Private Declare Function SHGetSpecialFolderLocation Lib "shell32" _
    (ByVal hwndOwner As Long, _
     ByVal nFolder As Long, _
     pidl As Long) As Long
   
Private Declare Function SHBrowseForFolder Lib "shell32" _
    Alias "SHBrowseForFolderA" _
    (lpBrowseInfo As BROWSEINFO) As Long
   
Private Type BROWSEINFO
   hOwner           As Long
   pidlRoot         As Long
   pszDisplayName   As String
   lpszTitle        As String
   ulFlags          As Long
   lpfn             As Long
   lParam           As Long
   iImage           As Long
End Type
   
Private Const ERROR_SUCCESS As Long = 0
Private Const CSIDL_DESKTOP As Long = &H0
Private Const BIF_RETURNONLYFSDIRS As Long = &H1
Private Const BIF_STATUSTEXT As Long = &H4
Private Const BIF_RETURNFSANCESTORS As Long = &H8
         

'FO_FUNC - the File Operation to perform,
'determined by the type of SHFileOperation
'action chosen (move/copy)
Dim FO_FUNC As Long
 
'for ease of reading, constants are substituted
'for SHFileOperation numbers in code
Const FileMove As Integer = 1
Const FileCopy As Integer = 2
  
'Check button index constants
Const optSilent As Integer = 0
Const optNoFilenames As Integer = 1
Const optNoConfirmDialog As Integer = 2
Const optRenameIfExists As Integer = 3
Const optPromptMeFirst As Integer = 4

'strings to hold paths for this demo
Dim source As String
Dim destination As String
   

Private Sub Form_Load()

   Me.Move (Screen.Width - Me.Width) \ 2, (Screen.Height - Me.Height) \ 2
   Option1(FileCopy).Value = True
   
   Command1(0).Caption = "Select Source"
   Command1(1).Caption = "Select Target"
   Command2.Caption = "Perform Action"
   Command3.Caption = "End"
   Option1(1).Caption = "Move Source Folder to Destination"
   Option1(2).Caption = "Copy Source Folder to Destination"
   Check1(0).Caption = "Don't show operation (no copy dialog)"
   Check1(1).Caption = "Don't show filenames for multiple deletes"
   Check1(2).Caption = "Don't prompt for confirmation"
   Check1(3).Caption = "Rename file if target name already exists"
   Check1(4).Caption = "Whoa !! Prompt me before doing it !"
         
End Sub


Private Sub Command1_Click(Index As Integer)

   Dim tmp As String
   
   Select Case Index
      Case 0:
         tmp = GetBrowseFolder("Select the SOURCE to move or copy:")
         
         If Len(tmp) > 0 Then
            source = tmp
            Text1.Text = source
         End If
    
      Case 1:
         tmp = GetBrowseFolder("Select the folder DESTINATION:")
         
         If Len(tmp) > 0 Then
            destination = tmp
            Text2.Text = destination
         End If
         
   End Select

End Sub


Private Sub Command2_Click()

   Dim msg As String
   Dim action As Boolean
   
  'First, assume the user WILL want to perform the
  'action, in case they don't want prompting
   action = True
   
  'check if they've asked to be prompted about the action...
   If Check1(optPromptMeFirst).Value = 1 Then
   
      msg = "You have chosen to move or copy the folder and contents of :" & vbCrLf
      msg = msg & source & vbCrLf & vbCrLf
      msg = msg & "to the destination:" & vbCrLf
      msg = msg & destination & vbCrLf & vbCrLf
      msg = msg & "Are you sure that you want to proceed with this action?"
  
    'since they want to be prompted, set the action
    'based on their response to a messagebox.
    '
    'Two buttons are presented - Yes and No.
    '
    'If No is selected, the the return value from the
    'messagebox is vbNo. When that is compared with
    'vbYes in the expression, the result is FALSE, therefore
    'the action variable will be set to false.
    '
    'If Yes is selected, the the return value from the
    'messagebox is vbYes, which equals vbYes, therefore
    'the expression will return TRUE to the action variable
     action = MsgBox(msg, vbExclamation Or vbYesNo, "Warning") = vbYes
      
   End If
   
   If action = True Then
      PerformShellAction source, destination
   End If
   
End Sub


Private Sub Command3_Click()

   Unload Me
   
End Sub


Private Sub Option1_Click(Index As Integer)

  'set the file action flag
   FO_FUNC = CLng(Index)

End Sub


Public Function PerformShellAction(sSource As String, _
                                   sDestination As String) As Long

   Dim FOF_FLAGS As Long
   Dim SHFileOp As SHFILEOPSTRUCT
   
  'terminate the folder string with a pair of nulls
   sSource = sSource & Chr$(0) & Chr$(0)
  
  'determine the user's options selected
   FOF_FLAGS = BuildBrowseFlags()
  
  'set up the options
   With SHFileOp
      .wFunc = FO_FUNC
      .pFrom = sSource
      .pTo = sDestination
      .fFlags = FOF_FLAGS
   End With
  
  'and perform the chosen copy or move operation
   PerformShellAction = SHFileOperation(SHFileOp)

End Function


Private Function BuildBrowseFlags() As Long

 'Iterate through the options, and build
 'the flag variable according to the user selection.

  Dim flag As Long
   
 'these can be multiple
  If Check1(optSilent).Value Then flag = flag Or FOF_SILENT
  If Check1(optNoFilenames).Value Then flag = flag Or FOF_SIMPLEPROGRESS
  If Check1(optNoConfirmDialog).Value Then flag = flag Or FOF_NOCONFIRMATION
  If Check1(optRenameIfExists).Value Then flag = flag Or FOF_RENAMEONCOLLISION
  
  BuildBrowseFlags = flag

End Function


Private Function GetBrowseFolder(msg) As String

   Dim pidl As Long
   Dim pos As Integer
   Dim path As String
   Dim bi As BROWSEINFO
  
  'Fill the BROWSEINFO structure with the needed data,
  'show the browse dialog, and if the returned value
  'indicates success (1), retrieve the user's
  'selection contained in pidl
   With bi
      .hOwner = Me.hWnd
      .pidlRoot = CSIDL_DESKTOP
      .lpszTitle = msg
      .ulFlags = BIF_RETURNONLYFSDIRS
   End With

   pidl = SHBrowseForFolder(bi)
 
   path = Space$(512)
     
   If SHGetPathFromIDList(ByVal pidl, ByVal path) = 1 Then
      pos = InStr(path, Chr$(0))
      GetBrowseFolder = Left(path, pos - 1)
   End If

End Function


