        private void ExceptionForm_Load(object sender, EventArgs e)
        {
            pictureBox1.Image = GetBitmap(SystemIcons.Error);
        }

        public Bitmap GetBitmap(Icon icon)
        {
            Bitmap bmp = new Bitmap(icon.Width, icon.Height);
            //Create temporary graphics
            Graphics gxMem = Graphics.FromImage(bmp);
            //Draw the icon
            gxMem.DrawIcon(icon, 0, 0);
            //Clean up
            gxMem.Dispose();
            return bmp;
        }
