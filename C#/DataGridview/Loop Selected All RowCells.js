        private void CopyToolStrip_Click(object sender, EventArgs e)
        {
            string tmp = "";

            foreach (DataGridViewCell cell in dataGridView1.SelectedCells)
            {
                tmp += cell.Value.ToString() + "\r\n";
            }

        }