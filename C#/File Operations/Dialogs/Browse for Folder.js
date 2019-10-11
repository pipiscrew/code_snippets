string folderPath = "";
FolderBrowserDialog folderBrowserDialog1 = new FolderBrowserDialog();
if (folderBrowserDialog1.ShowDialog() == DialogResult.OK)
{
    folderPath = folderBrowserDialog1.SelectedPath ;
}

 folderBrowserDialog1.Dispose();
 
 
 
 //select path!
        public static string searchFolder(string predefinedPath="")
        {
            string folderPath = null;
            FolderBrowserDialog folderBrowserDialog1 = new FolderBrowserDialog();
            //folderBrowserDialog1.RootFolder = Environment.SpecialFolder.MyComputer;
            folderBrowserDialog1.SelectedPath = predefinedPath;

            if (folderBrowserDialog1.ShowDialog() == DialogResult.OK)
                folderPath = folderBrowserDialog1.SelectedPath;

            folderBrowserDialog1.Dispose();

            return folderPath;
        }