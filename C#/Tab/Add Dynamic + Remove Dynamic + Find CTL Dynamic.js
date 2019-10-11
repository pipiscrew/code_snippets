        private void AddTableAStab(string fieldName,ListViewItem lv, string TableName)
        {
            int i;
            int foundTAB = -1;

            for (i = 1; i < TABS.TabPages.Count; i++)
            {
                if (TABS.TabPages[i].Text == TableName)
                {
                    //already exists
                    foundTAB = i;
                    break;
                }
            }

            if (foundTAB > -1)
            {
                //already exists
                //get the datagridview control from tabpage
                'dont use this method (foreach) but Me.TabControl1.SelectedTab.Controls.Find(name, True), check @ the bottom
                foreach (KryptonDataGridView existingDG in TABS.TabPages[foundTAB].Controls)
                {
                    //add datagridrow from listviewitem
                    ConvertListviewitem2DatagridviewRow(fieldName,lv, existingDG);
                    break;
                }
            }
            else
            {

                //setup tabpage
                TabPage tabPage = new TabPage();
                tabPage.BackColor = Color.White;
                tabPage.ImageIndex = 1;
                tabPage.Text = TableName;
                tabPage.Padding = new Padding(3);
                //setup tabpage


                //setup datagrid + columns
                KryptonDataGridView tmpGRID = new KryptonDataGridView();
                tmpGRID.MultiSelect = false;
                tmpGRID.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.DisableResizing;
                tmpGRID.RowHeadersVisible = false;
                tmpGRID.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
                tmpGRID.RowsDefaultCellStyle.Font = new Font("Segoe UI", float.Parse("9"));
                tmpGRID.ColumnHeadersDefaultCellStyle.Font = new Font("Segoe UI", float.Parse("10"));
                tmpGRID.ReadOnly = true;
                tmpGRID.AllowUserToAddRows = false;
                tmpGRID.AllowUserToDeleteRows = false;
                tmpGRID.AllowUserToOrderColumns = false;
                tmpGRID.AllowUserToResizeColumns = true;
                tmpGRID.AllowUserToResizeRows = false;
                tmpGRID.AutoResizeColumns(DataGridViewAutoSizeColumnsMode.AllCells);
                //setup datagrid + columns

                //add columns
                for (i = 0; i < listV2.Columns.Count; i++)
                {
                    tmpGRID.Columns.Add("a" + i.ToString(), listV2.Columns[i].Text);
                }

                tmpGRID.Columns[(int)lstvCol.Col00No].Visible = false;
                tmpGRID.Columns[(int)lstvCol.Col04DestTable].Visible = false;
                tmpGRID.Columns[(int)lstvCol.Col05DestField].Visible = false;
                //tmpGRID.Columns[(int)lstvCol.Col06RelatTable].Visible = false;
                //tmpGRID.Columns[(int)lstvCol.Col07RelatFKField].Visible = false;
                //tmpGRID.Columns[(int)lstvCol.Col08RelatINSfield].Visible = false;
                tmpGRID.Columns[(int)lstvCol.Col10FieldType].Visible = false;
                tmpGRID.Columns[(int)lstvCol.Col11FieldSize].Visible = false;
                tmpGRID.Columns[(int)lstvCol.Col12RelatFKFieldType].Visible = false;
                //add columns

                //add datagrid to tabpage
                tabPage.Controls.Add(tmpGRID);

                //add tabpage to TABCONTROL
                TABS.TabPages.Add(tabPage);

                //set GRID - DOCK fill
                tmpGRID.Dock = DockStyle.Fill;

                //add datagridrow from listviewitem
                ConvertListviewitem2DatagridviewRow(fieldName,lv, tmpGRID);
            }

        }

//remove listview item OR tabpage

        private void DelItemfromTABdatagridview( ListViewItem lv, string TableName)
        {
            int i;
            int foundTAB = -1;

            for (i = 1; i < TABS.TabPages.Count; i++)
            {
                if (TABS.TabPages[i].Text == TableName)
                {
                    //already exists
                    foundTAB = i;
                    break;
                }
            }

            if (foundTAB > -1)
            {
                //already exists
                //get the datagridview control from tabpage
                'dont use this method (foreach) but Me.TabControl1.SelectedTab.Controls.Find(name, True), check @ the bottom
                foreach (KryptonDataGridView existingDG in TABS.TabPages[foundTAB].Controls)
                {

                    for (i = 0; i < existingDG.Rows.Count; i++)
                    {
                        if (existingDG.Rows[i].Cells[(int)lstvCol.Col05DestField].Value.ToString() == lv.SubItems[(int)lstvCol.Col05DestField].Text &&
                            existingDG.Rows[i].Cells[(int)lstvCol.Col06RelatTable].Value.ToString() == lv.SubItems[(int)lstvCol.Col06RelatTable].Text &&
                            existingDG.Rows[i].Cells[(int)lstvCol.Col08RelatINSfield].Value.ToString() == lv.SubItems[(int)lstvCol.Col08RelatINSfield].Text)
                        {
                            existingDG.Rows.RemoveAt(i);
                                break;
                        }
                    }

                    //remove completely the tab if no rows left!
                    if (existingDG.Rows.Count == 0)
                        TABS.TabPages.RemoveAt(foundTAB);

                    break;
                }
            }
            else
            {
                MessageBox.Show("ERROR!!\r\n Couldnt find the field name on any tab!", General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }


/////////////////////////
// FIND A CTL ON TABPAGE OR WHATEVER
//http://social.msdn.microsoft.com/Forums/en-IE/winforms/thread/8e3f5599-2774-4956-a407-8a01304e4927

Dim name As String = "DataGridView1" & index
Dim controls() As Control = Me.TabControl1.SelectedTab.Controls.Find(name, True)
If controls.Length > 0 Then
    Dim dataGridView As DataGridView = DirectCast(controls(0), DataGridView)
    ' work with dataGridView here...
    dataGridView.ForeColor = Color.BlanchedAlmond
End If