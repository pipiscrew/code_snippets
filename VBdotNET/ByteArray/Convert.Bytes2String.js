        Dim data As Byte() = New Byte() {&H48, &H45, &H4C, &H4C, &H4F, &H21}

        Dim message As String = Encoding.ASCII.GetString(data, 0, data.Length)

        MessageBox.Show(message)



'den paizei rolo ean einai HEX or NOT