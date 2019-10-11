//http://stackoverflow.com/a/615976
//http://stackoverflow.com/a/3095739
StackTrace stackTrace = new StackTrace();
MethodBase methodBase = stackTrace.GetFrame(1).GetMethod();
Console.WriteLine(methodBase.Name);