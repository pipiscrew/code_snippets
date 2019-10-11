<ListBox Height="560" HorizontalAlignment="Left" Margin="-6,31,0,0" Name="MainMenu" VerticalAlignment="Top" Width="474" SelectionChanged="MainMenuSelectionChanged">
    <ListBox.ItemTemplate>
        <DataTemplate>
            <Grid>
            'we setup the ROWS appear
                <Grid.RowDefinitions>
                    <RowDefinition Height="80"/>
                    <RowDefinition MinHeight="30"/>
                </Grid.RowDefinitions>
			'we setup the ROWS appear
			
			'we setup 3 columns
                <Grid.ColumnDefinitions>
                    <ColumnDefinition Width="90" />
                    <ColumnDefinition Width="250"/>                                
                    <ColumnDefinition Width="90"/>
                </Grid.ColumnDefinitions>
            'we setup 3 columns

                'we set the column type properties
                <TextBlock Grid.Column="0" Text="{Binding MenuTitle}" Foreground="{StaticResource PhoneForegroundBrush}"  FontSize="40" Grid.Row="0" Grid.ColumnSpan="3" VerticalAlignment="Bottom"/>
                <TextBlock Grid.Column="1" Text="{Binding MenuSubtitle}" FontSize="25" Foreground="White" Grid.Row="1" Grid.ColumnSpan="3" TextWrapping="Wrap"/>
                <Image Grid.Column="2" Source="{Binding MenuImage}"  Grid.Row="0" Height="90" Grid.RowSpan="2" Width="48" Height="25" HorizontalAlignment="Right" VerticalAlignment="Bottom"/>
            </Grid>
        </DataTemplate>
    </ListBox.ItemTemplate>
</ListBox>

'we can use a ItemTemplate as real Template, so we can apply it to all listboxes
'http://msdn.microsoft.com/en-us/library/ms742521.aspx

'after listbox template we create a class (so we can add items to listbox)

using System.ComponentModel;

    public class MenuItem
 {
        private string menuTitle;
        private string menuSubtitle;
        private string menuImage;

        public string MenuTitle
        {
            get
            {
                return menuTitle;
            }
            set
            {
                if (value != menuTitle)
                {
                    menuTitle = value;
                    NotifyPropertyChanged("MenuTitle");
                }
            }
        }

        public string MenuSubtitle
        {
            get
            {
                return menuSubtitle;
            }
            set
            {
                if (value != menuSubtitle)
                {
                    menuSubtitle = value;
                    NotifyPropertyChanged("MenuSubtitle");
                }
            }
        }

        public string MenuImage
        {
            get
            {
                return menuImage;
            }
            set
            {
                if (value != menuImage)
                {
                    this.menuImage = value;
                    NotifyPropertyChanged("MenuImage");
                }
            }
        }


        public event PropertyChangedEventHandler PropertyChanged;


        /// <summary>
        /// Constructor with full city information
        /// </summary>
        public MenuItem(string nameA, string subtitleA, string menuImageA)
        {
            MenuTitle = nameA;
            MenuSubtitle = subtitleA;
            MenuImage = menuImageA;
        }

        /// <summary>
        /// Raise the PropertyChanged event and pass along the property that changed
        /// </summary>
        private void NotifyPropertyChanged(string property)
        {
            if (PropertyChanged != null)
            {
                PropertyChanged(this, new PropertyChangedEventArgs(property));
            }
        }

    }


'WARNING the NotifyPropertyChanged 'plays' VARIOUS part for the scroll events
'after creation of class , then we can fill the listbox with :

        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            FillMenuItems();

        }

        private void FillMenuItems()
        {
            listBox1.Items.Add(new MenuItem("Local Stations", "feels like home", "img/local.png"));
            listBox1.Items.Add(new MenuItem("Browse by Genre", "hundreds genres to search from", "img/genre.png"));
            listBox1.Items.Add(new MenuItem("Browse by Location", "from various nations", "img/region.png"));
            listBox1.Items.Add(new MenuItem("Browse by Language", "ENG | GR | GE | PL | IT", "img/language.png"));
        }