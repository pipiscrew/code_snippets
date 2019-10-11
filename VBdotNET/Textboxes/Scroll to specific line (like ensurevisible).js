        Dim pos1%

        pos1 = InStr(txtResults.SelectionStart + 1, txtResults.Text, "Ticket")

        If pos1 = 0 Then Exit Sub
        txtResults.SelectionStart = pos1
        txtResults.ScrollToCaret()