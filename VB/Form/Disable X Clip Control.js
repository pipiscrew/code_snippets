Private Declare Function GetSystemMenu Lib "User32" (ByVal hwnd As Long, ByVal bRevert As Long) As Long
Private Declare Function GetMenuItemCount Lib "User32" (ByVal hMenu As Long) As Long
Private Declare Function DrawMenuBar Lib "User32" (ByVal hwnd As Long) As Long
Private Declare Function RemoveMenu Lib "User32" (ByVal hMenu As Long, ByVal nPosition As Long, ByVal wFlags As Long) As Long

Private Const MF_BYPOSITION = &H400&
Private Const MF_RemOVE = &H1000&


Private Sub Form_Load()
 Dim hSysMenu As Long
 Dim nCnt As Long
'First, show the form
 Me.Show
'Get handle to our form's system menu
'(Restore, Maximize, Move, close etc.)
 hSysMenu = GetSystemMenu(Me.hwnd, False)
 If hSysMenu Then
 'Get System menu's menu count
  nCnt = GetMenuItemCount(hSysMenu)
  If nCnt Then
  'Menu count is based on 0 (0, 1, 2, 3...)
   RemoveMenu hSysMenu, nCnt - 1, MF_BYPOSITION Or MF_RemOVE
   RemoveMenu hSysMenu, nCnt - 2, MF_BYPOSITION Or MF_RemOVE  'Remove the seperator
   DrawMenuBar Me.hwnd
  'Force caption bar's refresh. Disabling X button
  'Me.Caption = "Try to close me!"
  End If
 End If
End Sub
