//http://msdn.microsoft.com/en-us/library/bb882583.aspx

                if (tmpFR == ImageFormat.Jpeg)
                {
                    frmSlider tmp = new frmSlider();
                    tmp.ShowDialog();

                    EncoderParameters ep = new EncoderParameters();
                    ep.Param[0] = new EncoderParameter(System.Drawing.Imaging.Encoder.Quality, (long)General.JPGcompression);
                    picBOX.Image.Save(saveFileDialog1.FileName, GetEncoder(ImageFormat.Jpeg), ep);
                 }  
                    
                    
        private ImageCodecInfo GetEncoder(ImageFormat format)
        {

            ImageCodecInfo[] codecs = ImageCodecInfo.GetImageDecoders();

            foreach (ImageCodecInfo codec in codecs)
            {
                if (codec.FormatID == format.Guid)
                {
                    return codec;
                }
            }
            return null;

        }