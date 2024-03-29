There are two ways to set this UseUnsafeHeaderParsing value:

1) on the {exefile}.appconfig  settings file:

<system.net>
<settings>
<httpWebRequest useUnsafeHeaderParsing = "true"/>
</settings>
</system.net>

2)

public static bool SetAllowUnsafeHeaderParsing20()
{
   //Get the assembly that contains the internal class
  Assembly aNetAssembly = Assembly.GetAssembly(typeof(System.Net.Configuration.SettingsSection));
  if (aNetAssembly != null)
  {
    //Use the assembly in order to get the internal type for the internal class
    Type aSettingsType = aNetAssembly.GetType("System.Net.Configuration.SettingsSectionInternal");
    if (aSettingsType != null)
    {
      //Use the internal static property to get an instance of the internal settings class.
      //If the static instance isn't created allready the property will create it for us.
      object anInstance = aSettingsType.InvokeMember("Section",
      BindingFlags.Static | BindingFlags.GetProperty | BindingFlags.NonPublic, null, null, new object[] { });
      if (anInstance != null)
      {
        //Locate the private bool field that tells the framework is unsafe header parsing should be allowed or not
        FieldInfo aUseUnsafeHeaderParsing = aSettingsType.GetField("useUnsafeHeaderParsing", BindingFlags.NonPublic | BindingFlags.Instance);
        if (aUseUnsafeHeaderParsing != null)
        {
          aUseUnsafeHeaderParsing.SetValue(anInstance, true);
          return true;
        }
      }
    }
  }
  return false;
}
