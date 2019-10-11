//http://www.basic4ppc.com/forum/basic4android-updates-questions/14722-joining-2-images.html

Sub NumberImage(Number1 As String) As Bitmap
    Dim bitmap0, bitmap1, bitmap2 As Bitmap
    Dim canvas1 As Canvas
    Dim num1, num2 As String
    Dim rect1, rect2 As Rect
    
    'Initialize canvas to ImageView
    bitmap0.InitializeMutable(80dip, 40dip)
    canvas1.Initialize2(bitmap0)
    
    If Number1.Length <> 2 Then
        Return
    End If
    
    'Split 2 digit number to 2 single strings to be used to load files
    num1 = Number1.CharAt(0)
    num2 = Number1.CharAt(1)
    
    'Load image representation on digits into bitmaps to be drawn by canvas
    bitmap1.Initialize(File.DirAssets, num1 & ".png")
    Log("Loaded " & num1 & ".png")
    bitmap2.Initialize(File.DirAssets, num2 & ".png")
    Log("Loaded " & num2 & ".png")
    
    'Create rect areas for the 2 different bitmaps
    rect1.Initialize(0, 0, 40dip, 40dip)
    rect2.Initialize(40, 0, 80dip, 40dip)
    
    'Draw Bitmaps onto ImageView
    canvas1.DrawBitmap(bitmap1, Null, rect1)
    canvas1.DrawBitmap(bitmap2, Null, rect2)
    
    Return bitmap0
End Sub