//http://soumya.wordpress.com/2009/06/27/dispatcher-and-multi-threading-in-silverlight3/


    // Explicitly start a new thread,
    Thread myThread = new Thread(FillRectangle);
    myThread.Start();
    
    
	void FillRectangle() {
		// Can't update the UI thread directly
		//MyRectangle.Fill = new SolidColorBrush(Colors.Red);
		
		// But perfectly safe to update the UI using the Dispatcher
		Dispatcher.BeginInvoke(() => MyRectangle.Fill = new SolidColorBrush(Colors.Red));
	}