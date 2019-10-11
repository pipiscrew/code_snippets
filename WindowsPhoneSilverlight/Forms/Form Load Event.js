using System.Windows.Navigation;

       protected override void OnNavigatedTo(NavigationEventArgs e)
        {   
            MessageBox.Show("sdf");
        }
        
        
//OR

        public MainPage()
        {
            InitializeComponent();

            Loaded += new RoutedEventHandler(MainPage_Loaded);
        }

        void MainPage_Loaded(object sender, RoutedEventArgs e)
        {
            _viewModel = LayoutRoot.DataContext as MainPageViewModel;
        }