private void MyMethod(string param1,int param2)
{
  //do stuff
}
Thread myNewThread = new Thread(() => MyMethod("param1",5));
myNewThread.Start();