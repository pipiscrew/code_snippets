        private void button1_Click(object sender, EventArgs e)
        {
            AssemblyDefinition assembly = null;
            assembly = AssemblyDefinition.ReadAssembly(@"C:\old.exe");
            
            EmbeddedResource  test=new EmbeddedResource("takis",ManifestResourceAttributes.Public,new byte[] {0});

            assembly.MainModule.Resources.Add(test);

            assembly.Write(@"C:\new.exe");
        }
        
        
        
v0.9.3
//http://rongchaua.net/blog/c-how-to-edit-resource-of-an-assembly/
        
            AssemblyDefinition assembly = AssemblyDefinition.ReadAssembly(Assembly.GetExecutingAssembly().GetManifestResourceStream("WindowsFormsApplication64.P.exe")); //AssemblyFactory.GetAssembly(buffer);

            EmbeddedResource erTemp = null;


                erTemp = new EmbeddedResource("P.snk.dat", ManifestResourceAttributes.Public, filepure);
                assembly.MainModule.Resources.Add(erTemp);

            erTemp = new EmbeddedResource("P.patch.dat", ManifestResourceAttributes.Public, Encoding.ASCII.GetBytes(tmp));
            assembly.MainModule.Resources.Add(erTemp);

                assembly.Write(fl);
                assembly = null;