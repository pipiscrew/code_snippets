             Timer myTimer = new Timer();
              myTimer.Elapsed += new ElapsedEventHandler( DisplayTimeEvent );
              myTimer.Interval = 700;
              myTimer.Start();
              
        public static void DisplayTimeEvent( object source, ElapsedEventArgs e )
    {
        Environment.Exit(0);
    }              