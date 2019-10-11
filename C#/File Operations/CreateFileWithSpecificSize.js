//https://gist.github.com/hanssens/8112826

        /// <summary>
        /// Creates a file with a specific size.
        /// </summary>
        /// <param name="outputFilePath">The full output path for the file. Overwrites if exists.</param>
        /// <param name="length">Filesize in bytes</param>
        static void CreateFileWithSpecificSize(string outputFilePath, long length)
        {
            using (var stream = new FileStream(outputFilePath, FileMode.Create, FileAccess.Write, FileShare.None))
            {
                stream.SetLength(length);
            }
        }