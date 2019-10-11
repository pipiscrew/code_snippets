//json
    {
        "Mnemonic": "wide",
        "opcode": "c4",
        "other": "3/5: opcode...",
        "stack": "[same as for corresponding instructions]",
        "Description": "execute opcode, where opcode is either iload..."
    },
    {
        "Mnemonic": "(no name)",
        "opcode": "cb-fd",
        "other": "",
        "stack": "",
        "Description": "these values are currently unassigned for opcodes and are reserved for future use"
    }
    
    
//frm4

            JavaScriptSerializer oSerializer = new JavaScriptSerializer();

            string x = jOpCodeTable.Properties.Resources.j.ToString();
            var tmpObj = oSerializer.Deserialize<List<who>>(x);

            dataGridView1.DataSource = tmpObj.ToDataTable();


   public  class who
    {
            public string Mnemonic { get; set; }
            public string opcode { get; set; }
            public string Description { get; set; }
            public string other { get; set; }
            public string stack { get; set; }
    }


    public static class g
    {
        public static DataTable ToDataTable<T>(this IList<T> data)
        {
            PropertyDescriptorCollection props =
            TypeDescriptor.GetProperties(typeof(T));
            DataTable table = new DataTable();
            for (int i = 0; i < props.Count; i++)
            {
                PropertyDescriptor prop = props[i];
                table.Columns.Add(prop.Name, prop.PropertyType);
            }
            object[] values = new object[props.Count];
            foreach (T item in data)
            {
                for (int i = 0; i < values.Length; i++)
                {
                    values[i] = props[i].GetValue(item);
                }
                table.Rows.Add(values);
            }

            return table;
        }
    }