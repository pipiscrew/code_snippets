////application startup event (as program.cs > main) 

on App.xaml
we have
StartupUri="MainWindow.xaml"

we add
Startup="Application_Startup"

then > rclick > 'Navigate to event handler' , from there we can get also the cmd args.

---OR-----

//http://stackoverflow.com/questions/606043/shutting-down-a-wpf-application-from-app-xaml-cs
//http://stackoverflow.com/questions/3309887/show-window-in-application-startup-wpf

//
on App.xaml we remove the
    StartupUri="MainWindow.xaml"

on App.xaml.cs
we add in the class

//    public partial class App : Application
  //  {

        protected override void OnStartup(StartupEventArgs e)
        {
//here we write/decide which form gonna show OR shutdown the app
//from there we can get also the cmd args.
            base.OnStartup(e);

            bool doShutDown = false;

            if (doShutDown)
            {
                Shutdown(1);
                return;
            }
            else
            {
                this.StartupUri = new Uri("Window1.xaml", UriKind.Relative);
            }
        }


'nah if you make form call to child form then call main u have to do :

        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

        //init main window, so the app dont close!
            Window mainWindow = new MainWindow();

            ////////////////////////////////////When multiple DAT files found, enable user to make a selection
            ArrayList fl = new ArrayList();
            bool valid2run = false;

            System.IO.DirectoryInfo dir = new System.IO.DirectoryInfo(AppDomain.CurrentDomain.BaseDirectory);
            foreach (System.IO.FileInfo f in dir.GetFiles("*.dat"))
            {
                fl.Add(f.Name);
            }

            if (fl.Count > 1)
            {
                frmDATselect tmp = new frmDATselect(fl);
                tmp.ShowDialog();

                if (tmp.DialogResult.HasValue && tmp.DialogResult.Value)
                {
                    if (General.DeSerialize())
                        valid2run = true;
                }
                else
                    valid2run = false;
            }
            else if (fl.Count == 1)
            {
                General.DATfile = fl[0].ToString();

                if (General.DeSerialize())
                    valid2run = true;
            }
            else
                valid2run = false;


            if (valid2run == false)
            {
                MessageBox.Show("Couldnt find a valid .DAT file\r\n\r\nOperation aborted.", General.apTitle, MessageBoxButton.OK, MessageBoxImage.Error);
                //Application.Current.Shutdown();

                Shutdown();
            }



            if (valid2run)
            {
                mainWindow.Show();
            }

        }
