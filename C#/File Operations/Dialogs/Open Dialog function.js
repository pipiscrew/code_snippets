            OpenFileDialog openFileDialog1 = new OpenFileDialog();
            openFileDialog1.InitialDirectory = Convert.ToString(Environment.SpecialFolder.MyDocuments);
            openFileDialog1.Filter = "SQLite dbases (db,db3)|*.db;*.db3|All Files (*.*)|*.*";
            openFileDialog1.FilterIndex = 1;

            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                Console.WriteLine(openFileDialog1.FileName);//Do what you want here
            } 
            

        public static string OpenDialog(string Filename, string defaultExtension, string fFilter)
        {
            OpenFileDialog cdlg=new OpenFileDialog();

            try
            {
                cdlg.FileName = Filename;
                cdlg.DefaultExt = defaultExtension;
                cdlg.Filter = fFilter;
                //cdlg.InitialDirectory = System.Environment.GetFolderPath(System.Environment.SpecialFolder.DesktopDirectory)

                DialogResult result = cdlg.ShowDialog();
                if (result == DialogResult.OK) // Test result.
                    return cdlg.FileName;
                else
                    return "";
            }
            catch (Exception e)
            {
                MessageBox.Show(e.Message, General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                return "";
            }
            finally 
            { 
                cdlg.Dispose(); 
            }
        }

#how to use
            string tmp = General.OpenDialog("", "xls", "Excel (*.xls)|*.xls");

            if (tmp.Length > 0)
            {