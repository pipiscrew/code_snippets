Public Declare Function SendMessage Lib "user32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
Public Const EM_UNDO = &HC7

'// undoes the last action on a textbox
Public Sub UndoTextBoxAction(hWnd As Long)
    SendMessage hWnd, EM_UNDO, 0, 0
End Sub


and check with::

Public Declare Function SendMessage Lib "user32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
Public Const EM_CANUNDO = &HC6

'// returns whether there is any data in the undo/redo buffer
Public Function CanUndoTextBoxAction(hWnd As Long) As Boolean
    Dim retval As Long
    
    If SendMessage(hWnd, EM_CANUNDO, 0, 0) Then CanUndoTextBoxAction = True
End Function


'// empties the buffer used to undo/redo changes to textboxes
Public Sub EmptyTextBoxBuffer(hWnd As Long)
    SendMessage hWnd, EM_EMPTYUNDOBUFFER, 0, 0
End Sub