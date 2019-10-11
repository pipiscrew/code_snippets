//Serialize
                SaveLoadSchema export = new SaveLoadSchema();

                XmlSerializer serializer = new XmlSerializer(typeof(SaveLoadSchema));
                //StreamWriter writer = new StreamWriter(saveFileDialog1.FileName);
                MemoryStream writer = new MemoryStream();

                serializer.Serialize(writer, export);

                //convert Memorystrem to byte[]
                byte[] tmpArray = new byte[writer.Length];
                writer.Position = 0;
                writer.Read(tmpArray, 0, (int)writer.Length);
                //convert Memorystrem to byte[]

		Add2Database(saveName, tmpArray)

        private bool Add2Database(string recName, byte[] schema)
        {
            string result;

            //create table
            result = General.ADOClass.ExecuteSQLScalar(ImportMapper.Properties.Resources.CreateTABLE.Replace("$catalog$", txtDBASE.Text));

            //insert JOB
            General.ADOClass.AddParameter("@IMPORT_JOB_NAME", recName, OleDbType.VarWChar, ParameterDirection.Input, 50);
            //field type = image 
            General.ADOClass.AddParameter("@IMPORT_SCHEMA", schema, OleDbType.VarBinary, ParameterDirection.Input, schema.Length);
            General.ADOClass.AddParameter("@newID", 0, OleDbType.Integer, ParameterDirection.Output, 3);

            object NewID = null;
            NewID = General.ADOClass.ExecuteParameter("INSERT INTO [IMPORT_MAPPER] (IMPORT_JOB_NAME,IMPORT_SCHEMA) " +
            " VALUES " +
            "(?,?);SELECT ?=SCOPE_IDENTITY()");

            if (NewID.ToString() == "0")
                return false;
            else
                return true;
        }

//Deserialize
                    XmlSerializer serializer = new XmlSerializer(typeof(SaveLoadSchema));

                    MemoryStream ms = new MemoryStream();
                    byte[] tmpSchema;
                    OleDbDataReader dR = General.ADOClass.GetDATAREADER("select IMPORT_SCHEMA from IMPORT_MAPPER where IMPORT_ID=" + LoadID);

                    if (dR.HasRows)
                        dR.Read();
                    else
                    {
                        MessageBox.Show("No record found!", General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Error);
                        return;
                    }

                    tmpSchema = (byte[])dR[0];
                    ms.Write(tmpSchema, 0, tmpSchema.Length);
                    ms.Position = 0;

                    XmlTextReader reader = new XmlTextReader(ms);

                    // Declare an object variable of the type to be deserialized.
                    SaveLoadSchema lstOBJ = new SaveLoadSchema();

                    // Use the Deserialize method to restore the object's state.
                    lstOBJ = (SaveLoadSchema)serializer.Deserialize(reader);

                    reader.Close();
                    ms.Dispose();


    public class SaveLoadSchema
    {
        public bool AllowUserToInsert { get; set; }

        public List<PRJSchema> Cols { get; set; }

        public List<TableFKSchema> FKSchema { get; set; }

        public List<TableStatements> TableInfo { get; set; }

        public SaveLoadSchema()
        {
        }

    }