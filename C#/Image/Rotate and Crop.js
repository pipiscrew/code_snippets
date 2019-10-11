//just execute
pictureBox2.Image.RotateFlip(RotateFlipType.Rotate90FlipNone);



///no needed?
//http://www.switchonthecode.com/tutorials/csharp-tutorial-image-editing-rotate

pictureBox2.Image = rotateImage(bmp, rotateAngle);



        private Bitmap rotateImage(Bitmap b, float angle)
        {
            //create a new empty bitmap to hold rotated image
            Bitmap returnBitmap = new Bitmap(b.Width, b.Height);
            //make a graphics object from the empty bitmap
            Graphics g = Graphics.FromImage(returnBitmap);
            //move rotation point to center of image
            g.TranslateTransform((float)b.Width / 2, (float)b.Height / 2);
            //rotate
            g.RotateTransform(angle);
            //move image back
            g.TranslateTransform(-(float)b.Width / 2, -(float)b.Height / 2);
            //draw passed in image onto graphics object
            g.DrawImage(b, new Point(0, 0));
            return returnBitmap;
        }
        
        
//rotate completely with SetResolution
http://www.codeproject.com/Articles/58815/C-Image-PictureBox-Rotations




//crop http://www.switchonthecode.com/tutorials/csharp-tutorial-image-editing-saving-cropping-and-resizing
private static Image cropImage(Image img, Rectangle cropArea)
{
   Bitmap bmpImage = new Bitmap(img);
   Bitmap bmpCrop = bmpImage.Clone(cropArea,
   bmpImage.PixelFormat);
   return (Image)(bmpCrop);
}