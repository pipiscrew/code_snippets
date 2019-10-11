        private void ValidateOmadikaDataTable()
        {
            int ValidateCell;

            foreach (DataRow dR in omadika.Rows)
            {
                if (dR[0] != null)
                {
                    Int32.TryParse(dR[0].ToString(), out  ValidateCell);

                    if (ValidateCell == 0)
                        dR.Delete();
                }
                else
                    dR.Delete();
            }

            omadika.AcceptChanges();
        }