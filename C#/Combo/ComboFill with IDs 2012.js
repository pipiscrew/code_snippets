        private void FillDoy()
        {
            try
            {
                txtDOY_ID.DataSource = null;
                DataTable dT = General.Conne.GetDATATABLE("select rec_id,doy_name from doy order by doy_name");
                DataRow dR = dT.NewRow();
                dR[0] = 0;
                dR[1] = "";
                dT.Rows.InsertAt(dR, 0);

                txtDOY_ID.DataSource = dT;
                txtDOY_ID.DisplayMember = "doy_name";
                txtDOY_ID.ValueMember = "rec_id";
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "FillDoy", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }
        
        //or generic
        private void FillCombo(string tableName, string fieldName, KryptonComboBox cmb)
        {
            try
            {
                cmb.DataSource = null;
                DataTable dT = General.Conne.GetDATATABLE("select rec_id," + fieldName + " from " + tableName + " order by " + fieldName);
                DataRow dR = dT.NewRow();
                dR[0] = 0;
                dR[1] = "";
                dT.Rows.InsertAt(dR, 0);

                cmb.DataSource = dT;
                cmb.DisplayMember = fieldName;
                cmb.ValueMember = "rec_id";

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, cmb.Name, MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }
        
        //then with generic
            FillCombo("doy", "doy_name", txtDOY_ID);
            FillCombo("banks", "BANK_NAME", txtBANK_ID);
            
        
        //on save
            if (txtDOY_ID.SelectedValue == null) //is null when a new value entered
            {
                txtDOY_ID.Text = txtDOY_ID.Text.Trim();

                if (txtDOY_ID.Text.Length > 0)
                    CONTACTSOBJ.DOY_ID = int.Parse ( General.Conne.ExecuteSQLScalar("insert into doy (doy_name) values ('" + General.QuoteMod(txtDOY_ID.Text) + "');SELECT SCOPE_IDENTITY();").ToString());
                else
                    CONTACTSOBJ.DOY_ID = 0;
            }
            else
                CONTACTSOBJ.DOY_ID = (int)txtDOY_ID.SelectedValue;
                
		//get data
		txtDOY_ID.SelectedValue = (int) CONTACTSOBJ.DOY_ID;