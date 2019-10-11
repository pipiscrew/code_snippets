        private void CopyToolStrip_Click(object sender, EventArgs e)
        {
            string tmp = "";

            foreach (DataGridViewRow row in dataGridView1.SelectedRows )
            {
                tmp = tmp + row.Cells[0].Value.ToString().PadRight(30);
                try
                {
                    tmp = tmp + row.Cells[2].Value.ToString().PadRight(30) + "\r\n";
                }
                catch
                { tmp = tmp + "\r\n"; }
            }
        }