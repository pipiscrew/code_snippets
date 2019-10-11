Private Sub Form_Paint()
    TileBitmap Form1, Picture1
End Sub

Public Function TileBitmap(ByVal theForm As Form, ByVal theBitmap As PictureBox)
    Dim iAcross As Integer
    Dim iDown As Integer
    theBitmap.AutoSize = True


    For iDown = 0 To (theForm.Width \ theBitmap.Width) + 1


        For iAcross = 0 To (theForm.Height \ theBitmap.Height) + 1
            theForm.PaintPicture theBitmap.Picture, iDown * theBitmap.Width, iAcross * theBitmap.Height, theBitmap.Width, theBitmap.Height
        Next iAcross, iDown
End Function
