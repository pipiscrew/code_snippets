//frm35 needs ref to System.Web.Extensions

        private void toolStripJSONSave_Click(object sender, EventArgs e)
        {
            System.Web.Script.Serialization.JavaScriptSerializer oSerializer = new System.Web.Script.Serialization.JavaScriptSerializer();
            string sJSON = oSerializer.Serialize(bb);

            File.WriteAllText(@"D:\path.txt", sJSON, Encoding.UTF8);
        }

        private void toolStripJSONLoad_Click(object sender, EventArgs e)
        {
            string tmp = File.ReadAllText(@"D:\path.txt", Encoding.UTF8);

            JavaScriptSerializer oSerializer = new JavaScriptSerializer();
            bb = oSerializer.Deserialize<BindingList<BackupItem>>(tmp);
        }