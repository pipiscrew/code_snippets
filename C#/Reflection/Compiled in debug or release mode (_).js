//http://www.codeproject.com/Tips/323212/Accurate-way-to-tell-if-an-assembly-is-compiled-in

        public static bool IsInDebugMode(string FileName)
        {
            return IsInDebugMode(FileName, false);
        }
 
        public static bool IsInDebugMode(string FileName, bool IsAssemlbyName)
        {
            System.Reflection.Assembly assembly;
            if (IsAssemlbyName)
                assembly = System.Reflection.Assembly.Load(FileName);
            else
                assembly = System.Reflection.Assembly.LoadFile(FileName);
            return IsInDebugMode(assembly);
        }
 
        public static bool IsInDebugMode(System.Reflection.Assembly Assembly)
        {
            var attributes = Assembly.GetCustomAttributes(typeof(System.Diagnostics.DebuggableAttribute), false);
            if (attributes.Length > 0)
            {
                var debuggable = attributes[0] as System.Diagnostics.DebuggableAttribute;
                if (debuggable != null)
                    return (debuggable.DebuggingFlags & System.Diagnostics.DebuggableAttribute.DebuggingModes.Default) == System.Diagnostics.DebuggableAttribute.DebuggingModes.Default;
                else
                    return false;
            }
            else
                return false;
        }