public static string ByteArray2String(byte[] bs)
{
    StringBuilder builder = new StringBuilder();
    for (int i = 0; i < bs.Length; i++)
    {
        builder.Append(Convert.ToChar(bs[i]));
    }
    return builder.ToString();
}