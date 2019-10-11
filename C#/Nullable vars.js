int? i = 10;
double? d1 = 3.14;
bool? flag = null;
char? letter = 'a';
int?[] arr = new int?[10];


int? x = 10;
if (x.HasValue)
{
    System.Console.WriteLine(x.Value);
}
else
{
    System.Console.WriteLine("Undefined");
}


int? y = 10;
if (y != null)
{
    System.Console.WriteLine(y.Value);
}
else
{
    System.Console.WriteLine("Undefined");
}