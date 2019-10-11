Private Sub Command1_Click()
Tile Me, picTile
End Sub

Public Sub Tile(TileObject As Object, _
                 TilePicture As StdPicture)
Dim max_images_width
Dim max_images_height
Dim I           As Integer
Dim ImageTop    As Single
Dim ImageLeft   As Single
Dim ImageWidth  As Single
Dim ImageHeight As Single
Dim PicHolder   As Picture
    On Error GoTo Cancel
    Set PicHolder = TilePicture
    ImageWidth = TileObject.ScaleX(PicHolder.Width, vbHimetric, TileObject.ScaleMode)
    ImageHeight = TileObject.ScaleY(PicHolder.Height, vbHimetric, TileObject.ScaleMode)
    max_images_width = TileObject.ScaleWidth \ ImageWidth
    max_images_height = TileObject.ScaleHeight \ ImageHeight
   ' TileObject.AutoRedraw = True
    For I = 1 To max_images_height + 1
        For X = 0 To max_images_width
            TileObject.PaintPicture PicHolder, ImageLeft, ImageTop, ImageWidth, ImageHeight
            ImageLeft = ImageLeft + ImageWidth
        Next X
        ImageLeft = 0
        ImageTop = ImageTop + ImageHeight
    Next I
Cancel:
End Sub
