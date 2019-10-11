//http://hemendrasingh.com/Blog/?p=333

string Data = "Welcome to Hemendrasingh.com";
string HexOutput = "";
foreach (char a in Data)
{
HexOutput = HexOutput + String.Format("{0:X}", Convert.ToInt32(a));
}

Console.Write(HexOutput);

Output:-
57656C636F6D6520746F2048656D656E64726173696E67682E636F6D