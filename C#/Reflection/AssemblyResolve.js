//https://stackoverflow.com/a/16744357

//program.cs
static void Main()
{
    AppDomain.CurrentDomain.AssemblyResolve += CurrentDomain_AssemblyResolve;

    Application.EnableVisualStyles();
    Application.SetCompatibleTextRenderingDefault(false);
    Application.Run(new Form1());

}

static Assembly CurrentDomain_AssemblyResolve(object sender, ResolveEventArgs args)
{
    string assemblyName = args.Name.Split(',')[0];
    using (var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(typeof(Program).Namespace + "." + assemblyName + ".dll"))
    {
        byte[] assemblyData = new byte[stream.Length];
        stream.Read(assemblyData, 0, assemblyData.Length);
        return Assembly.Load(assemblyData);
    }
}

//develop the program normally, add references. in the end drag&drop the
//reference dlls to PRJ, mark it as 'embedded resource'. Compile the app.