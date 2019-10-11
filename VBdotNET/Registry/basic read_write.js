' Create the first key.
SaveSetting("TestApp","Startup","FirstKey","First")
' Create the first subkey.
SaveSetting("TestApp","FirstKey","FirstSubKey","FirstSub")



   Console.WriteLine (GetSetting("TestApp","Startup","FirstKey"))
   Console.WriteLine (GetAllSettings("TestApp","Startup"))



DeleteSetting("TestApp","FirstKey","SecondSubKey")


microsoft said :
DeleteSetting         Deletes a section or key setting from an application's entry in the registry.
GetSetting         Returns a key setting value from an application's entry in the registry.
GetAllSettings         Returns a list of key settings and their values from an application's entry in the registry.
SaveSetting         Creates or saves an application entry in the registry.



source:
http://msdn.microsoft.com/en-us/library/aa289494%28VS.71%29.aspx