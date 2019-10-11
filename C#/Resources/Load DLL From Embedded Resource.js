//this class - http://www.codeproject.com/Articles/528178/Load-DLL-From-Embedded-Resource
//Costura - https://github.com/SimonCropp/Costura
//EmbedWithNoReference - https://github.com/SimonCropp/Costura/wiki/EmbedWithNoReference

//main
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            EmbeddedAssembly.Load("WindowsFormsApplication24.System.Data.SQLite.dll", "System.Data.SQLite.dll");
            EmbeddedAssembly.Load("WindowsFormsApplication24.System.Windows.Forms.Ribbon35.dll", "System.Windows.Forms.Ribbon35.dll");

            AppDomain.CurrentDomain.AssemblyResolve += new ResolveEventHandler(CurrentDomain_AssemblyResolve);

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());
        }

        static System.Reflection.Assembly CurrentDomain_AssemblyResolve(object sender, ResolveEventArgs args)
        {
            Assembly asm = EmbeddedAssembly.Get(args.Name);
            return asm;
        }
        
    

//class
using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Reflection;
using System.Security.Cryptography;

public class EmbeddedAssembly
{
    static Dictionary<string, Assembly> dic = new Dictionary<string, Assembly>();

    public static void Load(string embeddedResource, string fileName)
    {
        byte[] ba = null;
        Assembly asm = null;
        Assembly curAsm = Assembly.GetExecutingAssembly();
        using (Stream stm = curAsm.GetManifestResourceStream(embeddedResource))
        {
            ba = new byte[(int)stm.Length];
            stm.Read(ba, 0, (int)stm.Length);
            try
            {
                asm = Assembly.Load(ba);
                dic.Add(asm.FullName, asm);
                return;
            }
            catch
            {

            }
        }

        bool fileOk = false;
        string tempFile = "";

        using (SHA1CryptoServiceProvider sha1 = new SHA1CryptoServiceProvider())
        {
            string fileHash = BitConverter.ToString(sha1.ComputeHash(ba)).Replace("-", string.Empty);
            tempFile = Path.GetTempPath() + fileName;
            if (File.Exists(tempFile))
            {
                byte[] bb = File.ReadAllBytes(tempFile);
                string fileHash2 = BitConverter.ToString(sha1.ComputeHash(bb)).Replace("-", string.Empty);
                if (fileHash == fileHash2)
                {
                    fileOk = true;
                }
                else
                {
                    fileOk = false;
                }
            }
            else
            {
                fileOk = false;
            }
        }

        if (!fileOk)
        {
            System.IO.File.WriteAllBytes(tempFile, ba);
        }
        
        asm = Assembly.LoadFile(tempFile);
        dic.Add(asm.FullName, asm);
    }

    public static Assembly Get(string assemblyFullName)
    {
        if (dic == null || dic.Count == 0)
            throw new Exception("No assembly is loaded.");
        if (dic.ContainsKey(assemblyFullName))
            return dic[assemblyFullName];
        else
        {
            string[] sa = assemblyFullName.Split(',');
            throw new Exception(sa[0] + " is not loaded.");
        }
    }
}