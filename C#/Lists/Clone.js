//http://stackoverflow.com/questions/222598/how-do-i-clone-a-generic-list-in-c

        public static List<TableStatements> DeepCloneTableStatements(object obj)
        {
            List<TableStatements> objResult = null;
            using (MemoryStream ms = new MemoryStream())
            {
                BinaryFormatter bf = new BinaryFormatter();
                bf.Serialize(ms, obj);

                ms.Position = 0;
                objResult = (List<TableStatements>)bf.Deserialize(ms);
            }
            return objResult;
        }

