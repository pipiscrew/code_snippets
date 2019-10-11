/http://stackoverflow.com/questions/1370538/drag-files-or-folders-in-textbox-c

'allodrop = true
'readonly = true

        #region TextBox DragDrop
        private void textBox1_DragDrop(object sender, DragEventArgs e)
        {
            string[] FileList = (string[])e.Data.GetData(DataFormats.FileDrop, false);

            if (FileList[0].ToLower().EndsWith(".dll") || FileList[0].ToLower().EndsWith(".exe"))
                textBox1.Text = FileList[0];

            //string s = "";

            //foreach (string File in FileList)
            //    s = s + " " + File;
            //textBox1.Text = s;

        }

        private void textBox1_DragEnter(object sender, DragEventArgs e)
        {
            if (e.Data.GetDataPresent(DataFormats.FileDrop))
                e.Effect = DragDropEffects.Copy;
            else
                e.Effect = DragDropEffects.None;

        }
        #endregion