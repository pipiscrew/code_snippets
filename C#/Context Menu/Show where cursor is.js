        private void checkedListBox1_MouseUp(object sender, MouseEventArgs e)
        {
            if (e.Button == System.Windows.Forms.MouseButtons.Right)
                contextCheckList.Show(System.Windows.Forms.Cursor.Position);
        }