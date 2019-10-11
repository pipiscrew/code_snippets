        private MemoryStream CreateMemoryStream(string filePath)
        {
            //Step1: read whole FileStream into byte array.
            byte[] buffer = System.IO.File.ReadAllBytes(filePath);
            //Step2:convert byte array into MemoryStream.  
            MemoryStream ms1 = new MemoryStream(buffer);
            return ms1;
        }