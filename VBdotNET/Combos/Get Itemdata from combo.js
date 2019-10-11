    Private Function GetIDfromCOMBO(ByVal comboName As ComboBox) As String
        Return IIf(comboName.SelectedItem.ITEMDATA = 0, "NULL", comboName.SelectedItem.ITEMDATA)
    End Function