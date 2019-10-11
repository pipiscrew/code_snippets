        public static string ConstructSearchSQL(string fieldName, string userINPUT)
        {
            userINPUT = userINPUT.Replace( "'", "''");

            if (userINPUT.Contains("*"))
                return  fieldName + " like '" + userINPUT.Replace("*", "%") + (userINPUT.EndsWith("%") ? "" : "%") + "'";
            else
                return  fieldName + "='" + userINPUT + "'";
        }
        
//sample of code

        private void btnSearch_Click(object sender, EventArgs e)
        {
            string wh = "";

            txtCode.Text = txtCode.Text.Trim();
            txtFullName.Text = txtFullName.Text.Trim();
            txtAddress.Text = txtAddress.Text.Trim();
            txtCountry.Text = txtCountry.Text.Trim();
            txtCity.Text = txtCity.Text.Trim();
            txtSuburb.Text = txtSuburb.Text.Trim();
            txtPOBOX.Text = txtPOBOX.Text.Trim();
            txtTelephone1.Text = txtTelephone1.Text.Trim();
            txtEmail.Text = txtEmail.Text.Trim();
            txtOccupation.Text = txtOccupation.Text.Trim();
            txtTaxNo.Text = txtTaxNo.Text.Trim();
            txtTaxOffice.Text = txtTaxOffice.Text.Trim();

            if (txtCode.Text.Length > 0)
                wh += "REC_CODE=" + txtCode.Text;

            if (txtFullName.Text.Length > 0)
                wh += (wh.Length > 0 ? " and " : " ") + General.ConstructSearchSQL("FULLNAME", txtFullName.Text);

            if (txtAddress.Text.Length > 0)
                wh += (wh.Length > 0 ? " and " : " ") + General.ConstructSearchSQL("ADDRESS", txtAddress.Text);

            if (txtCountry.Text.Length > 0)
                wh += (wh.Length > 0 ? " and " : " ") + General.ConstructSearchSQL("COUNTRY", txtCountry.Text);

            if (txtCity.Text.Length > 0)
                wh += (wh.Length > 0 ? " and " : " ") + General.ConstructSearchSQL("CITY", txtCity.Text);

            if (txtSuburb.Text.Length > 0)
                wh += (wh.Length > 0 ? " and " : " ") + General.ConstructSearchSQL("SUBURB", txtSuburb.Text);

            if (txtPOBOX.Text.Length > 0)
                wh += (wh.Length > 0 ? " and " : " ") + General.ConstructSearchSQL("POBOX", txtSuburb.Text);

            if (txtTelephone1.Text.Length > 0)
            {
                wh += (wh.Length > 0 ? " and " : " ");
                wh += General.ConstructSearchSQL("TEL1", txtTelephone1.Text) + " OR " + General.ConstructSearchSQL("TEL2", txtTelephone1.Text) + " OR " + General.ConstructSearchSQL("HOMEPHONE", txtTelephone1.Text) + " OR " + General.ConstructSearchSQL("MOBILE", txtTelephone1.Text) + " OR " + General.ConstructSearchSQL("FAX", txtTelephone1.Text);
            }

            if (txtEmail.Text.Length > 0)
            {
                wh += (wh.Length > 0 ? " and " : " ");
                wh += General.ConstructSearchSQL("EMAIL1", txtEmail.Text) + " OR " + General.ConstructSearchSQL("EMAIL2", txtEmail.Text);
            }

            if (txtOccupation.Text.Length > 0)
                wh += (wh.Length > 0 ? " and " : " ") + General.ConstructSearchSQL("OCCUPATION", txtOccupation.Text);

            if (txtTaxNo.Text.Length > 0)
                wh += (wh.Length > 0 ? " and " : " ") + General.ConstructSearchSQL("TAX_NO", txtTaxNo.Text);

            if (txtTaxOffice.Text.Length > 0)
                wh += (wh.Length > 0 ? " and " : " ") + General.ConstructSearchSQL("TAX_OFFICE", txtTaxOffice.Text);





            if (wh.Length > 0)
            {
                if (ContactType.CheckedIndex != 3)
                    wh += (wh.Length > 0 ? " and " : " ") + "REC_TYPE=" + ContactType.CheckedIndex;

                GRID.DataSource = General.Conn.GetDATATABLE("select REC_ID,REC_CODE,FULLNAME,OCCUPATION,CITY,DATEREC from contacts where " + wh + " order by FULLNAME");
                //   MessageBox.Show( Contacts.GetRecords(wh).Count.ToString());
            }
            else
                MessageBox.Show("Please enter something!", General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Information);
        }