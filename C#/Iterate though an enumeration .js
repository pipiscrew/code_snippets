//http://dailydotnettips.com/2017/10/31/back-to-basic-how-to-iterate-though-an-enumeration-enum-in-c/
foreach (var item in Enum.GetNames(typeof(WorkingDays)))
{
Console.WriteLine(item);
}

foreach (var item in Enum.GetValues(typeof(WorkingDays)))
{
Console.WriteLine(item);
}

//think of this enumerations as Name & Value pairs. Monday = 0, Tuesday = 1, Wednesday = 2, Thursday = 3, Friday = 4
foreach (WorkingDays item in Enum.GetValues(typeof(WorkingDays)))
{
Console.WriteLine(Convert.ToInt32(item));
}