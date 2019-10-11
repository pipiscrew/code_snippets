static void Main()
{
// Optional
Application.EnableVisualStyles();
Application.SetCompatibleTextRenderingDefault(false);
bool createdNew;

// To prevent the program to be started twice
///Create new mutex
System.Threading.Mutex appMutex = new System.Threading.Mutex(true, Application.ProductName, out createdNew);
///if creation of mutex is successful
if (createdNew)
{

Application.Run(new frmMain(false));
appMutex.ReleaseMutex();
}
else
{
/// if the app's already running
string msg = String.Format("The Program \"{0}\" is already running", Application.ProductName);
MessageBox.Show(msg, Application.ProductName, MessageBoxButtons.OK, MessageBoxIcon.Information);
}
}