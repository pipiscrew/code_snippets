//http://rhizohm.net/irhetoric/?tag=/Windows-Phone-7&page=3

<Grid x:Name="ContentGrid" Grid.Row="1">
    <phone:WebBrowser HorizontalAlignment="Left" Margin="20,50,0,0" Name="webBrowser1" VerticalAlignment="Top" Height="500" Width="430" />
</Grid>



       private void button1_Click(object sender, RoutedEventArgs e)
        {
            webBrowser1.Navigate(new Uri("http://pipiscrew.com", UriKind.Absolute));

        }