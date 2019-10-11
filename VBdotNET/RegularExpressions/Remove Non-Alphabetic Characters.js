

        Dim reg_exp As New Regex("[^A-Za-z\n\r]")
        Txt.Text = reg_exp.Replace(Txt.Text, "")

        MsgBox(Txt.Text)