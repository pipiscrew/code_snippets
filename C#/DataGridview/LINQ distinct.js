
lbl_right_unique.Text = "unique lines : " + (from DataGridViewRow row in dg.Rows
                                          select row.Cells[0].Value).Distinct().Count();