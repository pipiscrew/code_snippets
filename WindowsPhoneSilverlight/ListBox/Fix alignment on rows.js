//http://forums.silverlight.net/forums/p/77025/182139.aspx
Width of TextBlock inside ListBox is dynamic

Each row TextBlock have different width.

So you can check by giving fixed **width** like below:

        <ListBox Grid.Row="1" Grid.Column="1" x:Name="listBox">
            <ListBox.ItemTemplate>
                <DataTemplate>
                    <Grid ShowGridLines="True">
                        <Grid.ColumnDefinitions>
                            <ColumnDefinition />
                            <ColumnDefinition Width="5"/>
                            <ColumnDefinition />
                        </Grid.ColumnDefinitions>
                        <TextBlock Grid.Column="0" Text="{Binding Age}" />
    ------------>       <TextBlock Grid.Column="2" Width="90" Text="{Binding Name}" HorizontalAlignment="Right" TextAlignment="Right" />
                    </Grid>
                </DataTemplate>
            </ListBox.ItemTemplate>
        </ListBox>