            DialogResult result = MessageBox.Show("This option will delete all rows, are you sure?", General.apTitle, MessageBoxButtons.YesNo, MessageBoxIcon.Information);
            if (result == DialogResult.Yes)
            {
                DG.Rows.Clear();

                for (int i = 2; i < 8; i++)
                {
                    DG.Rows[0].Cells[i].Value = true;
                }
            }