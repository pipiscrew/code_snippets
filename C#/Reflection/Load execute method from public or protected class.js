        textBox1.Text = DynamicMethodCall(Application.StartupPath + "\\ddx.msg.dll", "DDXLibrary.register", "GenRegCode", new object[] { textBox1.Text.ToLower(),MD5("8ujkwxcsc7wb32raxdcvYh=").ToLower()});

        static string DynamicMethodCall(string dllPath, string someClass, string someMethodName, object[] parameters)
        {
            Assembly dll = Assembly.LoadFile(dllPath);

            Type type = dll.GetType(someClass);

            if (type == null)
            {
                Exception ex = new Exception("veteran said :: class not found");
                throw ex;
            }

            object obj = Activator.CreateInstance(type, null);

			########when is protected string CryptKeyMaker
			//MethodInfo method = type.GetMethod(someMethodName, BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance);
            MethodInfo method = type.GetMethod(someMethodName);
            ParameterInfo[] kk = method.GetParameters();

            object res = method.Invoke(obj, parameters );
            return (res.ToString());

        }
        
//original post
//http://www.daniweb.com/software-development/csharp/threads/98148
public void RunClass(string dllName, string className, string methodName, params Object[] parameters)
        {
            // Create the assemblies from our current DLL.
            Assembly _Assemblies = Assembly.LoadFrom(dllName);

            // Get the type that we want from the assemblies.
            //  IE: This would be the fully qualified class name (including namespace)
            //  Example: "Reflectionism.Examples.Example1" or "Reflectionism.Examples.Example2"
            Type _Type = null;
            try
            {
                 _Type = _Assemblies.GetType(className);
            }
            catch (Exception ex)
            {
                Console.WriteLine("\n\nError - couldn't obtain classrd from " + className);
                Console.WriteLine("EXCEPTION OUTPUT\n" + ex.Message + "\n" + ex.InnerException);
                return;
            }

            // Get the desired method we want from the target type.
            MethodInfo _MethodInfo = null;
            try
            {
                _MethodInfo = _Type.GetMethod(methodName, new Type[] { typeof(Object[]) });
            }
            catch (Exception ex)
            {
                Console.WriteLine("\n\nError - couldn't obtain method " + methodName + " from " + className);
                Console.WriteLine("EXCEPTION OUTPUT\n" + ex.Message + "\n" + ex.InnerException);
                return;
            }
        
            // The first parameter to pass into the Invoke Method coming up.
            Object _InvokeParam1 = <strong class="highlight">Activator.CreateInstance</strong>(_Type);
            //Object[] _Params = new Object[] { parameters };

            // This calls the target method ("DisplayMyself").
            //  NOTE: I'm not passing any arguments down to the method being invoked.
            //  Therefore, I'm passing null as my argument, otherwise Invoke takes an
            //  array of Objects.
            _MethodInfo.Invoke(_InvokeParam1, new Object[] { _parameters});
        }