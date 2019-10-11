//http://www.codeproject.com/Articles/15460/C-Image-to-Byte-Array-and-Byte-Array-to-Image-Conv

public byte[] imageToByteArray(System.Drawing.Image imageIn)
{
 MemoryStream ms = new MemoryStream();
 imageIn.Save(ms,System.Drawing.Imaging.ImageFormat.Gif);
 return  ms.ToArray();
}

public Image byteArrayToImage(byte[] byteArrayIn)
{
     MemoryStream ms = new MemoryStream(byteArrayIn);
     Image returnImage = Image.FromStream(ms);
     return returnImage;
}

