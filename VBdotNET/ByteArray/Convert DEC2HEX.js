// to Hex from DEC
int i = 42881;
string s = Convert.ToString(i, 16);

// to DEC from Hex
string s = "AD04";
int i = Convert.ToInt32(s, 16);

'--

' Store integer 182
int decValue = 182;

' Convert integer 182 as a hex in a string variable
string hexValue = decValue.ToString("X");
takis = ccReturn(i).ToString("X2") 'this fixes 2digits

' Convert the hex string back to the number
int decAgain = int.Parse(hexValue, System.Globalization.NumberStyles.HexNumber);