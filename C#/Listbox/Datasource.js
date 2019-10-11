        private void FillSponsors()
        {
            try
            {
                lstSponsors.DataSource = null;
                DataTable dT = General.Conne.GetDATATABLE("select rec_id,sponsor_name from CONTRACT_SPONSORS where CONTRACT_ID= " + CONTRACTSOBJ.REC_ID.ToString() + " order by sponsor_name");

                lstSponsors.DataSource = dT;
                lstSponsors.DisplayMember = "sponsor_name";
                lstSponsors.ValueMember = "rec_id";
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "FillSponsors", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }