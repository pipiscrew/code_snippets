//http://stackoverflow.com/questions/2085452/fast-lowlevel-method-to-recursively-process-files-in-folders
        private string RecurseFolder(string indexedFolder)
        {
            Encoding kk;

            //for a single extension:
            string[] files = Directory.GetFiles(indexedFolder);
            foreach (string file in files)
            {
                textBox3.Text += "[" + IsText(out kk, file, 100).ToString() + "]" + (file) + "\r\n";
            }

            foreach (string directory in Directory.GetDirectories(indexedFolder))
            {
                //recursively process all subdirectories
                foreach (var ie in RecurseFolder(directory))
                {
                    textBox3.Text += "folder > " + (ie) + "\r\n"; ;
                }
            }
            
            //proper
            // int intDirIndex = 0;
            //foreach (string directory in Directory.GetDirectories(indexedFolder))
            //{
            //    if (Path.GetFileName(directory).ToLower() == "bin" || Path.GetFileName(directory).ToLower() == "obj")
            //        continue;
//prevIndex is into  procedure parameters
            //    intDirIndex = addFolder(Path.GetFileName(directory), prevIndex, 8);
            //    RecurseFolder(directory, intDirIndex);
            //}

            return "sd";
        }
  
  
//http://weblogs.asp.net/israelio/archive/2004/06/23/162913.aspx
// How much deep to scan. (of course you can also pass it to the method)
const int HowDeepToScan=4; 

public static void ProcessDir(string sourceDir, int recursionLvl) 
{
  if (recursionLvl<=HowDeepToScan)
  {
    // Process the list of files found in the directory. 
    string [] fileEntries = Directory.GetFiles(sourceDir);
    foreach(string fileName in fileEntries)
    {
       // do something with fileName
       Console.WriteLine(fileName);
    }


    // Recurse into subdirectories of this directory.
    string [] subdirEntries = Directory.GetDirectories(sourceDir);
    foreach(string subdir in subdirEntries)
       // Do not iterate through reparse points
       if ((File.GetAttributes(subdir) &
            FileAttributes.ReparsePoint) !=
                FileAttributes.ReparsePoint)

            ProcessDir(subdir,recursionLvl+1);
  }
}