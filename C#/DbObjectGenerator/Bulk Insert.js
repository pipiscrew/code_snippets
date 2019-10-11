
            ACCOUNT_TRANSACTIONS OBJ = new ACCOUNT_TRANSACTIONS(General.Conne.GetConnection());


            foreach (DataGridViewRow item in GRID.Rows)
            {
                //if the date not set in row ignore it!
                if (item.Cells[col1DateV].Value.ToString().Trim().Length == 0)
                    continue;

                OBJ.Clear();
                OBJ.ACCOUNT_ID = General.ACCOUNT_ID;
                OBJ.TRANS_DATE = DateTime.Parse(item.Cells[col1DateV].Value.ToString());
                OBJ.REASON = item.Cells[col2AitiologiaV].Value.ToString();

                if (item.Cells[col3XrewshV].Value.ToString().Trim().Length == 0)
                    OBJ.CHARGE = 0;
                else
                    OBJ.CHARGE = decimal.Parse(item.Cells[col3XrewshV].Value.ToString());

                
                OBJ.FIX_CALC = item.Cells[col4YpologismosV].Value.ToString();


                if (item.Cells[col5DiaforaV].Value.ToString().Trim().Length == 0)
                    OBJ.CHARGE_DIFF = 0;
                else
                    OBJ.CHARGE_DIFF = decimal.Parse(item.Cells[col5DiaforaV].Value.ToString());

                if (!OBJ.Insert())
                    CountErrors += 1;
            }