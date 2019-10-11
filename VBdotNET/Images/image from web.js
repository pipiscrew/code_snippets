        Dim objImage As MemoryStream
        Dim objwebClient As New WebClient

        objImage = New MemoryStream(objwebClient.DownloadData(titlesGRID.Rows(0).Cells(1).Value.ToString))
        PictureBox1.Image = Image.FromStream(objImage)