            DataGridViewCheckBoxCell oCell;
            foreach (DataGridViewRow row in DG.Rows)
            {
                if (row.IsNewRow) continue;

                foreach (TypeDefinition type in assembly.MainModule.Types)
                {
                    oCell = row.Cells[2] as DataGridViewCheckBoxCell;

                    if (null != oCell && null != oCell.Value && true == (bool)oCell.Value)
                    {
                        MessageBox.Show("fg");
                    }
                }
            }