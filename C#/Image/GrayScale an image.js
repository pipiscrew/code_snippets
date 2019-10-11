        #region " GRAYSCALE "

        private void toolStripGrayScale_Click(object sender, EventArgs e)
        {
            try
            {
                picBOX.MAkeUNDO();
                picBOX.Image = ToGrayscale();
            }
            catch { }
        }

        public Image ToGrayscale()
        {
   
                Image img = picBOX.Image;
                Bitmap image = new Bitmap(img.Width, img.Height, getPixelFormatNI(img));
                if ((img.HorizontalResolution > 0f) && (img.VerticalResolution > 0f))
                {
                    image.SetResolution(img.HorizontalResolution, img.VerticalResolution);
                }
                Graphics graphics = Graphics.FromImage(image);
                float[][] newColorMatrix = new float[5][];
                newColorMatrix[0] = new float[] { 0.3f, 0.3f, 0.3f, 0f, 0f };
                newColorMatrix[1] = new float[] { 0.59f, 0.59f, 0.59f, 0f, 0f };
                newColorMatrix[2] = new float[] { 0.11f, 0.11f, 0.11f, 0f, 0f };
                float[] numArray2 = new float[5];
                numArray2[3] = 1f;
                newColorMatrix[3] = numArray2;
                float[] numArray3 = new float[5];
                numArray3[4] = 1f;
                newColorMatrix[4] = numArray3;
                ColorMatrix matrix = new ColorMatrix(newColorMatrix);
                ImageAttributes imageAttr = new ImageAttributes();
                imageAttr.SetColorMatrix(matrix);
                graphics.DrawImage(img, new Rectangle(0, 0, img.Width, img.Height), 0, 0, img.Width, img.Height, GraphicsUnit.Pixel, imageAttr);
                img.Dispose();
                graphics.Dispose();
                return image;
    
        }

        public static PixelFormat getPixelFormatNI(Image img)
        {
            if ((((img.PixelFormat != PixelFormat.Undefined) && (img.PixelFormat != PixelFormat.Format1bppIndexed)) && ((img.PixelFormat != PixelFormat.Format4bppIndexed) && (img.PixelFormat != PixelFormat.Format8bppIndexed))) && (img.PixelFormat != PixelFormat.Indexed))
            {
                return img.PixelFormat;
            }
            return PixelFormat.Format24bppRgb;
        }

        #endregion 



