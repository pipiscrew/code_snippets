//http://www.karpach.com/Reflection-Property-Value.htm
//http://stackoverflow.com/questions/1206148/how-to-cast-object-to-type-described-by-type-class

        private void FillListboxCONTACT(string tableName, string fieldData, object PrimaryTableOBJ, KryptonListBox lst)
        {
            try
            {
                System.Reflection.PropertyInfo pi = PrimaryTableOBJ.GetType().GetProperty("REC_ID");
                int REC_ID = (int)(pi.GetValue(PrimaryTableOBJ, null));