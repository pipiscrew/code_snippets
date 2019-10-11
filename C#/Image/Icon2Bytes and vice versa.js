//http://social.msdn.microsoft.com/Forums/en-US/csharpgeneral/thread/1551fd3b-02b6-4479-852a-dfea4b610c35
//http://stackoverflow.com/questions/3257877/c-net-convert-icon-to-byte-and-back-again

public static byte[] IconToBytes(Icon icon)
{
    using (MemoryStream ms = new MemoryStream())
    {
        icon.Save(ms);
        return ms.ToArray();
    }
}

public static Icon BytesToIcon(byte[] bytes)
{
    using (MemoryStream ms = new MemoryStream(bytes))
    {
        return new Icon(ms);
    }
}

//////////////

private byte[] GetBytes( Icon icon )
{
    MemoryStream ms = new MemoryStream();
    icon.Save( ms );
    return ms.ToArray();
}
And:

Bitmap bmpIcon = icon.ToBitmap();

using (System.IO.MemoryStream ms = new System.IO.MemoryStream())
{
    bmpIcon.Save(ms, System.Drawing.Imaging.ImageFormat.Bmp);        
    return ms.ToArray();
}