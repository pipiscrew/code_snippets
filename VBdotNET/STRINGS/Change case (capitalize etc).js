Text2 = StrConv(Text2, vbProperCase)

OR

TextInfo myTextInfo = System.Threading.Thread.CurrentThread.CurrentCulture.TextInfo;

string sampleStr = "this IS a sample text";
string titleStr = myTextInfo.ToTitleCase(sampleStr);
Console.WriteLine(titleStr);