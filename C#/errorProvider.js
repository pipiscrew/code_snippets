        private void txtTaxNo_Validated(object sender, EventArgs e)
        {
            if (!General.CheckAFM(txtTaxNo.Text))
                errorProvider1.SetError(txtTaxNo, "Λάθος Α.Φ.Μ.");
            else
                errorProvider1.SetError(txtTaxNo, "");
        }
        
        //or
        
        private void txtAFM_TextChanged(object sender, EventArgs e)
        {
            if (txtAFM.Text.Length > 0 && !General.CheckAFM(txtAFM.Text))
                errorProvider1.SetError(txtAFM, "Λάθος Α.Φ.Μ.");
            else
                errorProvider1.SetError(txtAFM, "");
        }