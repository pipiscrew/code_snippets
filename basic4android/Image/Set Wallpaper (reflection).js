//http://www.basic4ppc.com/forum/basic4android-updates-questions/12418-saving-image-imageview.html
//Copy image to SD and do Set As Wallpaper

Sub copysd_click
    Dim out As OutputStream
    out = File.OpenOutput(File.DirRootExternal, "photo.jpg", False)
    fotka.WriteToStream(out,100,"JPEG")
    out.Close
    ToastMessageShow("Photo.jpg saved to root folder.",False)
    
    
End Sub
Sub setas_click
    SetWallPaper(fotka)
    
End Sub
Sub SetWallPaper(Bmp As Bitmap)
    Dim r As Reflector
    r.Target = r.RunStaticMethod("android.app.WallpaperManager", "getInstance", _
        Array As Object(r.GetContext), Array As String("android.content.Context"))
    r.RunMethod4("setBitmap", Array As Object(Bmp), Array As String("android.graphics.Bitmap"))
    ToastMessageShow("Wallpaper added successfully.",False)
End Sub