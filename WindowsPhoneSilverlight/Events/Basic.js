       public delegate void URL(string streamingURL , string streamFormat);
       public event URL Changed;
       
       
        Changed("Test", "Test");
        
        
        
        
        
#sometimes the event signature to:

this.Click += new RoutedEventHandler(myButton_Click);


private void TheStackPanel_MouseDown(object sender, RoutedEventArgs e)
