//1method
        static Mutex mutex = new Mutex(true, Application.ProductName);


        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
			if (mutex.WaitOne(TimeSpan.Zero, true))
			{
                Application.EnableVisualStyles();
                Application.SetCompatibleTextRenderingDefault(false);
                Application.Run(new MainForm());
            }
            else
            {
                MessageBox.Show(Application.ProductName + " already running.", Application.ProductName, MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
        }

//2method        
////////////////////////////////////////////////////
//restore back the old instance
//http://www.codeproject.com/Articles/4430/Single-Instance-Application-in-C
////////////////////////////////////////////////////
@program.cs we replace (as the 1method)
            else
            {
                //MessageBox.Show(Application.ProductName + " already running.", Application.ProductName, MessageBoxButtons.OK, MessageBoxIcon.Information);
                SingleExecution.SwitchToCurrentInstance();
            }
            
//class SingleExecution
using System;
using System.Diagnostics;
using System.Runtime.InteropServices;

namespace ScreenGrabber
{
    internal static class SingleExecution
    {

        [DllImport("user32.dll")]
        static extern int ShowWindow(IntPtr hWnd, int nCmdShow);

        [DllImport("user32.dll")]
        static extern int SetForegroundWindow(IntPtr hWnd);

        [DllImport("user32.dll")]
        static extern int IsIconic(IntPtr hWnd);

        public static void SwitchToCurrentInstance()
        {
            IntPtr hWnd = GetCurrentInstanceWindowHandle();
            if (hWnd != IntPtr.Zero)
            {
                // Restore window if minimised. Do not restore if already in
                // normal or maximised window state, since we don't want to
                // change the current state of the window.
                if (IsIconic(hWnd) != 0)
                {
                    ShowWindow(hWnd, 9);
                }

                // Set foreground window.
                SetForegroundWindow(hWnd);
            }
        }

        static IntPtr GetCurrentInstanceWindowHandle()
        {
            IntPtr hWnd = IntPtr.Zero;
            Process process = Process.GetCurrentProcess();
            Process[] processes = Process.GetProcessesByName(process.ProcessName);
            foreach (Process _process in processes)
            {
                // Get the first instance that is not this instance, has the
                // same process name and was started from the same file name
                // and location. Also check that the process has a valid
                // window handle in this session to filter out other user's
                // processes.
                if (_process.Id != process.Id &&
                    _process.MainModule.FileName == process.MainModule.FileName &&
                    _process.MainWindowHandle != IntPtr.Zero)
                {
                    hWnd = _process.MainWindowHandle;
                    break;
                }
            }
            return hWnd;
        }
    }
}
