
        OleDbDataAdapter da = new OleDbDataAdapter(); //fires the update
        OleDbCommandBuilder cb; //public because, when going for update thats the time generate the statements.
        
        private void Contact_Load(object sender, EventArgs e)
        {
            General.DB = new ADOnet(General.DBConnString);

            da = new OleDbDataAdapter();
            da.SelectCommand = General.DB.GetCommand("select CONTACT_ID,CONTACT_NAME as [Full Name],CONTACT_NUMBER1 as [Telephone1],CONTACT_NUMBER2 as [Telephone2],CONTACT_NUMBER3 as [Telephone3],CONTACT_NUMBER4 as [Telephone4],CONTACT_NOTE as [Comments]  from CONTACTS order by CONTACTS.CONTACT_NAME"); //new OleDbCommand(qry,General.DB. conn);
            da.UpdateCommand  = new OleDbCommandBuilder(da).GetUpdateCommand();
            da.InsertCommand  = new OleDbCommandBuilder(da).GetInsertCommand();
            cb = new OleDbCommandBuilder(General.ContactsDA);
            
            DataSet ds = new DataSet();

            da.MissingSchemaAction = MissingSchemaAction.AddWithKey;

            da.Fill(ds, "CONTACTS");

            General.ContactsDT = null;
            General.ContactsDT = ds.Tables["CONTACTS"];
            
            DG.DataSource = General.ContactsDT;

            DG.Columns[0].Visible = false; 
        }
        
        private void kryptonButton1_Click(object sender, EventArgs e)
        {
            General.ContactsDT = (DataTable)DG.DataSource;

            da.Update(General.ContactsDT);

            General.DB.Close();

            this.Close();
        }