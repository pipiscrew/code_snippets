
        private void DG_CellEnter(object sender, DataGridViewCellEventArgs e)
        {
            DG.BeginEdit(false);
            if (e.ColumnIndex == 2)// the combobox column index
            {
                if (this.DG.EditingControl != null
                    && this.DG.EditingControl is ComboBox)
                {
                    ComboBox cmb = this.DG.EditingControl as ComboBox;
                    cmb.DroppedDown = true;
                }
            }
        }