Option Explicit
Const CB_FINDSTRING = &H14C


Private Declare Function SendMessage Lib "user32" Alias "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long


Function AutoComplete(cbCombo As ComboBox, sKeyAscii As Integer, Optional bUpperCase As Boolean = True) As Integer
    Dim lngFind As Long, intPos As Integer, intLength As Integer
    Dim tStr As String


    With cbCombo

        If sKeyAscii = 27 Then Exit Function 'Escape

        If sKeyAscii = 8 Then
            If .SelStart = 0 Then Exit Function
            .SelStart = .SelStart - 1
            .SelLength = 32000
            .SelText = ""
        Else
            intPos = .SelStart '// save intial cursor position
            tStr = .Text '// save String


            If bUpperCase = True Then
                .SelText = UCase(Chr(sKeyAscii)) '// change string. (uppercase only)
            Else
                .SelText = UCase(Chr(sKeyAscii)) '// change string. (leave case alone)
            End If
        End If
        
        lngFind = SendMessage(.hwnd, CB_FINDSTRING, 0, ByVal .Text) '// Find string in combobox


        If lngFind = -1 Then '// if String Not found
'////ama 8eloyme na dexete kai NEW VALUES
'            .Text = tStr '// Set old String (used For boxes that require charachter monitoring
'            .SelStart = intPos '// Set cursor position
'            .SelLength = (Len(.Text) - intPos) '// Set selected length
'            AutoComplete = 0 '// return 0 value to KeyAscii
'            Exit Function
'////ama 8eloyme na dexete kai NEW VALUES

        Else '// If String found
            intPos = .SelStart '// save cursor position
            intLength = Len(.List(lngFind)) - Len(.Text) '// save remaining highlighted text length
            .SelText = .SelText & Right(.List(lngFind), intLength) '// change new text in String
            '.Text = .List(lngFind)'// Use this inst
            '     ead of the above .Seltext line to set th
            '     e text typed to the exact case of the it
            '     em selected in the combo box.
            .SelStart = intPos '// Set cursor position
            .SelLength = intLength '// Set selected length
        End If
    End With
    
End Function

Private Sub Combo1_KeyPress(KeyAscii As Integer)
KeyAscii = AutoComplete(Combo1, KeyAscii)
End Sub

