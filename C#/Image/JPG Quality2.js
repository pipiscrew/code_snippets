        public Saver(string path, Image val)
        {
            // https://stackoverflow.com/a/39493346
            // https://docs.microsoft.com/en-us/dotnet/framework/winforms/advanced/how-to-set-jpeg-compression-level
            
            using (EncoderParameters encoderParameters = new EncoderParameters(1))
            using (EncoderParameter encoderParameter = new EncoderParameter(System.Drawing.Imaging.Encoder.Quality, 65L))
            {
                ImageCodecInfo codecInfo = ImageCodecInfo.GetImageDecoders().First(codec => codec.FormatID == ImageFormat.Jpeg.Guid);
                encoderParameters.Param[0] = encoderParameter;
                val.Save(path + DateTime.Now.ToString("yyyyMMddHHmmss") + ".jpg", codecInfo, encoderParameters);
            }
        }