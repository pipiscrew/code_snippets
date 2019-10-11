                Dim _assembly As Reflection.Assembly = Reflection.Assembly.GetExecutingAssembly()

                Dim names As String() = _assembly.GetManifestResourceNames()
                For Each name As String In names
                    System.Console.WriteLine(name)
                Next