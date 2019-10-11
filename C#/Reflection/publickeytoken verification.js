//rev1
        internal static void dd()
        {
            Assembly callingAssembly = Assembly.GetCallingAssembly();
            Assembly executingAssembly = Assembly.GetExecutingAssembly();

            byte[] pToken = executingAssembly.GetName().GetPublicKeyToken();

            if ((callingAssembly != executingAssembly) || pToken == null)
            {
                throw new System.BadImageFormatException();
            }
            else
            {

                if (pToken.Length ==0  || System.BitConverter.ToInt64(pToken, 0) != -1462392931811804571)
                    throw new System.BadImageFormatException();
            }
        }


//rev0
        internal static void dd()
        {
            Assembly executingAssembly = Assembly.GetExecutingAssembly();
            byte[] pToken = executingAssembly.GetName().GetPublicKeyToken();
            if (pToken == null)
            {
                throw new System.BadImageFormatException();
            }
            else
            {
              
                if (System.BitConverter.ToInt64(pToken, 0) != -1462392931811804571)
                    throw new System.BadImageFormatException();
            }
        }