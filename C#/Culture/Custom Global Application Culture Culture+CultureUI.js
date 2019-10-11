on void Main()

System.Threading.Thread.CurrentThread.CurrentCulture = System.Globalization.CultureInfo.CreateSpecificCulture("en-US");
System.Threading.Thread.CurrentThread.CurrentUICulture = System.Threading.Thread.CurrentThread.CurrentCulture;
///////////////////////


//http://www.codeproject.com/Articles/19762/Custom-Global-Application-Culture
/// <summary>
/// The main entry point for the application.
/// </summary>
[STAThread]
static void Main()
{
    // Creating a Global culture specific to our application.
    System.Globalization.CultureInfo cultureInfo = 
		new System.Globalization.CultureInfo("en-US");
    // Creating the DateTime Information specific to our application.
    System.Globalization.DateTimeFormatInfo dateTimeInfo = 
		new System.Globalization.DateTimeFormatInfo();
    // Defining various date and time formats.
    dateTimeInfo.DateSeparator = "/";
    dateTimeInfo.LongDatePattern = "dd-MMM-yyyy";
    dateTimeInfo.ShortDatePattern = "dd-MMM-yy";
    dateTimeInfo.LongTimePattern = "hh:mm:ss tt";
    dateTimeInfo.ShortTimePattern = "hh:mm tt";
    // Setting application wide date time format.
    cultureInfo.DateTimeFormat = dateTimeInfo;
    // Assigning our custom Culture to the application.
    Application.CurrentCulture = cultureInfo;
    Thread.CurrentThread.CurrentCulture = cultureInfo;
    Thread.CurrentThread.CurrentUICulture = cultureInfo;

    ..................
    Application.Run(new Form1());
}