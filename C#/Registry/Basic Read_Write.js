//http://msdn.microsoft.com/en-us/library/ms973902.aspx


        #region " REGISTRY READ/WRITE "
        
        public static bool SetAppRegistrySetting(string itemName, string itemValue)
        {
            try
            {
                Application.UserAppDataRegistry.SetValue(itemName, itemValue);

                return true;
            }
            catch { return false; }
        }

        public static string GetAppRegistrySetting(string itemName)
        {
            try
            {
                if (Application.UserAppDataRegistry.GetValue(itemName) != null)
                    return Application.UserAppDataRegistry.GetValue(itemName).ToString();
                else
                    return null;
            }
            catch { return null; }
        }

        #endregion
        

//how to
General.SetAppRegistrySetting("LastUsed", General.ConnItemCurrentIndex.ToString());

string lastIndex = General.GetAppRegistrySetting("LastUsed");
            if (lastIndex != null)
            {
            }
                


//writes (automatically get appname + app version) at :
[HKEY_CURRENT_USER\Software\QueryAnalyzerPlus\QueryAnalyzerPlus\1.0.0.0]


//---------------------- without app version 

        #region REGISTRY READ/WRITE

        internal static string RegistryRead(string valName)
        {
            try
            {
            RegistryKey key = Registry.CurrentUser;
            RegistryKey key2 = key.CreateSubKey("Software\\" + Application.ProductName);
            
            return key2.GetValue(valName, null) as string;
               }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Error);
                return null;
            }
        }

        internal static void RegistryWrite(string valName, string val)
        {
            try
            {
                RegistryKey key = Registry.CurrentUser;
                RegistryKey key2 = key.CreateSubKey("Software\\" + Application.ProductName);

                key2.SetValue(valName, val, RegistryValueKind.String);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        #endregion
