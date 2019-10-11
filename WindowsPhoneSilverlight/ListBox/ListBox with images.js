//http://weblogs.asp.net/psheriff/archive/2010/10/27/windows-phone-list-box-with-images.aspx
        <ListBox Height="664" HorizontalAlignment="Left" Name="listBox1" VerticalAlignment="Top" Width="480" SelectionChanged="listBox1_SelectionChanged" Grid.Row="1">
            <ListBox.ItemTemplate>
                <DataTemplate>
                    <StackPanel Orientation="Horizontal">
                        <Image Margin="8"
                            VerticalAlignment="Top"
                            Source="{Binding MenuImage}"
                            Width="100"
                            Height="100" />

                        <TextBlock Margin="19"
                                       Grid.Column="1"
                                       Grid.Row="0"
                                       Grid.RowSpan="2"
                                       HorizontalAlignment="Left"
                                       Foreground="{StaticResource PhoneForegroundBrush}"
                                       FontSize="40"
                                       Text="{Binding MenuTitle}"/>
                    </StackPanel>
                </DataTemplate>
            </ListBox.ItemTemplate>
        </ListBox>

in code :
            listBox1.Items.Clear();
            listBox1.Items.Add(new MenuItem("The Inbox", "649", "../img/platinumInbox.png"));
            listBox1.Items.Add(new MenuItem("Hit Launcher", "100", "../img/platinumHitList.png"));
            listBox1.Items.Add(new MenuItem("Absolute 80s", "225", "../img/platinum80.png"));
            listBox1.Items.Add(new MenuItem("Totally 90s", "263", "../img/platinum90.png"));
            listBox1.Items.Add(new MenuItem("Hot Mix", "54", "../img/platinumHotMix.png"));
            listBox1.Items.Add(new MenuItem("Modern Rock", "575", "../img/platinumModernRock.png"));
            listBox1.Items.Add(new MenuItem("Classic Rock", "136", "../img/platinumClassicRock.png"));
            listBox1.Items.Add(new MenuItem("Deep Cuts", "491", "../img/platinumDeepCuts.png"));
            listBox1.Items.Add(new MenuItem("Metal", "499", "../img/platinumMetal.png"));
            listBox1.Items.Add(new MenuItem("Club Hits", "654", "../img/platinumClubHits.png"));
            listBox1.Items.Add(new MenuItem("Chill Out", "782", "../img/platinumChillOut.png"));
            listBox1.Items.Add(new MenuItem("Real Country", "171", "../img/platinumRealCountry.png"));
            listBox1.Items.Add(new MenuItem("Rhythm and Soul", "295", "../img/platinumRythmsoul.png"));
            listBox1.Items.Add(new MenuItem("Soft Jazz", "556", "../img/platinumSoftJazz.png"));
            listBox1.Items.Add(new MenuItem("Symphony Hall", "106", "../img/platinumSymphonyHall.png"));