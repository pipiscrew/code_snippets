//For the MediaPlayer functionality you’ll need to add the Microsoft.Xna.Framework.dll reference
//http://4mkmobile.com/2010/08/quick-tip-playing-a-streamed-mp3/

//button
MediaPlayer.Stop();
Song song = Song.FromUri("Sample Song", new Uri(txtUrl.Text ) );
MediaPlayer.Play(song);

//to avoid the warning :
//http://forums.create.msdn.com/forums/p/56995/347982.aspx#347982
      public App()
        {
            // Add this to the end of your App.xaml.cs

            this.ApplicationLifetimeObjects.Add(new XNAAsyncDispatcher(TimeSpan.FromMilliseconds(50)));
        }

    public class XNAAsyncDispatcher : IApplicationService
    {
        private DispatcherTimer frameworkDispatcherTimer;

        public XNAAsyncDispatcher(TimeSpan dispatchInterval) { this.frameworkDispatcherTimer = new DispatcherTimer();
            this.frameworkDispatcherTimer.Tick += new EventHandler(frameworkDispatcherTimer_Tick);
            this.frameworkDispatcherTimer.Interval = dispatchInterval;
        }

        void IApplicationService.StartService(ApplicationServiceContext context) { this.frameworkDispatcherTimer.Start(); }  
        void IApplicationService.StopService() { this.frameworkDispatcherTimer.Stop(); }  
        void frameworkDispatcherTimer_Tick(object sender, EventArgs e) { FrameworkDispatcher.Update(); }
    }