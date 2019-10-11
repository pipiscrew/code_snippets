                frmDATselect tmp = new frmDATselect(fl);
                tmp.ShowDialog();

                if (tmp.DialogResult.HasValue && tmp.DialogResult.Value)
                {
                    if (General.DeSerialize())
                        valid2run = true;
                }
                else
                    valid2run = false; 