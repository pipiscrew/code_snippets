        public frmTemplate()
        {
            InitializeComponent();

            pictureBox1.AllowDrop = true;
        }
        

        private void pictureBox1_DragDrop(object sender, DragEventArgs e)
        {
            if (e.Data.GetDataPresent(DataFormats.FileDrop))
            {
                string[] data = (string[])e.Data.GetData(DataFormats.FileDrop);

                if (data[0].ToString().ToLower().EndsWith(".png"))
                {
                    pictureBox1.Image = Image.FromFile(data[0].ToString());
                    pictureBox1.Tag = data[0].ToString();
                }

            }
        }

        private void pictureBox1_DragEnter(object sender, DragEventArgs e)
        {
            if (e.Data.GetDataPresent(DataFormats.FileDrop))
            {
                e.Effect = DragDropEffects.Move | DragDropEffects.Copy | DragDropEffects.Scroll;
            }
        }