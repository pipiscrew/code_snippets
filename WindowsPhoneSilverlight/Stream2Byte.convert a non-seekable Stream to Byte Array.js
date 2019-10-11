The Stream object from WebRequest.GetResponseStream() is non-seekable.
How can I convert this stream to a byte array?

For ordinary Stream (seekable), I can use StreamObject.Read(myByteArray,
0, myLength)


Stream responseStream = webResponse.GetResponseStream();
MemoryStream memStream = new MemoryStream();

byte [] respBuffer = new byte[1024];
try
{
int bytesRead = responseStream.Read(respbuffer,0,
respBuffer.Length);
if(bytesRead > 0)
{
memStream.Write(respBuffer,0,bytesRead);
bytesRead = responseStream.Read(respBuffer,0,
respBuffer.Length);
}
}
finally
{
responseStream.Close();
webResponse.Close();
}