            Dim reg_exp As New Regex("[^A-Za-z0-9]")
            TextBox3.Text = reg_exp.Replace(TextBox3.Text, "")


ONLY allowing alphanumeric characters and the underscore '_' and dash '-' characters.
            Dim reg_exp As New Regex("[^\w-]+")
            TextBox3.Text = reg_exp.Replace(TextBox3.Text, "")
