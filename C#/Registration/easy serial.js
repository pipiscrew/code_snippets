//http://eltexto.net/

public bool CheckSerial(string name, string key)
{
    string str = this.GenerateKey(name, 0x132e2);
    return (key == str);
}

public string GenerateKey(string name, int keyBase)
{
    string str = "ERROR_INVALID_KEY_343243252466363";
    int length = name.Length;
    if ((length > 0) && (keyBase > 0))
    {
        char ch = name[0];
        int num2 = (keyBase * length) + (ch * 'ʚ');
        str = num2.ToString() + "-";
        num2 = (keyBase * ch) * 0x7b;
        str = str + num2.ToString() + "-";
        str = str + ((keyBase + ((length * ch) * 0x19d5))).ToString();
    }
    return str;
}


produces like :
goofy
707750-1149911994-6374138
 

 
