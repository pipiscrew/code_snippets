        private void txtSQL_KeyUp(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.F5)
            {
                if (txtSQL.SelectedText.Length == 0)
                    runSQL(txtSQL.Text);
                else
                    runSQL(txtSQL.SelectedText);
            }
        }