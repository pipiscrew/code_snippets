//http://msdn.microsoft.com/en-us/library/ff431811%28VS.92%29.aspx

1-create a file
<html>
   <head><title>Sample Readme File</title></head>
   <body>
      <p>Sample Readme Content</p>
   </body>
</html>

2-drop it to solution , set 'Build Action' = Content


3-Add namespaces
using System.IO.IsolatedStorage;
using System.IO;
using System.Windows.Resources;


4-Add webbrowser control from XAML
<Grid x:Name="ContentGrid" Grid.Row="1">
    <phone:WebBrowser HorizontalAlignment="Left" Margin="20,50,0,0" Name="webBrowser1" VerticalAlignment="Top" Height="500" Width="430" />
</Grid>

5-CODE

'export resource to IsolatedStorage
    private void SaveFilesToIsoStore()
    {
        //These files must match what is included in the application package,
        //or BinaryStream.Dispose below will throw an exception.
        string[] files = {
            "readme.htm"
        };

        IsolatedStorageFile isoStore = IsolatedStorageFile.GetUserStoreForApplication();

        if (false == isoStore.FileExists(files[0]))
        {
            foreach (string f in files)
            {
                StreamResourceInfo sr = Application.GetResourceStream(new Uri(f, UriKind.Relative));
                using (BinaryReader br = new BinaryReader(sr.Stream))
                {
                    byte[] data = br.ReadBytes((int)sr.Stream.Length);
                    SaveToIsoStore(f, data);
                }
            }
        }
    }

    private void SaveToIsoStore(string fileName, byte[] data)
    {
        string strBaseDir = string.Empty;
        string delimStr = "/";
        char[] delimiter = delimStr.ToCharArray();
        string[] dirsPath = fileName.Split(delimiter);

        //Get the IsoStore
        IsolatedStorageFile isoStore = IsolatedStorageFile.GetUserStoreForApplication();

        //Recreate the directory structure
        for (int i = 0; i < dirsPath.Length - 1; i++)
        {
            strBaseDir = System.IO.Path.Combine(strBaseDir, dirsPath[i]);
            isoStore.CreateDirectory(strBaseDir);
        }

        //Remove existing file
        if (isoStore.FileExists(fileName))
        {
            isoStore.DeleteFile(fileName);
        }

        //Write the file
        using (BinaryWriter bw = new BinaryWriter(isoStore.CreateFile(fileName)))
        {
            bw.Write(data);
            bw.Close();
        }
    }



--

public MainPage()
{    InitializeComponent();

    SupportedOrientations = SupportedPageOrientation.Portrait | SupportedPageOrientation.Landscape;

    webBrowser1.Loaded += WebBrowser_OnLoaded;
}

private void WebBrowser_OnLoaded(object sender, RoutedEventArgs e)
{
    SaveFilesToIsoStore();
    webBrowser1.Navigate(new Uri("readme.htm", UriKind.Relative));
}
