                DataGridViewSelectedRowCollection selectedOnly = dg1.SelectedRows;

                foreach (DataGridViewRow lv in selectedOnly)
                {
                    lv.Selected = false;
                }
