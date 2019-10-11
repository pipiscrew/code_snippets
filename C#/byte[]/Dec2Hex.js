inst.OpCode.Value.ToString("X") == "FF72")

string input = "Hello World!";
char[] values = input.ToCharArray();
foreach (char letter in values)
{
    // Get the integral value of the character.
    int value = Convert.ToInt32(letter);
    // Convert the decimal value to a hexadecimal value in string form.
    string hexOutput = String.Format("{0:X}", value);
    Console.WriteLine("Hexadecimal value of {0} is {1}", letter, hexOutput);
}



public static string DecToHex(byte[] data)
{
    StringBuilder builder = new StringBuilder();
    for (int i = 0; i < data.Length; i++)
    {
        builder.Append(data[i].ToString("X2"));
    }
    return builder.ToString();
}

 

 
public static string DecToHex(byte data)
{
    return DecToHex(new byte[] { data });
}

 
// Store integer 182
int decValue = 182;
// DEC2HEX
string hexValue = decValue.ToString("X");
// HEX2DEC
int decAgain = int.Parse(hexValue, System.Globalization.NumberStyles.HexNumber);
 
