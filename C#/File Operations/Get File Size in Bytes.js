long length = new System.IO.FileInfo(path).Length;

//or

        private long GetFileSizeBytes(string filepath)
        {
            System.IO.FileInfo fi = new System.IO.FileInfo(filepath);
            return fi.Length;
        }
