//http://stackoverflow.com/questions/12527694/c-sharp-convert-char-to-byte-hex-representation

//no supports unicode
Convert.ToByte(item).ToString("x2");

//all over
Convert.ToUInt32(item).ToString("x2");



//http://stackoverflow.com/a/17245518/1320686
//System.Runtime.Remoting.Metadata.W3cXsd2001.SoapHexBinary class that 
//I've used which can convert bytes to and from hex:

string hex = new SoapHexBinary(bytes).ToString();
byte[] bytes = SoapHexBinary.Parse(hex).Value;