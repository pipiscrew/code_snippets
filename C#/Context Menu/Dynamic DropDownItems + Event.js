        private void MainForm_Load(object sender, EventArgs e)
        {
            General.DeSerializeFile2List();

            ToolStripMenuItem ts;
            int i=0;

            foreach (var item in General.Connections)
            {
                ts = new ToolStripMenuItem();
                ts.Tag = i;

                if ((General.dbTypes)item.TYPE == General.dbTypes.SQLSERVER)
                {
                    ts.Text = item.serverName + " " + item.dbaseName;
                    toolStripNewSQLSERVER.DropDownItems.Add(ts);
                    ts.Click += new System.EventHandler(SQLSERVERConnect_Clicked);
                }
                else if ((General.dbTypes)item.TYPE == General.dbTypes.SQLite)
                {
                    ts.Text = item.filename;
                    toolStripSQLITE.DropDownItems.Add(ts);
                    ts.Click += new System.EventHandler(SQLiteConnect_Clicked);
                }

                i+=1;
            }
        }
        
        

        private void SQLSERVERConnect_Clicked(object sender, EventArgs e)
        {
            try
            {
                ToolStripMenuItem tmp = (sender as ToolStripMenuItem);

                General.DB = new SQLServer((int)tmp.Tag , imageList1);

                General.Mes(General.DB.Connect(), MessageBoxIcon.Exclamation); //IF ERROR occured in class

                TR.Model = General.DB.GetSchemaModel();
            }
            catch (Exception ex)
            {
                General.Mes(ex.Message);
            }
        }


        private void SQLiteConnect_Clicked(object sender, EventArgs e)
        {
            try
            {
                ToolStripMenuItem tmp = (sender as ToolStripMenuItem);

                General.DB = new SQLite((int)tmp.Tag, imageList1);

                General.Mes(General.DB.Connect(), MessageBoxIcon.Exclamation); //IF ERROR occured in class

                TR.Model = General.DB.GetSchemaModel();
            }
            catch (Exception ex)
            {
                General.Mes(ex.Message);
            }
        }