Private Sub btnSavePicture_Click(ByVal sender As _
    System.Object, ByVal e As System.EventArgs) Handles _
    btnSavePicture.Click
    ' Compose the picture's base file name.
    Dim file_name As String = Application.ExecutablePath
    file_name = file_name.Substring(0, _
        file_name.LastIndexOf("\bin")) & _
        "\test."

    ' Get a Bitmap.
    Dim bm As Bitmap = picImage.Image

    ' Save the picture as a bitmap, JPEG, and GIF.
    bm.Save(file_name & "bmp", _
        System.Drawing.Imaging.ImageFormat.Bmp)
    bm.Save(file_name & "jpg", _
        System.Drawing.Imaging.ImageFormat.Jpeg)
    bm.Save(file_name & "gif", _
        System.Drawing.Imaging.ImageFormat.Gif)

    MsgBox("Ok")
End Sub