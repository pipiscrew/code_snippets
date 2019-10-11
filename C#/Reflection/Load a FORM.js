            Assembly a = Assembly.LoadFile(@"D:\a3\BE\BinaryEditor_decrypted.exe");

            Type type = a.GetType("7kZw27GAkskh0ebuaXP.bVy0rGGPlpHhmyc8jEd");

            Form tmp = (Form) Activator.CreateInstance(type,"test");
            tmp.ShowDialog();
            
--

            Assembly file = Assembly.LoadFile(@"D:\downloads\useful\KryptonSuiteExtract\ComponentFactory.Krypton.Toolkit.dll"                );

            Type frm = file.GetType("ComponentFactory.Krypton.Toolkit.KryptonForm");

            Form obj = (Form) Activator.CreateInstance(frm);
            obj.ShowDialog();
