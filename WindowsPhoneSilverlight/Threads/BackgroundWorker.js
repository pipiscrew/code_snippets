   BackgroundWorker bg = new BackgroundWorker();

    // This method is called on the background thread
    bg.DoWork += CrossThreadUnsafe;

    // This method is called on the UI thread
    bg.RunWorkerCompleted += CrossThreadSafe;

    // Start the thread
    bg.RunWorkerAsync();
    
    
    --
    
void CrossThreadUnsafe(object sender, DoWorkEventArgs e) {
    // Don't update the UI here - uncommenting will cause 'Invalid cross-thread access error'
    //MyRectangle.Fill = new SolidColorBrush(Colors.Red);
}


--

void CrossThreadSafe(object sender, RunWorkerCompletedEventArgs e) {
    // Perfectly safe to update the UI from here
    MyRectangle.Fill = new SolidColorBrush(Colors.Red);
}