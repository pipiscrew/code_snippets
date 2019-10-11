        Dim img As System.Drawing.Image
        Dim g As System.Drawing.Graphics
        Dim Brush As New SolidBrush(Color.Red)
        Dim f0ntFamily As FontFamily = New FontFamily("Tahoma")
        Dim f As Font = New Font(f0ntFamily, 8, FontStyle.Bold)

        img = System.Drawing.Image.FromFile("C:\1.png")
        g = System.Drawing.Graphics.FromImage(img)
        'g.DrawLine(Pens.Red, 1, 1, 1, 10)
        g.DrawRectangle(Pens.Red, 1, 1, 10, 10)
        g.DrawString("5", f, Brush, 1, 0)
        'ImageList1.Images.Add(img)

        PictureBox1.Image = ImageList1.Images(0)
        
        
        
'-- OTHER - Load a picture from file > draw string > give it to picturebox

       Dim img As System.Drawing.Image
        Dim g As System.Drawing.Graphics
        img = System.Drawing.Image.FromFile("C:\test.bmp")
        g = System.Drawing.Graphics.FromImage(img)
        g.DrawRectangle(Pens.Red, 1, 1, 10, 10)
        PictureBox1.Image = img