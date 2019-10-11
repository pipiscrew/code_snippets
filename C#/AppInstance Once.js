//http://stackoverflow.com/a/6486341
            bool result;
            var mutex = new System.Threading.Mutex(true, Application.ProductName, out result);

            if (!result)
            {
                MessageBox.Show("Another instance is already running.", Application.ProductName, MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else
            {
                Application.EnableVisualStyles();
                Application.SetCompatibleTextRenderingDefault(false);
                Application.Run(new Form1());

                GC.KeepAlive(mutex);   // mutex shouldn't be released - important line
            }