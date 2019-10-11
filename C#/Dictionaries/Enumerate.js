//http://stackoverflow.com/questions/676880/dictionary-enumeration-in-c
To enumerate a dictionary you either enumerate the values within it:

Dictionary<int, string> dic;

foreach(string s in dic.Values)
{
   Console.WriteLine(s);
}

or the KeyValuePairs

foreach(KeyValuePair<int, string> kvp in dic)
{
   Console.WriteLine("Key : " + kvp.Key.ToString() + ", Value : " + kvp.Value);
}

or the keys

foreach(int key in dic.Keys)
{
    Console.WriteLine(key.ToString());
}



//reverse
//http://stackoverflow.com/questions/82881/in-c-sharp-net-2-0-whats-an-easy-way-to-do-a-foreach-in-reverse
If you have .Net 3.5 you can use the .Reverse() extension method on IEnumerables. EG:

foreach (KeyValuePair<string, string> o in FolderList.Reverse())
{
        // Do stuff to object
}