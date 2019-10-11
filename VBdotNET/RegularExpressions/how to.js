 Dim reg_exp As New Regex("""USD.......")
        txtout = reg_exp.Replace(txtout, "")

        reg_exp = New Regex(",.*")
        txtout = reg_exp.Replace(txtout, "")