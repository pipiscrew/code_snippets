'http://focuswindows.blogspot.com/2008/02/interconvert-byte-and-string-and-stream.html

        /// because Base64 store one char in 64 digits. 
        /// But the Base64 char is hard to recognized compared with the ASCII encode.
        /// </summary>
        /// <param name="buffer"></param>
        /// <returns></returns>
        public string ConvertBytesToBase64String(byte[] buffer)
        {
            return Convert.ToBase64String(buffer);
        }


        /// <summary>
        /// 将一个Base64String转换成Byte[]
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public byte[] ConvertBase64StringToBytes(string str)
        {
            return Convert.FromBase64String(str);
        }

 

        /// <summary>
        /// 将Stream转换为String
        /// </summary>
        /// <param name="ms"></param>
        /// <returns></returns>
        public string ConvertStreamIntoString(Stream ms)
        {
            //使用StreamReader应该是读取Stream最简单的方法
            System.IO.StreamReader reader = new StreamReader(ms);
            ms.Position = 0;
            return reader.ReadToEnd();
        }
        
        
        /// <summary>
        /// 将string转换成stream
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public MemoryStream ConvertStringToMemoryStream(string str)
        {
            MemoryStream ms=new MemoryStream() ;
            //使用一个StreamWriter来将str写到一个MemoryStream
            using (StreamWriter writer = new StreamWriter(ms))
            {
                writer.Write(str);
                writer.Flush();
            }
            return ms;
        }