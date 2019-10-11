//http://www.bpsoftware.com/blog/post/2011/11/17/C-Save-a-Form%E2%80%99s-Size-and-Location.aspx
 
 HKEY_CURRENT_USER\Software\[Control.CompanyName]\[Control.ProductName]\[Control.ProductVersion]
 
 //read
 int x = (int)Application.UserAppDataRegistry.GetValue("LocationX");
 
 //write
 Application.UserAppDataRegistry.SetValue("LocationX", this.DesktopLocation.X);