private DispatcherTimer timer;
private Point position;

        {
            InitializeComponent();
            timer = new DispatcherTimer { Interval = TimeSpan.FromSeconds(1.1) };
            timer.Tick += UpdateMediaData;
        }
        
        
#listbox events
        
        private void listBox1_MouseLeftButtonDown(object sender, MouseButtonEventArgs e)
        {
            p.IsOpen = false;
            //if (listBox1.SelectedIndex > -1)
            //{
                position = e.GetPosition((UIElement)this);
                timer.Start();
            //}
            
        }

        private void listBox1_MouseLeftButtonUp(object sender, MouseButtonEventArgs e)
        {
            timer.Stop();
        }
        
#the virtual popup
        Popup p = new Popup();
        private void UpdateMediaData(object sender, EventArgs e)
        {
            Border border = new Border();
            border.BorderBrush = new SolidColorBrush(Colors.Transparent);
            border.BorderThickness = new Thickness(5.0);
            border.Width =  450;

            StackPanel panel1 = new StackPanel();
            panel1.Background = new SolidColorBrush(Colors.White);

            //Button button1 = new Button();
            //button1.Content = "Remove";
            //button1.Margin = new Thickness(5.0);
            //button1.Click += new RoutedEventHandler(button4_Click);

            TextBlock textblock1 = new TextBlock();
            textblock1.Text = "Delete";
            textblock1.FontSize =30;
            textblock1.FontFamily = new FontFamily("Calibri");
            textblock1.Margin = new Thickness(5.0);
            textblock1.MouseLeftButtonUp += (button4_Click);
            panel1.Children.Add(textblock1);

            TextBlock textblock2 = new TextBlock();
            textblock2.Text = "Cancel";
            textblock2.FontSize = 30;
            textblock2.FontFamily = new FontFamily("Calibri");
            textblock2.Margin = new Thickness(5.0);
            textblock2.MouseLeftButtonUp += (button4_Click);
            panel1.Children.Add(textblock2);

            border.Child = panel1;

            // Set the Child property of Popup to the border 
            // which contains a stackpanel, textblock and button.
            p.Child = border;

            // Set where the popup will show up on the screen.
            p.Margin = new Thickness(20, position.Y , 60, 0); 

            // Open the popup.
            p.IsOpen = true;
        }

        //void button4_Click(object sender, RoutedEventArgs e) this is for button
        void button4_Click(object sender, MouseButtonEventArgs e)
        {
            // do someting & close the popup.
            p.IsOpen = false;
            timer.Stop();
        }