'**************************************
' Name: Tiled backgrounds on an MDI pare
'     nt form? Yep!
' Description:
This code, which was inspired by a similar snippet of code by Ian Ippolito, permits tiling an image onto an MDI parent form's background. Getting an image onto an MDI parent is easy. Getting a tiled one is another story. We could try using a Clipboard operation, or build a big tiled background and save it and Then laod it into the MDI parent's Picture property, but these are nasty, anal-retentive, and likely to simply not work. This code, however, works...
' By: Tom Honaker
'
' Inputs:
Three inputs are required in the actual Sub call:
MDIForm:The name of the MDI parent form To tile an image onto.
bkgdtiler: The name of a form that is used To generate the tiled background. Check the rest of the docs for the -required- parameters. 
bkgdfile: The image file To load, With complete path.
The best place To put the call I find is in the form's Form_Load() event.
'
' Returns:
Nothing returned.
'
' Assumes:
To use this code, you'll need to create a conventional (not an MDI parent or child) form and place PictureBox control on the form. Set the PictureBox's Name to Picture1, AutoRedraw, AutoSize, and ClipControls properties to TRUE, and its Visible Property to FALSE. 
The form also has certain requiRements. Set its AutoRedraw and ClipControls properties to TRUE, its ControlBox and Visible properties to FALSE, Remove its Caption, and set its BorderStyle Property to 0 - None. When you call the sub, you'll be passing the form's name to the sub. The sub loads the form, tiles it, transfers the results to the MDI parent, and unloads the form.


Do Not use this form for anything Else as it's not kept in memory.
'
' Side Effects:
Larger forms (read: INSANELY large forms) might take some time To refresh on slow systems. Also, very small images take noticeably longer to tile than larger ones, so aim for about 125x125 pixel sizes for the tilable images.
Finally, although this code can use GIFs, interlaced GIFs tend To produce a single-pixel horizontal banding effect. So convert 'em to non-interlaced, etc.
Also, this does Not work On forms other than MDI parent forms. I've submitted the non-MDI version of this code To this same location and this is the one for non-MDI-parent forms.
'
'This code is copyrighted and has
' limited warranties.Please see http://w
'     ww.Planet-Source-Code.com/vb/scripts/Sho
'     wCode.asp?txtCodeId=894&lngWId=1
'for details.
'**************************************



Sub TileMDIBkgd(MDIForm As Form, bkgdtiler As Form, bkgdfile As String)
    If bkgdfile = "" Then Exit Sub
    Dim ScWidth%, ScHeight%
    ScWidth% = Screen.Width / Screen.TwipsPerPixelX
    ScHeight% = Screen.Height / Screen.TwipsPerPixelY
    Load bkgdtiler
    bkgdtiler.Height = Screen.Height
    bkgdtiler.Width = Screen.Width
    bkgdtiler.ScaleMode = 3
    bkgdtiler!Picture1.Top = 0
    bkgdtiler!Picture1.Left = 0
    bkgdtiler!Picture1.Picture = LoadPicture(bkgdfile)
    bkgdtiler!Picture1.ScaleMode = 3


    For n% = 0 To ScHeight% Step bkgdtiler!Picture1.ScaleHeight


        For o% = 0 To ScWidth% Step bkgdtiler!Picture1.ScaleWidth
            bkgdtiler.PaintPicture bkgdtiler!Picture1.Picture, o%, n%
        Next o%
    Next n%
    MDIForm.Picture = bkgdtiler.Image
    Unload bkgdtiler
End Sub
