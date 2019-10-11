//http://msdn.microsoft.com/en-us/library/ff967559%28VS.92%29.aspx
//This method is located in the LicenseInformation
// class of the Microsoft.Phone.Marketplace namespace

  if (!licenseInfo.IsTrial())
  {
    Enter_level_2();
  }
  else
  {
    Show_Buy_Now_Page();
  }
