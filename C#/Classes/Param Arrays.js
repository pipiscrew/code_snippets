//http://www.dotnetspider.com/resources/32525-Param-Arrays-Csharp.aspx
   Public class ParamExample
   {
     Public int Adding_ArrayElement(params int[] List)
     {
       int Total=0;
       foreach(int I in List)
       {
         Total +=I;
       }
       return Total;
     }
   }
   class Tester
   {
     static void Main(string[] args)
     {
       ParamExample Param_Exam = new ParamExample();
       int Total = Param_Exam.Adding_ArrayElement(1,2,3,4,5,6,7);
       Console.WriteLine("The Result is {0}",Total);
       Console.ReadLine();
      }
    }