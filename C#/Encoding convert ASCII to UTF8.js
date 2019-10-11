//http://stackoverflow.com/questions/497782/how-to-convert-a-string-from-utf8-to-ascii-single-byte-in-c
ASCIIEncoding ascii = new ASCIIEncoding();
byte[] byteArray = Encoding.UTF8.GetBytes(sOriginal);
byte[] asciiArray = Encoding.Convert(Encoding.UTF8, Encoding.ASCII, byteArray);
string finalString = ascii.GetString(asciiArray);