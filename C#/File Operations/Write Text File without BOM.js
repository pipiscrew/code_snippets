string location = DateTime.Now.ToString("yyyyMMddHHmmss")+".txt";
File.WriteAllText(location, val, new UTF8Encoding(false));

//http://stackoverflow.com/a/2503049
Well it writes the BOM because you are instructing it to, in the line

Encoding utf8WithoutBom = new UTF8Encoding(true);
true means that the BOM should be emitted, using

Encoding utf8WithoutBom = new UTF8Encoding(false);
//writes the file w/o BOM

//https://msdn.microsoft.com/en-us/library/s064f8w2(v=vs.110).aspx