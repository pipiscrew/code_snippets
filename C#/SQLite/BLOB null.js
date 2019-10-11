            if (!System.DBNull.Value.Equals(dR["NODE_PIC1"]))
            {
                tmpName1 = Path.GetTempFileName();
                File.WriteAllBytes(tmpName1, (byte[])dR["NODE_PIC1"]);
            }
