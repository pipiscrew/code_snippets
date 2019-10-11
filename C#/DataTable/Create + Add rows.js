               DataTable TableLines;
                DataRow TableRows;
                DataColumn col;

                TableLines = new DataTable("LinesTable");

                col = new DataColumn("Date",Type.GetType("System.DateTime"));
                TableLines.Columns.Add(col);
                col = new DataColumn("Note",Type.GetType("System.String"));
                TableLines.Columns.Add(col);
        
                TableLines.AcceptChanges();

                string  DateVal=null;
                DateTime dateVAL;
             bool res;
            while (rd.Read())
            {
                try { 
                    DateVal = ParseDate(rd.GetDecimal(0).ToString(), true).ToString(); 
                    res=   DateTime.TryParse(DateVal,out dateVAL);
                }
                catch { 
                        dateVAL=DateTime.MinValue;    
                    }

                TableRows = TableLines.NewRow();
                TableRows[0] = DateVal;
                TableRows[1] = CleanUPnote(rd.GetString(2));
                TableLines.Rows.Add(TableRows);

            }

            dataGridView1.DataSource = TableLines;