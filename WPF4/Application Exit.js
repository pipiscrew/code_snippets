//http://social.msdn.microsoft.com/Forums/en-US/wpf/thread/68bea444-1fa7-4948-8b8c-bf61fbc6dc2b/
Application.Exit == Application.Current.Shutdown(); 


//application closes when...
Application.Current.ShutdownMode = System.Windows.ShutdownMode.OnLastWindowClose; 