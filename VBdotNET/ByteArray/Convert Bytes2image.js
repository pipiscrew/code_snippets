            Dim ms As IO.MemoryStream = New IO.MemoryStream(nodeAttachments.attachmentScreenshot, 0, nodeAttachments.attachmentScreenshot.Length)
            Dim im As Image = Image.FromStream(ms)
            frm.PictureBox1.Image = im