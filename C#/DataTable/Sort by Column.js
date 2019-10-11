http://stackoverflow.com/questions/1208548/datatable-defaultview-sort-doesnt-sort


            DataTable TableLines;
            DataRow TableRows;
            DataColumn col;

            TableLines = new DataTable("buff");

            col = new DataColumn("col_name", Type.GetType("System.String"));
            TableLines.Columns.Add(col);

            col = new DataColumn("col_type", Type.GetType("System.String"));
            TableLines.Columns.Add(col);

            col = new DataColumn("col_size", Type.GetType("System.String"));
            TableLines.Columns.Add(col);

            col = new DataColumn("dest_table", Type.GetType("System.String"));
            TableLines.Columns.Add(col);

            col = new DataColumn("dest_field", Type.GetType("System.String"));
            TableLines.Columns.Add(col);

            TableLines.AcceptChanges();

            for (int i = 0; i < listV2.Items.Count; i++)
            {
                TableRows = TableLines.NewRow();
                TableRows[0] = listV2.Items[i].Text; //col_name
                TableRows[1] = listV2.Items[i].SubItems[1].Text; //col_type
                TableRows[2] = listV2.Items[i].SubItems[2].Text; //col_size
                TableRows[3] = listV2.Items[i].SubItems[3].Text; //dest_table
                TableRows[4] = listV2.Items[i].SubItems[4].Text; //dest_field

                TableLines.Rows.Add(TableRows);
            }


            TableLines.DefaultView.Sort = "dest_table";

            foreach (DataRowView dR in TableLines.DefaultView)
            {
                Console.WriteLine(dR["dest_table"]);
            }
