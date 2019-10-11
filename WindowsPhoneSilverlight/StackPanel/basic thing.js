           <ListBox Height="623" HorizontalAlignment="Left" Name="listBox1" VerticalAlignment="Top" Width="456"  SelectionChanged="listBox1_SelectionChanged">
                <ListBox.ItemTemplate>
                    <DataTemplate>
                        <StackPanel Orientation="Horizontal">
                            <Image Margin="14"
                            VerticalAlignment="Top"
                            Source="../img/MenusBasicYellowBar.png"
                            Width="56"
                            Height="31" />
#without this second stackpanel all appear in 1line because of previous *StackPanel Orientation="Horizontal"*                            
                        <StackPanel Orientation="Vertical">
                            <TextBlock Margin="0"
                                       HorizontalAlignment="Left"
                                       Foreground="{StaticResource PhoneForegroundBrush}"
                                       FontSize="40"
                                       Text="{Binding StationName}"/>

                            <TextBlock Margin="0"
                                       HorizontalAlignment="Left"
                                       Foreground="{StaticResource PhoneForegroundBrush}"
                                       FontSize="20"
                                       Text="{Binding StationSubtitle}"/>
                        </StackPanel>
                        </StackPanel>
                    </DataTemplate>
                </ListBox.ItemTemplate>
            </ListBox>