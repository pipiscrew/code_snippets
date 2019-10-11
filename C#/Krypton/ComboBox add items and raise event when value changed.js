//http://stackoverflow.com/questions/5652957/what-event-catches-a-change-of-value-in-a-combobox-in-a-datagridviewcell
        private void fillProducts()
        {
            KryptonDataGridViewComboBoxColumn codes = (KryptonDataGridViewComboBoxColumn)dg.Columns[0];
            KryptonDataGridViewComboBoxColumn descr = (KryptonDataGridViewComboBoxColumn)dg.Columns[1];

            codes.Items.Clear();
            MySqlDataReader dr = General.Conne.GetDATAREADER("select product_id,code,description from products order by code");

            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    codes.Items.Add(dr.GetString(1));
                    descr.Items.Add(dr.GetString(2));
 
                }
            }

            if (dr != null)
                dr.Close();
            
        }


        private void dg_EditingControlShowing(object sender, DataGridViewEditingControlShowingEventArgs e)
        {
            KryptonComboBox combo = e.Control as KryptonComboBox;
            if (combo != null)
            {
                combo.SelectedIndexChanged -= new EventHandler(ComboBox_SelectedIndexChanged);
                combo.SelectedIndexChanged += new EventHandler(ComboBox_SelectedIndexChanged);
            }
        }

        private void ComboBox_SelectedIndexChanged(object sender, EventArgs e)
        {
            KryptonComboBox cb = (KryptonComboBox)sender;
            string item = cb.Text;
            if (item != null)
                MessageBox.Show(item);
        }

