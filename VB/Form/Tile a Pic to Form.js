Private Sub PictureTile(Frm As Form, Pic As PictureBox) 
    Dim i As Integer
    Dim t As Integer
    Frm.AutoRedraw = True
    Pic.BorderStyle = 0


    For t = 0 To Frm.Height Step Pic.ScaleHeight


        For i = 0 To Frm.Width Step Pic.ScaleWidth
            Frm.PaintPicture Pic.Picture, i, t
        Next i
    Next t
End Sub
