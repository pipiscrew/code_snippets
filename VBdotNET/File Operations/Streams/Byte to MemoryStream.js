byte[] myByte = new byte[10];

MemoryStream theMemStream = new MemoryStream();

theMemStream.Write(myByte, 0, myByte.Length);