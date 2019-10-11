        private void button4_Click(object sender, EventArgs e)
        {
            CheckUnCheck(true);
        }

        private void CheckUnCheck(bool val)
        {
            for (int i = 0; i < lst.Items.Count; i++)
                lst.SetItemChecked(i,val);
        }

        private void button5_Click(object sender, EventArgs e)
        {
            CheckUnCheck(false);
        }