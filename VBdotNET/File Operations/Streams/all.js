'http://focuswindows.blogspot.com/2008/02/convert-filestream-fromto-memorystream.html

        /// <summary>
        ///  Convert one MemoryStream object into FileStream Object.
        ///  Performance:
        ///    This method has the highest performance. 
        ///    This method can used largely. It is also suited for convert other kind Stream into FileStream.
        /// </summary>
        /// <param name="ms"></param>
        /// <param name="newFilePath"></param>
        public void ConvertMemoryStreamToFileStream_1(MemoryStream ms, String newFilePath)
        {
            using (FileStream fs = File.OpenWrite(newFilePath))
            {
                const int blockSize = 1024;
                byte[] buffer = new byte[blockSize];
                int numBytes;
                while ((numBytes = ms.Read(buffer, 0, blockSize)) > 0)
                {
                    fs.Write(buffer, 0, numBytes);
                }
            }
        }



        /// <summary>
        /// Convert one MemoryStream object into FileStream Object.
        /// The method is so simple. but only MemoryStream has method WriteTo(Stream anotherStream)
        /// Performance: 
        ///   This method performace is worse than ConvertMemoryStreamToFileStream_1()
        /// </summary>
        /// <param name="ms"></param>
        /// <param name="newFilePath"></param>
        public void ConvertMemoryStreamToFileStream_2(MemoryStream ms, String newFilePath)
        {
            using (FileStream fs = File.OpenWrite(newFilePath))
            {
                ms.WriteTo(fs);
            }
        }



        /// <summary>
        /// Convert one MemoryStream object into FileStream Object.
        /// Performace:
        ///     This method is the less effectively. 
        ///     Because it have to allocate a great deal of memory to accommodate the whole MemoryStream all at once.
        /// </summary>
        /// <param name="filePath"></param>
        /// <returns></returns>
        public void ConvertMemoryStreamToFileStream_3(MemoryStream ms, String newFilePath)
        {
            // Allocate a large memory at first.
            byte[] buffer = new byte[ms.Length];
            ms.Read(buffer, 0, (int)ms.Length);

            using (FileStream fs = File.OpenWrite(newFilePath))
            {
                fs.Write(buffer, 0, (int)ms.Length);
            }
        }


        /// <summary>
        /// Create one MemoryStream object. 
        /// The result is not expanable MemoryStream. 
        /// Performance: 
        ///     Create one MemoryStream object is fastest. 
        ///     But read bytes from unexpansble memoryStream will consume more time. I do not know the reason.
        /// </summary>
        /// <param name="filePath"></param>
        /// <returns></returns>
        public MemoryStream CreateMemoryStream_1(string filePath)
        {
            //Step1: read whole FileStream into byte array.
            byte[] buffer = System.IO.File.ReadAllBytes(filePath);


            //Step2:convert byte array into MemoryStream.  
            MemoryStream ms1 = new MemoryStream(buffer);
            return ms1;
        }



        /// <summary>
        /// Create one MemoryStream object. 
        /// The result is not expanable MemoryStream. 
        /// Performace:
        ///    Create one MemoryStream object is slower
        ///    But read bytes from expansble memoryStream will consume less time. I do not know the reason.
        /// </summary>
        /// <param name="filePath"></param>
        /// <returns></returns>
        public MemoryStream CreateMemoryStream_2(string filePath)
        {
            int blockSize = 1024;
            int bytesNum;
            byte[] buffer = new byte[blockSize];
            MemoryStream ms = new MemoryStream();
            using (FileStream fs = new FileStream(filePath, FileMode.Open))
            {
                while ((bytesNum = fs.Read(buffer, 0, blockSize)) > 0)
                {
                    ms.Write(buffer, 0, bytesNum);
                }
            }
            return ms;
        }


        private void btnTest_Click(object sender, EventArgs e)
        {
            const string SourceFile = @"c:\Launch.wmv";
            const string NewFile1 = @"c:\1.wmv";
            const string NewFile2 = @"c:\2.wmv";
            const string NewFile3 = @"c:\3.wmv";
            if (File.Exists(NewFile1))
                File.Delete(NewFile1);
            if (File.Exists(NewFile2))
                File.Delete(NewFile2);
            if (File.Exists(NewFile3))
                File.Delete(NewFile3);

            textBox1.Clear() ;
            Application.DoEvents();
            MemoryStream ms = null;
            try
            {

                System.Diagnostics.Stopwatch sw = new Stopwatch();
                sw.Start();
                ms = CreateMemoryStream_2(SourceFile);
                if (ms != null)
                {
                    sw.Stop();               
                    textBox1.AppendText(sw.ElapsedMilliseconds.ToString() + "--CreateMemoryStream_2"); 
                    textBox1.AppendText(Environment.NewLine);

                    sw.Reset();
                    sw.Start();
                    ConvertMemoryStreamToFileStream_1(ms, NewFile1);
                    
                    sw.Stop();
                    textBox1.AppendText( sw.ElapsedMilliseconds.ToString() + "--ConvertMemoryStreamToFileStream_1");
                    textBox1.AppendText(Environment.NewLine);

                    sw.Reset();
                    sw.Start();
                    ConvertMemoryStreamToFileStream_2(ms, NewFile2);
                    sw.Stop();
                    textBox1.AppendText( sw.ElapsedMilliseconds.ToString() + "--ConvertMemoryStreamToFileStream_2");
                    textBox1.AppendText(Environment.NewLine);

                    sw.Reset();
                    sw.Start();
                    ConvertMemoryStreamToFileStream_3(ms, NewFile3);
                    sw.Stop();
                    textBox1.AppendText( sw.ElapsedMilliseconds.ToString() + "--ConvertMemoryStreamToFileStream_3");
                    textBox1.AppendText(Environment.NewLine);
                }
            }
            finally
            {
                if (ms != null)
                    ms.Close();
            }
        }
    }