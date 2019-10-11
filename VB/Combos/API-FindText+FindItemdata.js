'Gia to AutoComplete/FindInComboAPI
Private Declare Function SendMessage Lib "user32" Alias "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
'Gia to AutoComplete/FindInComboAPI

Public Function FindTextInComboAPI(ctl As ComboBox, ByVal SearchSTR As String) As Long
'Epistrefei to ListIndex toy Combo poy exei san List thn parametro me API omws (3x faster)
FindTextInComboAPI = SendMessage(ctl.hwnd, &H158, 0, ByVal SearchSTR)
End Function

'**********BUG DEN LEITOYRGEI KATEY8EIAN APO MS****************
Public Function FindItemDataInComboAPI(ctl As ComboBox, ItemD As Long) As Long
'Epistrefei to ListIndex toy Combo poy exei san itemdata thn parametro me API omws (3x faster)
FindTextInComboAPI = SendMessage(ctl.hwnd, &H150, ItemD, ByVal 0&)
End Function
'**********BUG DEN LEITOYRGEI KATEY8EIAN APO MS****************

Public Function FindInCombo(ctl As ComboBox, FindItem As Long) As Long
'Epistrefei to ListIndex toy Combo poy exei ItemData thn parametro
Dim C&

For C = 0 To ctl.ListCount
        If ctl.ItemData(C) = FindItem Then FindInCombo = C: Exit For
Next C

End Function


apla gia na 3eroyme ::
Const CB_FINDSTRINGEXACT = &H158        'search string completa into one  Combobox 
Const LB_FINDSTRINGEXACT = &H1 TO 2        'search string completa into one  Listbox 
Const CB_FINDSTRING = &H14C     'search string since  the starting  into one  Combobox 
Const LB_FINDSTRING = &H18F     'search string since  the starting  into one  Listbox