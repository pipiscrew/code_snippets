'Gia ta C+ buttons
Private Declare Function SetWindowLong Lib "user32" Alias "SetWindowLongA" (ByVal hwnd As Long, ByVal nIndex As Long, ByVal dwNewLong As Long) As Long
Private Const BS_FLAT = &H8000&
Private Const GWL_STYLE = (-16)
Private Const WS_CHILD = &H40000000
Private Const WS_DISABLED = &H58018000
'Gia ta C+ buttons

Public Sub cButt(but As CommandButton)
    SetWindowLong but.hwnd, GWL_STYLE, WS_CHILD Or BS_FLAT
    but.Visible = True
    but.TabStop = True
End Sub

'kai sto form load
cButt SaveC