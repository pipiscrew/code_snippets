//can be a simple datatable, verified.

        private void toolStripMenuItem4_Click(object sender, EventArgs e)
        {
            if (textBox1.Text[1] != char.Parse(":"))
                return;

            string tmp = General.SaveDialog(Path.GetDirectoryName(textBox1.Text) + "\\" + Path.GetFileNameWithoutExtension(textBox1.Text) + General.MakeSafeFilename(DateTime.Now.ToString()) + "-PRJ.xml", "xml", "XML (*.xml)|*.xml");

            if (tmp.Length > 0)
                Serialize(tmp);
        }

        private void Serialize(string fname)
        {
            DataSet dsd = new DataSet();
            dsd.Tables.Add("veteran");

            try
            {
                for (int i = 0; i < DG.Columns.Count-2; i++)
                {
                    if (i < 2)
                        dsd.Tables[0].Columns.Add(new DataColumn(DG.Columns[i].HeaderText.Replace(" ", "") + "w", typeof(System.String)));
                    else
                        dsd.Tables[0].Columns.Add(new DataColumn(DG.Columns[i].HeaderText.Replace(" ", "") + "w", typeof(System.Boolean)));
                }

                DG.EndEdit(0);
                foreach (DataGridViewRow dr in DG.Rows)
                {
                    if (dr.IsNewRow) break;

                   
                    dsd.Tables[0].Rows.Add(new object[] { NoNull(dr.Cells[0].Value), NoNull(dr.Cells[1].Value), dr.Cells[2].Value, dr.Cells[3].Value, dr.Cells[4].Value, dr.Cells[5].Value, dr.Cells[6].Value, dr.Cells[7].Value});
                }

                dsd.Tables[0].WriteXml(fname, XmlWriteMode.WriteSchema, false);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Information);
            }


        }

        public string NoNull(object obj)
        {
            if (obj == null)
                return "/\\";

            string str = obj.ToString();
            if (str == null)
            {
                return "";
            }
            return str;
        }

        private string CheckNull(object obj)
        {
            if (obj == null)
            {
                return null;
            }
            string str = obj.ToString();
            if ((str == null) || ((str != null) && (str == "/\\")))
            {
                return null;
            }
            return str;
        }

        private void toolStripMenuItem5_Click(object sender, EventArgs e)
        {
            if (textBox1.Text[1] != char.Parse(":"))
                return;

            string tmp = General.OpenDialog(Path.GetDirectoryName(textBox1.Text) + "\\", "xml", "XML (*.xml)|*.xml");

            if (tmp.Length > 0)
            {
                DeSerialize(tmp);
            }

        }

        private void DeSerialize(string fname)
        {
            try
            {

                DataSet dsd = new DataSet();
                dsd.ReadXmlSchema(fname);
                dsd.ReadXml(fname);
                DG.Rows.Clear();

                foreach (DataRow dr in dsd.Tables[0].Rows)
                {
                    DG.Rows.Add(new object[] { CheckNull(dr.ItemArray[0]), CheckNull(dr.ItemArray[1]), (dr.ItemArray[2]), (dr.ItemArray[3]), (dr.ItemArray[4]), (dr.ItemArray[5]), (dr.ItemArray[6]), (dr.ItemArray[7])});
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
        }
    }