        public static byte[] StrToByteArray(string str)
        {
            System.Text.ASCIIEncoding encoding = new System.Text.ASCIIEncoding();
            return encoding.GetBytes(str);
        }
        
        
            string tmp = "";
            foreach (ListViewItem item in lstv.SelectedItems)
            {
                tmp += item.Tag.ToString() + ",";
            }

            tmp = tmp.Substring(0, tmp.Length - 1);

            if (General.StrToByteArray(tmp).Length >= 10000)
            {
                MessageBox.Show("Too much files, please select less", General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Information);
                return;
            }