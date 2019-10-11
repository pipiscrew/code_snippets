//http://www.developer.com/net/csharp/article.php/1482651/Working-with-Interfaces-in-C.htm

interface Interdemo
{
  bool Show();
}

interface Interdemo1
{
  bool Display();
}

class Interimp:Interdemo
{
  public bool Show()
  {
    Console.WriteLine("Show() method Implemented");
  return true;
  }

  public static void Main(string[] args)
  {
    Interimp inter = new Interimp();
    inter.Show();

>>>    if(inter is Interdemo1)
    {
      Interdemo1 id = (Interdemo1)inter;
      bool ok = id.Display();
      Console.WriteLine("Method Implemented");
    }

    else
    {
      Console.WriteLine("Method not implemented");
    }
  }
}