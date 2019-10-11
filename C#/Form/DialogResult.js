
        private void button2_Click(object sender, EventArgs e)
        {
            this.DialogResult = DialogResult.Cancel;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.DialogResult = DialogResult.OK;
        }
        
        
        #we have call this form^
        
                Warning testUser;
                testUser = new Warning();
                DialogResult result = testUser.ShowDialog();
                
     			if (result == DialogResult.OK)
                {
                }
                
-OR with DialogResult-

            string val=null;

            frmInputbox tmp = new frmInputbox();

            DialogResult result = tmp.ShowDialog(out val);
			tmp.Dispose();
			
            if (result == DialogResult.OK)
            {
                if (val == null)
                {
                    return;
                }
            }

            