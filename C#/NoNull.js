public static string NoNull(object obj)
{
    if (obj == null)
    {
        return "";
    }
    string str = obj.ToString();
    if (str == null)
    {
        return "";
    }
    return str;
}

 

 
