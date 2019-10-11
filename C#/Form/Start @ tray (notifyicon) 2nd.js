-form properties minimized

  private void Form1_Load(object sender, EventArgs e)
        {
			//hide from taskbar
            this.Hide();




        private void trayIcon_MouseClick(object sender, MouseEventArgs e)
        {
            if (e.Button == System.Windows.Forms.MouseButtons.Left)
            {
                this.Show();
                this.WindowState = FormWindowState.Normal;

                // Set foreground window.
             //  SetForegroundWindow(this.Handle);
            }
        }

        private void Form1_Resize(object sender, EventArgs e)
        {
            if ( WindowState == FormWindowState.Minimized )
            {
            //to minimize window
            this.WindowState = FormWindowState.Minimized;

            //to hide from taskbar
            this.Hide();
            }
        }