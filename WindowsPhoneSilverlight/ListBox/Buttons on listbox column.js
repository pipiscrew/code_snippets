//http://forums.silverlight.net/forums/p/199007/464413.aspx
<ListBox x:Name="ListDocumentos" >
 <ListBox.ItemTemplate>
  <DataTemplate x:Name="LBDataTemplate">
   <Button x:Name="btGuardar" Content="Guardar" Click="btGuardar_Click"></Button>
  </DataTemplate>
 </ListBox.ItemTemplate>
</ListBox>



private void btGuardar_Click(object sender, RoutedEventArgs e)
{
   // Put here what you want to do when user click on a button
   // If your ListBox is bound to a datasource, you can get
   // the current element in ((Button)sender).DataContext
}