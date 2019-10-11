//http://stackoverflow.com/a/3747434

        [DllImport("winmm.dll", EntryPoint = "PlaySound", SetLastError = true)]
        private extern static int PlaySound(byte[] wavData, IntPtr hModule, PlaySoundFlags flags);

        enum PlaySoundFlags
        {
            SND_SYNC = 0x0000,
            SND_ASYNC = 0x0001,
            SND_MEMORY = 0x0004
        }

        private void logoff()
        {
            int x = General.RandomNumber(0, 6);
            byte[] Buffer;
            using (Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("WatertronDesktopCRM."  + x.ToString() + ".wav"))
            {
                Buffer = new byte[stream.Length];
                stream.Read(Buffer, 0, Buffer.Length);
            }

            PlaySound(Buffer, IntPtr.Zero, PlaySoundFlags.SND_MEMORY | PlaySoundFlags.SND_SYNC);

            System.Windows.Forms.Application.Exit();
        }