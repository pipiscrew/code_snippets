        private void Form1_Resize(object sender, EventArgs e)
        {
            progressIndicator1.Left = (this.ClientSize.Width - progressIndicator1.Width) / 2;
            progressIndicator1.Top = (this.ClientSize.Height - progressIndicator1.Height) / 2;
        }