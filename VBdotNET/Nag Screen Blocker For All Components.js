Bellow the code is written in c#. Add this code in class call the "BlockNagScreen" method just before nag screen appears in code. That is all.

Sample Usage:
MyClass.BlockNagScreen("About");
//here is the code causes nag screen

Replace "About" with the title of the nag screen.

I Hope this helps some people. 




        public static void BlockNagScreen(string WindowTitleWillBeBlocked)
        {
            System.Threading.ThreadPool.QueueUserWorkItem(new System.Threading.WaitCallback(closeWindow), WindowTitleWillBeBlocked);
        }

        #region Internal Code - Do Not Use

        [DllImport("user32.dll")]
        public static extern int FindWindow(string lpClassName,string lpWindowName);
        [DllImport("user32.dll")]
        public static extern int SendMessage(int hWnd, uint Msg, int wParam, int lParam);
            
        public const int WM_SYSCOMMAND = 0x0112;
        public const int SC_CLOSE = 0xF060;

        private static void closeWindow(object o)
        {
            int iHandle = 0;
            for (int i = 0; i < 100; i++)
            {
                iHandle = FindWindow(null, o.ToString());
                if (iHandle > 0)
                {
                    SendMessage(iHandle, WM_SYSCOMMAND, SC_CLOSE, 0);
                    break;
                }
                else
                {
                    System.Threading.Thread.Sleep(20);
                }
            }
        }

        #endregion