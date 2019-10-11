        Dim ci As New Globalization.CultureInfo("en-US")

        txtDate.Text = Now.ToString("MMMM %d yyyy", ci)