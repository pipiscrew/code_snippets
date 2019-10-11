        Dim tmpURL$


        'tmpURL = Replace(TextBox1.Text, vbCrLf, "")
        tmpURL = RemoveUnwantedHTMLtxt(TextBox1.Text)

        Dim bytes(1200) As Byte
        bytes = System.Text.Encoding.ASCII.GetBytes(tmpURL.ToUpper)
        tmpURL = System.Text.Encoding.ASCII.GetString(bytes)