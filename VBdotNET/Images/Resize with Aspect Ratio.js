'source 
'http://snippets.dzone.com/posts/show/1485

public static byte[] ResizeImageFile(byte[] imageFile, int targetSize)
{
    Image original = Image.FromStream(new MemoryStream(imageFile));
    int targetH, targetW;
    if (original.Height > original.Width)
    {
        targetH = targetSize;
        targetW = (int)(original.Width * ((float)targetSize / (float)original.Height));
    }
    else
    {
        targetW = targetSize;
        targetH = (int)(original.Height * ((float)targetSize / (float)original.Width));
    }
    Image imgPhoto = Image.FromStream(new MemoryStream(imageFile));
    // Create a new blank canvas.  The resized image will be drawn on this canvas.
    Bitmap bmPhoto = new Bitmap(targetW, targetH, PixelFormat.Format24bppRgb);
    bmPhoto.SetResolution(72, 72);
    Graphics grPhoto = Graphics.FromImage(bmPhoto);
    grPhoto.SmoothingMode = SmoothingMode.AntiAlias;
    grPhoto.InterpolationMode = InterpolationMode.HighQualityBicubic;
    grPhoto.PixelOffsetMode = PixelOffsetMode.HighQuality;
    grPhoto.DrawImage(imgPhoto, new Rectangle(0, 0, targetW, targetH), 0, 0, original.Width, original.Height, GraphicsUnit.Pixel);
    // Save out to memory and then to a file.  We dispose of all objects to make sure the files don't stay locked.
    MemoryStream mm = new MemoryStream();
    bmPhoto.Save(mm, System.Drawing.Imaging.ImageFormat.Jpeg);
    original.Dispose();
    imgPhoto.Dispose();
    bmPhoto.Dispose();
    grPhoto.Dispose();
    return mm.GetBuffer();
}