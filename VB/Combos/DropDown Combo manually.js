Public Declare Function SendMessageLong Lib "user32" Alias "SendMessageA" _ 
    (ByVal hwnd As Long, _ 
     ByVal wMsg As Long, _ 
     ByVal wParam As Long, _ 
     ByVal lParam As Long) As Long
Public Const CB_SHOWDROPDOWN = &H14F


Sub Form_Load()
	Combo1.Additem "Item 1"
	Combo1.Additem "Item 2"
	Combo1.Additem "Item 3" 
End Sub 

Private Sub Command1_Click()    'label this button Show List
	Dim r as Long
	r = SendMessageLong(Combo1.hWnd, CB_SHOWDROPDOWN, True, 0)
End Sub 

Private Sub Command2_Click()    'label this button Hide List
	Dim r as Long
	r = SendMessageLong(Combo1.hWnd, CB_SHOWDROPDOWN, False, 0)
End Sub 
