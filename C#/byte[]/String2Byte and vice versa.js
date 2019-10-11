#Byte2String 
#(GetString works if byte is between 44 and less than 8x)
byte[] result = client.UploadValues("http://code2code.net/ResultCSharp.aspx", values);
Console.WriteLine(Encoding.UTF8.GetString(result));

//better use Encoding.Unicode.GetString is without \0

string s=System.Text.Encoding.ASCII.GetString(result, 0, result.Length);


#
tmpARR = ass.GetPublicKeyToken();

pToken = BitConverter.ToString(tmpARR).Replace("-", "").ToLower();

#
byte.ToString("X2")                    

#String2Byte
byte[] text = Encoding.UTF8.GetBytes("my string"); 