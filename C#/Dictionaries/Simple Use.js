public static Dictionary<string, short[]> SignatureList;
 
    AssemblyLoad = new short[] { 
        40, 0x2d, 0, 0, 10, 0x6f, 0x2e, 0, 0, 10, 20, 20, 0x6f, 0x2f, 0, 0, 
        10
     };
     
     
     
SignatureList = new Dictionary<string, short[]>();


SignatureList.Add("AssemblyInvoke", AssemblyLoad);

foreach (KeyValuePair<string, short[]> pair in Signatures.SignatureList)
{
    if (SearchBytes(lpBuffer, pair.Value))
    {
        return pair.Key;
    }
}
