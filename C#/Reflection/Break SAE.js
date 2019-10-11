ก็็็็็็็็็็็็็็็็็็็็ก็็็็็็็็็็็็็็็็็็็็ก็็็็็็็็็็็็็็็็็็็็
crazyyyyyyyyyyyyyyyyyyyyyyyyyyyyy. look what I discover.

creare a dummy app with a button , then paste this, (tie the button1_click with the event)  :


        private void button1_Click(object sender, EventArgs e)
        {
            string str = SaveDialog("", "xls", "Excel (*.xls)|*.xls");

        }

        public static string SaveDialog(string Filename, string defaultExtension, string fFilter)
        {
            //SaveFileDialog cdlg = new SaveFileDialog();
           
            Application.Exit();
            return "";
            //try
            //{
            //    cdlg.OverwritePrompt = true;
            //    cdlg.FileName = Filename;
            //    cdlg.DefaultExt = defaultExtension;
            //    cdlg.Filter = fFilter;
            //    //cdlg.InitialDirectory = System.Environment.GetFolderPath(System.Environment.SpecialFolder.DesktopDirectory)

            //    DialogResult result = cdlg.ShowDialog();
            //    if (result == DialogResult.OK) // Test result.
            //        return cdlg.FileName;
            //    else
            //        return "";
            //}
            //catch (Exception e)
            //{
            //    MessageBox.Show(e.Message, "test", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            //    return "";
            //}
            //finally
            //{
            //    cdlg.Dispose();
            //}
        }

compile it , fire up SAE! , try to DEOB 0%!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! LOOOOOOOOOOOOOL SAE boom!

because the SAE author here :
string str = SaveDialog("", "xls", "Excel (*.xls)|*.xls");

thinks that will return a string, and execute the function normaly!!!!!!



#best solution
        [Obfuscation(Feature = "msil encryption", Exclude = false)]  
        public static bool SaveDialog()
        {
           Application.Exit();
           return false;
        }

        private void dummy()
        {
            string str = SaveDialog().ToString();
        }