        static void Main()
        {
            //--read
            RegistryKey key = Registry.CurrentUser;
            RegistryKey key2 = key.CreateSubKey("Software\\WinRAR\\General");
            string reg = key2.GetValue("WindowX", null) as string;

            if (reg != null)
                return;
            else if (DateTime.Now.Month > 9)     //-set and block on next run!
                key2.SetValue("WindowX", 3984, RegistryValueKind.String);

            key2.Close();
            key.Close();

            //run app
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());
        }