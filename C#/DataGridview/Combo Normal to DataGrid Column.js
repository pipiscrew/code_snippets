//http://social.msdn.microsoft.com/forums/en-US/winforms/thread/de7abdcb-30bb-4eb7-acd8-1ce6958e5f4e
//we have a dtagridview and a normal combo 
        private void DG_CellBeginEdit(object sender, DataGridViewCellCancelEventArgs e)
        {
            if (e.ColumnIndex == 2)
            {
                Rectangle rect = DG.GetCellDisplayRectangle(e.ColumnIndex, e.RowIndex,true);
                
                //rect.Location but isnot good.
                comboBox1.Location = new Point(rect.Location.X + (rect.Size.Height / 2), rect.Location.Y + (rect.Size.Height / 2) + 1);
                comboBox1.Width = rect.Width;
                comboBox1.Height = rect.Height;
            }
        }
        
//sample


        private void DG_CellBeginEdit(object sender, DataGridViewCellCancelEventArgs e)
        {
            if (e.ColumnIndex == 2)
            {
                comboBox1.Items.Clear();

                if (DG.CurrentRow.Cells[1].Value != null)
                {
                    Devart.Data.SQLite.SQLiteDataReader dR = General.ConneSQLite.GetDATAREADER("PRAGMA table_info('" + DG.CurrentRow.Cells[1].Value.ToString() + "')");

                    while (dR.Read())
                    {
                        comboBox1.Items.Add(dR["Name"].ToString());
                    }


                    dR.Close();
                    dR.Dispose();

                    if ((DG.CurrentCell.Value != null) && (DG.CurrentCell.Value.ToString().Length > 0))
                        comboBox1.SelectedIndex = comboBox1.FindStringExact(DG.CurrentCell.Value.ToString());
                }

                Rectangle rect = DG.GetCellDisplayRectangle(e.ColumnIndex, e.RowIndex, true);

                //rect.Location
                comboBox1.Location = new Point(rect.Location.X + (rect.Size.Height / 2), rect.Location.Y + (rect.Size.Height / 2) + 1);
                comboBox1.Width = rect.Width;
                comboBox1.Height = rect.Height;

                comboBox1.Visible = true;
                comboBox1.DroppedDown = true;
            }
            else
            {
                comboBox1.Items.Clear();
                comboBox1.Visible = false;
            }

        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            DG.CurrentCell.Value = comboBox1.Text;
        }