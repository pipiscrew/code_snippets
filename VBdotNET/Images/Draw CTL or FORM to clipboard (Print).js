        Dim Bmp As New Bitmap(800, 400)

        Bmp.SetResolution(100, 100)
        Dim g As Graphics = Graphics.FromImage(Bmp)
        g.Clear(Color.White)


        Me.DrawToBitmap(Bmp, New Rectangle(New Point(0, 0), Bmp.Size))
        'DataGridView1.DrawToBitmap(Bmp, New Rectangle(New Point(0, 0), Bmp.Size))
        'GraphCtrl.DrawGraph(g, New Rectangle(New Point(0, 0), Bmp.Size))

        Clipboard.SetImage(Bmp)
        MessageBox.Show("Graph copied to the Clipboard!")