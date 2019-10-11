
        private void toolStripCreateNEW_Click(object sender, EventArgs e)
        {
            string fl="";
            DialogResult s=  General.InputBox("New Database", "Please input the name", ref fl);

            if (s == System.Windows.Forms.DialogResult.OK)
            {
                
                fl = Application.StartupPath + "\\" + fl + ".db3";

                if (File.Exists(fl))
                { General.Mes("Already exists!\r\n\r\nOperation aborted!", MessageBoxIcon.Exclamation); return; }

                using (StreamWriter outfile = new StreamWriter(fl))
                {
                }

                if (General.Conne.GetConnection() != null)
                {
                    General.Conne.ConnectionClose();
                    General.Conne = null;
                }

                SQLiteException exErrorCode;
                General.Conne = new SQLiteClass("Data Source=" + fl + ";Version=3;", out exErrorCode);

                if (General.Conne.GetConnection() == null)
                {
                    MessageBox.Show(exErrorCode.Message, "WordHTML", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }

                General.Conne.ExecuteNonQuery("CREATE TABLE [nodes] " +
                                                "(NODE_ID INTEGER PRIMARY KEY, " +
                                                "PARENT_ID INTEGER, " +
                                                "NODE_TITLE TEXT, " +
                                                "NODE_BODY TEXT, " +
                                                "NODE_DATE TEXT, " +
                                                "NODE_PIC1 BLOB, " +
                                                "NODE_PIC2 BLOB, " +
                                                "NODE_SORT INTEGER);");
                FillTREE();

                General.Mes("Welcome to " + Path.GetFileNameWithoutExtension(fl));
            }
        }