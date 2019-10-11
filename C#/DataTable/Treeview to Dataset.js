        private DataSet CreateDSforTreeview()
        {
            DataSet tmpDS = new DataSet();
            DataTable tbl;
            for (int i = 0; i < tr.Nodes.Count; i++)
            {
                tbl = new DataTable(tr.Nodes[i].Text);
                tbl.Columns.Add("Name");
                tbl.Columns.Add("Type");
                tbl.Columns.Add("FieldType");

                for (int x = 0; x <  tr.Nodes[i].Nodes.Count;x++)
			    {

                    DataRow dR = tbl.NewRow();
                    dR["Name"] = GetOnlyFieldName( tr.Nodes[i].Nodes[x].Text);
                    dR["Type"] = GetOnlyFieldTypeSQLite(tr.Nodes[i].Nodes[x].Text ).ToUpper();
                    dR["FieldType"] = tr.Nodes[i].Nodes[x].ImageIndex;
                    tbl.Rows.Add(dR);
			    }

                tmpDS.Tables.Add(tbl);
            }

            return tmpDS;
        }