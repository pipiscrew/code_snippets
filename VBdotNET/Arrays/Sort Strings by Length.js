private IList<string> SortStringLength(IList<string> stringList)
{
    string[] strs = stringList.ToArray<string>();
    Array.Sort(strs, new Comparison<string>(delegate(string str1, string str2) 
    {
        if (str1 == null && str2 == null)
            return 0; //both empty
        else if (str1 == null)
            return -1; //empty string before non-empty string
        else if (str2 == null)
            return 1; //non-empty string after empty string
        else
        {
            if (str1.Length < str2.Length)
                return -1; //shorter string before longer string
            else if (str1.Length > str2.Length)
                return 1; //longer string after shorter string
            else
                return str1.CompareTo(str2); //alphabetical order
        }
    }));

    return strs;
}

//Example call
string[] test = { "333", null, "1", "22", "12", "4444" };
test = (string[])SortStringLength(test);

foreach (string s in test)
{
    Console.WriteLine(s);
}

//Output:
// [null]
// 1
// 12
// 22
// 333
// 4444