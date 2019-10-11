        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            //Application.Run(new Login());

            Login login = new Login();
            DialogResult result = login.ShowDialog();

            if (result == DialogResult.OK)
                Application.Run(new Form1());

        }
        
and in login form we use :
                    //this.Close();
                    this.DialogResult = DialogResult.OK;