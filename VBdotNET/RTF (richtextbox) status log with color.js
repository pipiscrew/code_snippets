    Private Sub WriteStatus(ByVal statusTXT$, ByVal cColor As Color, Optional ByVal txtFont As Font = Nothing)

        If txtFont IsNot Nothing Then RichTextBox1.SelectionFont = txtFont ' New Font("Tahoma", 8, FontStyle.Bold)
        RichTextBox1.SelectionColor = cColor
        RichTextBox1.SelectedText = statusTXT & vbCrLf

    End Sub