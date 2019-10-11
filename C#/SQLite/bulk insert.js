//Setups for 32-bit Windows (.NET Framework 4.5)
//http://system.data.sqlite.org/downloads/1.0.84.0/sqlite-netFx45-setup-bundle-x86-2012-1.0.84.0.exe
//http://system.data.sqlite.org/index.html/artifact/99229e8a9f2b2617

//15.000 recors in 5sec

		SQLClass connS;
		SQLiteClass conn;
		
        private void Form1_Load(object sender, EventArgs e)
        {
			conn = new SQLiteClass("Data Source=dbase.db3;Pooling=true;FailifMissing=false;");
            string tbl = "create table products ( id integer primary key autoincrement, Product_Code text, Product_ID text, CategoryCaption_Title text, ProductCaption_Title text, ManufacturerCaption_Title text, AvailabilityText text, AvailabilityImage text)";

            if (conn.ExecuteNonQuery(tbl) == 0)
                label5.Visible = true;

			System.Data.SqlClient.SqlException error = null;
			
            connS = new SQLClass(txtConnection.Text, out error);

            if (error != null)
            {
                MessageBox.Show(error.Message, Application.ProductName);
                return;
            }
            else
            {
                label4.Visible = true;

            }
        }
            

            SqlDataReader dr = connS.GetDATAREADER(NakasWebServiceFetchAvailability.Properties.Resources.insert_sqlserver_to_sqlite);

            var tran1 = conn.GetConnection().BeginTransaction();

            using (SQLiteCommand cmd = new SQLiteCommand("insert into products (Product_Code , Product_ID, CategoryCaption_Title , ProductCaption_Title , ManufacturerCaption_Title,AvailabilityText, AvailabilityImage) values (@Product_Code , @Product_ID, @CategoryCaption_Title , @ProductCaption_Title , @ManufacturerCaption_Title, @AvailabilityText, @AvailabilityImage)", conn.GetConnection()))
            {
                SQLiteParameterCollection Params = cmd.Parameters;

                while (dr.Read())
                {
                    Params.Clear();

                    Params.Add(new SQLiteParameter("@Product_Code", dr["PRODUCT_CODE"]));
                    Params.Add(new SQLiteParameter("@Product_ID", dr["Product_ID"]));
                    Params.Add(new SQLiteParameter("@CategoryCaption_Title", dr["CategoryCaption_Title"]));
                    Params.Add(new SQLiteParameter("@ProductCaption_Title", dr["ProductCaption_Title"]));
                    Params.Add(new SQLiteParameter("@ManufacturerCaption_Title", dr["ManufacturerCaption_Title"]));
                    Params.Add(new SQLiteParameter("@AvailabilityText", null));
                    Params.Add(new SQLiteParameter("@AvailabilityImage", null));

                    cmd.Prepare();
                    cmd.ExecuteScalar();
                }
            }
            tran1.Commit();

            MessageBox.Show("Insert done!");