Private Declare Function GetSystemMenu Lib "user32" (ByVal hwnd As Long, ByVal bRevert As Long) As Long
Private Declare Function DeleteMenu Lib "user32" (ByVal hMenu As Long, ByVal nPosition As Long, ByVal wFlags As Long) As Long
Private Const MF_BYPOSITION = &H400&


Private Sub RemoveMenus(FormName As Form, _
    Remove_Restore As Boolean, _
    Remove_Move As Boolean, _
    Remove_Size As Boolean, _
    Remove_Minimize As Boolean, _
    Remove_Maximize As Boolean, _
    Remove_Seperator As Boolean, _
    Remove_Close As Boolean)
    Dim hMenu As Long
    ' Get the form's system menu handle.
    hMenu = GetSystemMenu(FormName.hwnd, False)
    If Remove_Close Then DeleteMenu hMenu, 6, MF_BYPOSITION
    If Remove_Seperator Then DeleteMenu hMenu, 5, MF_BYPOSITION
    If Remove_Maximize Then DeleteMenu hMenu, 4, MF_BYPOSITION
    If Remove_Minimize Then DeleteMenu hMenu, 3, MF_BYPOSITION
    If Remove_Size Then DeleteMenu hMenu, 2, MF_BYPOSITION
    If Remove_Move Then DeleteMenu hMenu, 1, MF_BYPOSITION
    If Remove_Restore Then DeleteMenu hMenu, 0, MF_BYPOSITION
End Sub


Private Sub Form_Load()
    RemoveMenus Me, False, False, False, False, False, False, True
    'Remove Close Button
End Sub
'/You can even choose all those options
'     at the same time! Like:
'|RemoveMenus Me, True, True, True, True
'     , True, True, True
'
'/Remove the Restore Button:
'|RemoveMenus Me, True, False, False, Fa
'     lse, False, False, False
'/Remove Move a Form:
'|RemoveMenus Me, False, True, False, Fa
'     lse, False, False, false
'/Remove ...
'/ ...
'/Get it !?


