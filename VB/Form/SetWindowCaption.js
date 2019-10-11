Public Declare Function SetWindowText Lib "user32" Alias "SetWindowTextA" (ByVal hwnd As Long, ByVal lpString As String) As Long

Public Function SetWindowCaption(FRM As Form, text As String) As Long
    SetWindowCaption = SetWindowText(FRM.hwnd, text)
End Function