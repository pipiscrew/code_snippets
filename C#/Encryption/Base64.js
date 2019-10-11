public static string FromBase64(string string_0)
{
    if (string_0 == null)
    {
        return null;
    }
    try
    {
        byte[] bytes = Convert.FromBase64String(string_0);
        return Encoding.UTF8.GetString(bytes);
    }
    catch (FormatException)
    {
        return null;
    }
}

 

 
public static string ToBase64(string string_0)
{
    if (string_0 == null)
    {
        return null;
    }
    return Convert.ToBase64String(Encoding.UTF8.GetBytes(string_0));
}

 

 //2nd find 
 //http://www.megasolutions.net/cSharp/String-Encryption-Help-44606.aspx


        private string ConvertToBase64(string text)
        {
            try
            {
                byte[] enc = new byte[text.Length];
                for (int i = 0; i < text.Length; i++)
                {
                    enc[i] = System.Convert.ToByte(text[i]);
                }
                return System.Convert.ToBase64String(enc);
            }
            catch
            {
            }
            return string.Empty;
        }

        private string ConvertFromBase64(string text)
        {
            string ret = string.Empty;
            byte[] enc = System.Convert.FromBase64String(text);
            for (int i = 0; i < enc.Length; i++)
            {
                ret += System.Convert.ToChar(enc[i]).ToString();
            }
            return ret;
        }


