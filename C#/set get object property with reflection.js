//http://www.haslo.ch/blog/setproperty-and-getproperty-with-c-reflection/

private object getProperty(object containingObject, string propertyName)
{
    return containingObject.GetType().InvokeMember(propertyName, BindingFlags.GetProperty, null, containingObject, null);
}
 
private void setProperty(object containingObject, string propertyName, object newValue)
{
    containingObject.GetType().InvokeMember(propertyName, BindingFlags.SetProperty, null, containingObject, new object[] { newValue });
}