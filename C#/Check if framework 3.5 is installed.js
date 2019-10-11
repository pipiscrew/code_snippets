//http://stackoverflow.com/questions/16178/best-way-to-determine-if-net-3-5-is-installed
//http://www.codeproject.com/KB/dotnet/frameworkversiondetection.aspx
        static bool HasNet35()
        {
            try
            {
                AppDomain.CurrentDomain.Load(
                        "System.Core, Version=3.5.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");
                return true;
            }
            catch
            {
                return false;
            }
        }