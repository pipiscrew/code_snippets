        private void DG_MouseClick(object sender, MouseEventArgs e)
        {
            if (e.Button == System.Windows.Forms.MouseButtons.Right)
            {
                if (DG.SelectedRows.Count >0)
                    contextDG.Show(System.Windows.Forms.Cursor.Position);
            }
        }
        
		//when fullrowselect = true otherwise selectedcells[0]        
        private void toolStripDGcopyCell_Click(object sender, EventArgs e)
        {
            General.Copy2Clipboard(DG.SelectedCells[DG.CurrentCellAddress.X].Value.ToString());
        }
        
        //copy all cells of selected row
        private void toolStripDGcopyRow_Click(object sender, EventArgs e)
        {
            string tmp = "";
            foreach (DataGridViewCell cell in DG.SelectedCells)
            {
                tmp += cell.Value.ToString() + " | ";
                //FirstValue = false;
            }

            if (tmp.Length > 0)
                tmp = tmp.Substring(0, tmp.Length - 3);

            General.Copy2Clipboard(tmp);
        }