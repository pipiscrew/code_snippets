//http://www.csharp-examples.net/catching-unhandled-exceptions/
//warning all play when in run as exe (no debug)
using System.Threading;

static void Main()
{
  Application.EnableVisualStyles();
  Application.SetCompatibleTextRenderingDefault(false);
  //set events
  Application.ThreadException += new ThreadExceptionEventHandler(Application_ThreadException);
  AppDomain.CurrentDomain.UnhandledException += new UnhandledExceptionEventHandler(CurrentDomain_UnhandledException);

  Application.Run(new Form1());
}

static void Application_ThreadException(object sender, ThreadExceptionEventArgs e)
{
  MessageBox.Show(e.Exception.Message, "Unhandled Thread Exception");
  // here you can log the exception ... or exit with Environment.Exit(-1);
}

static void CurrentDomain_UnhandledException(object sender, UnhandledExceptionEventArgs e)
{
  MessageBox.Show((e.ExceptionObject as Exception).Message, "Unhandled UI Exception");
  // here you can log the exception ... or exit with Environment.Exit(-1);
}

//good sample
//https://msdn.microsoft.com/en-us/library/system.windows.forms.application.setunhandledexceptionmode(v=vs.110).aspx



//show where occured - warning if u not exit the app will continue
        static void Application_ThreadException(object sender, ThreadExceptionEventArgs e)
        {
            MessageBox.Show(e.Exception.Message + "\r\n---\r\n" + e.Exception.StackTrace, Application.ProductName, MessageBoxButtons.OK, MessageBoxIcon.Error);
                   }

        static void CurrentDomain_UnhandledException(object sender, UnhandledExceptionEventArgs e)
        {
            Exception ex = (Exception)e.ExceptionObject;

            MessageBox.Show(ex.Message + "\r\n---\r\n" + ex.StackTrace, Application.ProductName, MessageBoxButtons.OK, MessageBoxIcon.Error);

        }