    public static byte[] StreamToByteArray(Stream stream)
    {
        if (stream is MemoryStream)
        {
            return ((MemoryStream)stream).ToArray();                
        }
        else
        {
            // Jon Skeet's accepted answer 
            return ReadFully(stream);
        }
    }

