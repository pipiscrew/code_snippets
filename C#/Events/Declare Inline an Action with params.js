//http://stackoverflow.com/questions/371413/how-to-get-the-parameters-of-an-inline-delegate

//the call
            ProcessExecutor PP = new ProcessExecutor(Application.StartupPath + "\\utils\\keytool.exe", "-list -printcert -jarfile \"" + txtAPK.Text + "\"", Application.StartupPath + "\\utils\\");

            PP.OUTputSTR += delegate(string value)
            {
                apkINFO APK_INFO = new apkINFO(value);
                APK_INFO.ShowDialog();
            };

            PP.run();
            
            
//class
        //events 
        public delegate void OutputSTR(string value);
        public event OutputSTR OUTputSTR;
        
        
        
		//raise event
            if (OUTputSTR != null)
                OUTputSTR(output);
