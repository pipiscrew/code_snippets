//http://social.msdn.microsoft.com/Forums/vstudio/en-US/27495079-fce4-4190-8b7a-31ad58603759/troubles-with-invoking-entrypoint-of-assembly

		System.Threading.Thread th;

 
		private void button3_Click(object sender, EventArgs e)
		{
			th = new System.Threading.Thread(new System.Threading.ThreadStart(launcher));
			th.Start();
		}

        private void launcher()
        {
            byte[] b = System.IO.File.ReadAllBytes(@"G:\a3\PasswordGeneratorSetupF\New folder\New folder\PasswordGenerator.exe"); //Application.StartupPath + "\\PasswordGenerator.exe");

            System.Reflection.Assembly asm = System.Reflection.Assembly.Load(b);

            Object[] args = new Object[1];
            args[0] = new String[0];

            asm.EntryPoint.Invoke(null, args);
        }
        
        
//
String asmPath = @"D:\Working\FromsTest.exe";

Byte[] asmData = File.ReadAllBytes(asmPath);

Assembly asm = Assembly.Load(asmData);

Object[] Args = new Object[0];

asm.EntryPoint.Invoke(null, Args);