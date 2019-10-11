//http://stackoverflow.com/questions/837488/how-can-i-get-the-applications-path-in-net-in-a-console-app
System.Reflection.Assembly.GetExecutingAssembly().Location

or

AppDomain.CurrentDomain.BaseDirectory


//GetCurrentEXE name without reflection
            var currentExe = Environment.GetCommandLineArgs()[0];
            Console.WriteLine(currentExe);
