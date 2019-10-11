//http://www.codeproject.com/Tips/624888/Converting-DataTable-to-JSON-Format-in-Csharp-and

        public string GetJson(DataTable dt)
        {
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();

            Dictionary<string, object> row = null;

            foreach (DataRow dr in dt.Rows)
            {
                row = new Dictionary<string, object>();

                foreach (DataColumn col in dt.Columns)
                    row.Add(col.ColumnName.Trim(), dr[col]);

                rows.Add(row);
            }
            return serializer.Serialize(rows);
        }
        
        
//enchantment  MaxJsonLength

        public string GetJson4Datatable(DataTable dt)
        {
            // int.max - http://brianreiter.org/tag/net/
            //http://msdn.microsoft.com/en-us/library/system.web.configuration.scriptingjsonserializationsection.maxjsonlength(v=vs.90).aspx


            System.Web.Script.Serialization.JavaScriptSerializer serializer = new System.Web.Script.Serialization.JavaScriptSerializer();
            serializer.MaxJsonLength = int.MaxValue;

            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            Dictionary<string, object> row = null;

            //MessageBox.Show(HasNull(dt).ToString());
            foreach (DataRow dr in dt.Rows)
            {
                row = new Dictionary<string, object>();
                foreach (DataColumn col in dt.Columns)
                {
                    row.Add(col.ColumnName.Trim(), dr[col]);
                }
                rows.Add(row);
            }
            return serializer.Serialize(rows);
        }
