            foreach (DataGridViewRow dR in resultsGRID.Rows)
            {
                if ((Boolean)dR.Cells[(int)gridAtomikaCols.col18Status].Value == false)
                {
                    dR.DefaultCellStyle.BackColor = Color.OrangeRed;
                    continue;
                }
