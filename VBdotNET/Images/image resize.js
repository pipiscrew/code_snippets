'source @:
'http://www.vb-helper.com/howto_net_image_resize.html

Private Sub btnScale_Click(ByVal sender As System.Object, _
    ByVal e As System.EventArgs) Handles btnScale.Click
    ' Get the scale factor.
    Dim scale_factor As Single = Single.Parse(txtScale.Text)

    ' Get the source bitmap.
    Dim bm_source As New Bitmap(picSource.Image)

    ' Make a bitmap for the result.
    Dim bm_dest As New Bitmap( _
        CInt(bm_source.Width * scale_factor), _
        CInt(bm_source.Height * scale_factor))

    ' Make a Graphics object for the result Bitmap.
    Dim gr_dest As Graphics = Graphics.FromImage(bm_dest)

    ' Copy the source image into the destination bitmap.
    gr_dest.DrawImage(bm_source, 0, 0, _
        bm_dest.Width + 1, _
        bm_dest.Height + 1)

    ' Display the result.
    picDest.Image = bm_dest
End Sub


'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                Dim newH% = 0

                Dim bm_source As New Bitmap(tmp)

                If bm_source.Width > 200 Then
                    newH = CInt(200 / (bm_source.Width / bm_source.Height))

                    Dim bm_dest As New Bitmap(CInt(200), CInt(newH))
                    Dim gr_dest As Graphics = Graphics.FromImage(bm_dest)

                    gr_dest.DrawImage(bm_source, 0, 0, _
                        bm_dest.Width + 1, _
                        bm_dest.Height + 1)

                    PictureBox1.Image = bm_dest
                    'bm_source.Dispose()
                    'bm_dest.Dispose()
                    'gr_dest.Dispose()
                Else
                    bm_source.Dispose()
                    PictureBox1.Image = Image.FromFile(tmp)
                End If