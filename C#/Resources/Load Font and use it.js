    PrivateFontCollection MF = new PrivateFontCollection();
 
    Stream SR = Assembly.GetExecutingAssembly().GetManifestResourceStream("About.linedraw.ttf");
    byte[] MemBuff = new byte[((int) (SR.Length - 1L)) + 1];
    SR.Read(MemBuff, 0, (int) SR.Length);
    SR.Close();
    IntPtr FB = Marshal.AllocHGlobal(MemBuff.Length);
    Marshal.Copy(MemBuff, 0, FB, MemBuff.Length);
    this.MF.AddMemoryFont(FB, MemBuff.Length);
    Marshal.FreeHGlobal(FB);
    MemBuff = null;

    this.MovieScroller1.Font = new Font(this.MF.Families[0], 11f, FontStyle.Bold);
    
    
-OR-

            Stream stmFont = Assembly.GetExecutingAssembly().GetManifestResourceStream("WindowsFormsApplication9.acknowtt.ttf");
            if (null != stmFont)
            {
                byte[] reft = new Byte[stmFont.Length];
                stmFont.Read(reft, 0, (int)stmFont.Length);


                IntPtr mfont = Marshal.AllocCoTaskMem(reft.Length);
                if (null != mfont)
                {
                    Marshal.Copy(reft, 0, mfont, reft.Length);
                    PrivateFontCollection fontcollect = new PrivateFontCollection();
                    fontcollect.AddMemoryFont(mfont, reft.Length);
                    Font a = new Font(fontcollect.Families[0].Name,11f, FontStyle.Bold);
                    button1.Font = a;
                    Marshal.FreeCoTaskMem(mfont);
                }
            }