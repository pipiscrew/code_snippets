The DateTimePicker and MonthCalendar control do not reflect the CurrentUICulture property
of an applications main execution thread when you created a localized application in
the .NET Framework, in Visual Studio 2005, or in Visual Studio .NET


//http://www.dansoltesz.com/blog/post/2010/02/02/DatePicker-SelectedDateFormat-ignore-culture-settings.aspx
//**no work for ampm**
//System.Threading.Thread.CurrentThread.CurrentCulture = System.Globalization.CultureInfo.CreateSpecificCulture("en-US");
            Thread.CurrentThread.CurrentCulture = (CultureInfo) Thread.CurrentThread.CurrentCulture.Clone();
            Thread.CurrentThread.CurrentCulture.DateTimeFormat.ShortDatePattern = "M/dd/yyyy";
            Thread.CurrentThread.CurrentCulture.DateTimeFormat.ShortTimePattern = "h:mm tt";
            
//http://silverlight.codeplex.com/workitem/7266
//working for ampm**
Console.WriteLine(string.Format(System.Globalization.CultureInfo.CreateSpecificCulture("en-US"), "{0:ddd, dd MMM yyyy tt}", dateTimePicker1.Value));