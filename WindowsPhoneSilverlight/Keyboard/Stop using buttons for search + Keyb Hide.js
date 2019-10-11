//http://4mkmobile.com/2011/02/wp7-devs-stop-adding-search-buttons/

            <TextBox HorizontalAlignment="Left" Margin="9,19,0,516" Name="textBox1" Width="441"
            InputScope="ApplicationEnd" KeyUp="tbSearch_KeyUp"/>
            
            
private void tbSearch_KeyUp(object sender, KeyEventArgs e)
{
    if (e.Key == Key.Enter)
    {
        //to hide keyboard
        //focus the current page
        this.Focus();

        //or focus another control
        listBox1.Focus();
        //to hide keyboard
                
        PerformSearch(tbSearch.Text);
    }
}

