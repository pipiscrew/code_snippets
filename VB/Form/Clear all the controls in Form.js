Public Function fnClearScr(frmObj As Form) As Boolean
    'To clear the object
    On Error GoTo LOCALERRORHANDLER
    '------------------------------------------
    'To clear the Text box flxgrid form as parameter
    '------------------------------------------
    Dim objCLR
    For Each objCLR In frmObj
        '-----------------------------------------
        'If Text Box/Combo Box/Masked Edit Control/List Box
        '-----------------------------------------
        If TypeOf objCLR Is TextBox Or _
                TypeOf objCLR Is ComboBox Or _
                TypeOf objCLR Is MaskEdBox Then
            'To clear Text Box Combo
            objCLR.Text = ""
        '-----------------------------------------
        'If Grid Control
        '-----------------------------------------
        ElseIf TypeOf objCLR Is MSFlexGrid Then
            objCLR.Clear
        '-----------------------------------------
        'If Label
        '-----------------------------------------
        ElseIf objCLR.Name = Label Then
            objCLR.Caption = ""
        End If
    Next
    Exit Function
LOCALERRORHANDLER:
End Function