http://dranaxum.wordpress.com/2008/02/25/dynamic-load-net-dll-files-creating-a-plug-in-system-c/


        private void button1_Click(object sender, EventArgs e)
        {
            object[] s=new object[2];
            //s = new object[] { }; //when no params
            s[0] = 3;
            s[1] = 3;

            Console.WriteLine("Loading dll…");

            Console.WriteLine(LoadDllMethod("PluginSample.Plugin1.Class1", "Calculate", @"D:\test\c3\bin\Debug\Plugin1.dll", s));
            Console.WriteLine("Dll method called!");
        }

        public  string LoadDllMethod(string title_class, string title_void, string path, object[] parameters)
        {
            Assembly u = Assembly.LoadFile(path);
            Type t = u.GetType(title_class,false,true );

            //working for general classes
            //object obj = t.InvokeMember(null, BindingFlags.Public |
            //BindingFlags.Instance | BindingFlags.CreateInstance, null, null, null);

            //object ret= t.InvokeMember(title_void, BindingFlags.InvokeMethod, null, obj, parameters);
			//return ret.ToString();
			
			//working also and is faster
            object obj = Activator.CreateInstance(t, new object[] { dT });

            Form tmpFRM = (Form)obj;

            tmpFRM.ShowDialog();

            //working for general classes

            //working but only for static classes/methods
            //if (t != null)
            //{
            //    MethodInfo m = t.GetMethod(title_void);
            //    if (m != null)
            //    {
            //        if (parameters.Length >= 1)
            //        {
            //            object[] myparam = new object[1];
            //            myparam[0] = parameters;
            //            return (string)m.Invoke(null, myparam);
            //        }
            //        else
            //            return (string)m.Invoke(null, null);
            //    }
            //}
            //Exception ex = new Exception("method/class not found");
            //throw ex;
        }
    }

