static string DynamicMethodCall(string dllPath, string someClass, string someMethodName, object[] parameters)
        {
            Assembly dll = Assembly.LoadFile(dllPath);

            Type type = dll.GetType(someClass);

            if (type == null)
            {
                Exception ex = new Exception("class not found");
                throw ex;
            }

            MethodInfo method = type.GetMethod(someMethodName);

            if (method == null)
            {
                Exception ex = new Exception("method not found");
                throw ex;
            }

            if (parameters.Length >= 1)
            {
                object[] myparam = new object[1];
                myparam[0] = parameters;
                return (string)method.Invoke(null, myparam);
            }
            else
            {
                return (string)method.Invoke(null, null);
            }
        }