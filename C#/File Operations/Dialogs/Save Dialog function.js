        public static string SaveDialog(string Filename, string defaultExtension, string fFilter)
        {
            SaveFileDialog cdlg = new SaveFileDialog();

            try
            {
                cdlg.OverwritePrompt = true;
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
            string tmp = General.SaveDialog("", "xls", "Excel (*.xls)|*.xls");

            if (tmp.Length > 0)
            {
            }