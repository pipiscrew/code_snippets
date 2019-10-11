//http://www.yoda.arachsys.com/csharp/readbinary.html

// Bad code! Do not use!
FileStream fs = File.OpenRead(filename);
byte[] data = new byte[fs.Length];
fs.Read (data, 0, data.Length);
// the FileStream could be reading just the first
10 bytes of the file into the buffer. The Read method is only guaranteed to block until some data is available (or the end of the stream is reached), not until all of the data is available

#1
/// <param name="data">The array to write bytes into. The array
/// will be completely filled from the stream, so an appropriate
/// size must be given.</param>
public static void ReadWholeArray (Stream stream, byte[] data)
{
    int offset=0;
    int remaining = data.Length;
    while (remaining > 0)
    {
        int read = stream.Read(data, offset, remaining);
        if (read <= 0)
            throw new EndOfStreamException 
                (String.Format("End of stream reached with {0} bytes left to read", remaining));
        remaining -= read;
        offset += read;
    }
}

#2
//Sometimes, you dont know the length of the stream in
advance (for instance a network stream) and just want to read the whole lot into a buffer.
Here is a method to do just that:

/// <summary>
/// Reads data from a stream until the end is reached. The
/// data is returned as a byte array. An IOException is
/// thrown if any of the underlying IO calls fail.
/// </summary>
/// <param name="stream">The stream to read data from</param>
public static byte[] ReadFully (Stream stream)
{
    byte[] buffer = new byte[32768];
    using (MemoryStream ms = new MemoryStream())
    {
        while (true)
        {
            int read = stream.Read (buffer, 0, buffer.Length);
            if (read <= 0)
                return ms.ToArray();
            ms.Write (buffer, 0, read);
        }
    }
}

#3
//While the above is simple, its not terribly efficient, as it ends up copying the data at the very end, and probably several times between. Here's some code which works well if you know the expected length of data to start with. (While you could use Stream.Length, it isn't supported for all streams.)

/// <summary>
/// Reads data from a stream until the end is reached. The
/// data is returned as a byte array. An IOException is
/// thrown if any of the underlying IO calls fail.
/// </summary>
/// <param name="stream">The stream to read data from</param>
/// <param name="initialLength">The initial buffer length</param>
public static byte[] ReadFully (Stream stream, int initialLength)
{
    // If we've been passed an unhelpful initial length, just
    // use 32K.
    if (initialLength < 1)
    {
        initialLength = 32768;
    }
    
    byte[] buffer = new byte[initialLength];
    int read=0;
    
    int chunk;
    while ( (chunk = stream.Read(buffer, read, buffer.Length-read)) > 0)
    {
        read += chunk;
        
        // If we've reached the end of our buffer, check to see if there's
        // any more information
        if (read == buffer.Length)
        {
            int nextByte = stream.ReadByte();
            
            // End of stream? If so, we're done
            if (nextByte==-1)
            {
                return buffer;
            }
            
            // Nope. Resize the buffer, put in the byte we've just
            // read, and continue
            byte[] newBuffer = new byte[buffer.Length*2];
            Array.Copy(buffer, newBuffer, buffer.Length);
            newBuffer[read]=(byte)nextByte;
            buffer = newBuffer;
            read++;
        }
    }
    // Buffer is now too big. Shrink it.
    byte[] ret = new byte[read];
    Array.Copy(buffer, ret, read);
    return ret;
}