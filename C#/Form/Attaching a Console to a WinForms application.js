//http://www.codeproject.com/Tips/68979/Attaching-a-Console-to-a-WinForms-application
//so when console.writeln("test") outputs to blackbox
using System;
using System.Windows.Forms;
 
namespace FormWithConsole
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
#if DEBUG
            NativeMethods.AllocConsole();
            Console.WriteLine("Debug Console");
#endif
            Application.Run(new FormMain());
#if DEBUG
            NativeMethods.FreeConsole();
#endif
        }
    }
}


using System;
using System.Runtime.InteropServices;
 
namespace FormWithConsole
{
    internal static class NativeMethods
    {
        // http://msdn.microsoft.com/en-us/library/ms681944(VS.85).aspx
        /// <summary>
        /// Allocates a new console for the calling process.
        /// </summary>
        /// <returns>true if the function succeeds; otherwise, false.</returns>
        /// <remarks>
        /// A process can be associated with only one console,
        /// so the function fails if the calling process already has a console.
        /// </remarks>
        [DllImport("kernel32.dll", SetLastError = true)]
        internal static extern bool AllocConsole();
 
        // http://msdn.microsoft.com/en-us/library/ms683150(VS.85).aspx
        /// <summary>
        /// Detaches the calling process from its console.
        /// </summary>
        /// <returns>true if the function succeeds; otherwise, false.</returns>
        /// <remarks>
        /// If the calling process is not already attached to a console,
        /// the error code returned is ERROR_INVALID_PARAMETER (87).
        /// </remarks>
        [DllImport("kernel32.dll", SetLastError = true)]
        internal static extern bool FreeConsole();
    }
}