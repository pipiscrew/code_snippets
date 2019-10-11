Option Explicit

Private Declare Function MoveWindow Lib "user32" (ByVal hwnd As Long, ByVal x As Long, ByVal y As Long, ByVal nWidth As Long, ByVal nHeight As Long, ByVal bRepaint As Long) As Long

Private Sub Form_Load()
Dim i As Integer

    ' Make a bunch of ComboBox entries.
    For i = 1 To 50
        cboTestCombo.AddItem Format$(i)
    Next i
    cboTestCombo.ListIndex = 0

    ' Resie the ComboBox's dropdown area.
    SizeCombo Me, cboTestCombo
End Sub
' Resize a ComboBox's dropdown display area.
Public Sub SizeCombo(frm As Form, cbo As ComboBox)
Dim cbo_left As Integer
Dim cbo_top As Integer
Dim cbo_width As Integer
Dim cbo_height As Integer
Dim old_scale_mode As Integer

    ' Change the Scale Mode on the form to Pixels.
    old_scale_mode = frm.ScaleMode
    frm.ScaleMode = vbPixels

    ' Save the ComboBox's Left, Top, and Width values.
    cbo_left = cbo.Left
    cbo_top = cbo.Top
    cbo_width = cbo.Width

    ' Calculate the new height of the combo box.
    cbo_height = frm.ScaleHeight - cbo.Top - 5
    frm.ScaleMode = old_scale_mode

    ' Resize the combo box window.
    MoveWindow cbo.hwnd, cbo_left, cbo_top, _
        cbo_width, cbo_height, 1
End Sub

