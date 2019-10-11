//http://stackoverflow.com/a/9602655
//*warning checking only the list1 against list2, no list2 against list1*
IEnumerable<string> difference = list1.Except(list2);
,you can also use if (a1.SequenceEqual(a2))