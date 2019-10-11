//http://jesseliberty.com/2012/06/28/c-5making-inotifypropertychanged-easier/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+JesseLiberty-SilverlightGeek+%28Jesse+Liberty+-+Silverlight+Geek%29

//old  way
private string _name;
 
public string Name
{
    get { return _name; }
    set
    {
        _name = value;
        RaisePropertyChanged("Name");
    }
}
 
private void RaisePropertyChanged( string caller)
{
  if (PropertyChanged != null)
  {
    PropertyChanged( this, new PropertyChangedEventArgs( caller ) );
  }
}

^Notice that the Name property has to send “Name” to the RaisePropertyChanged helper method. 

With CSharp 5, this problem is solved (Hoot!) by adding an attribute to the argument in 
RaisePropertyChanged:  [CallerMemberName]  The new syntax, which is much less error prone is:
//c# v5
private string _name;
 
public string Name
{
    get { return _name; }
    set
    {
        _name = value;
        RaisePropertyChanged();
    }
}
 
private void RaisePropertyChanged(
    [CallerMemberName] string caller = "" )
{
  if (PropertyChanged != null)
  {
    PropertyChanged( this, new PropertyChangedEventArgs( caller ) );
  }
}