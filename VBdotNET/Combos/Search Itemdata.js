    Private Function SearchComboID(ByVal id%, ByVal comboName As ComboBox) As Integer
        Dim t%

        For t = 0 To comboName.Items.Count - 1
            If id = comboName.Items(t).itemdata Then
                Return t
            End If
        Next

        Return 0
    End Function