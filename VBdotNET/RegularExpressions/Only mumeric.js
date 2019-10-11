        Dim reg_exp As New Regex("[^0-9]")
        txtTel1.Text = reg_exp.Replace(txtTel1.Text, "")
        txtTel2.Text = reg_exp.Replace(txtTel2.Text, "")
        txtMobile.Text = reg_exp.Replace(txtMobile.Text, "")